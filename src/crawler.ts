import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { load } from "cheerio";
import { z } from "zod";
import { sources } from "./sources";

const jobSchema = z.object({
	shows: z.array(
		z.object({
			title: z.string(),
			company: z.string(),
			url: z.string(),
			location: z.string().optional(),
		}),
	),
});

const crawl = async () => {
	let { SOURCE_URL, SOURCE_NAME, SELECTOR } = process.env;
	if (!SOURCE_URL || !SOURCE_NAME) {
		const fallback = sources[0];
		if (!fallback) throw new Error("No sources available");
		SOURCE_URL = fallback.url;
		SOURCE_NAME = fallback.name;
		SELECTOR = fallback.selector;
	}

	try {
		const html = await fetch(SOURCE_URL).then((r) => r.text());
		const $ = load(html);
		const baseUrl = new URL(SOURCE_URL);

		const links = $(SELECTOR)
			.map((_, el) => {
				const $el = $(el);
				let href = $el.attr("href") || "";
				if (href && !href.startsWith("http")) {
					href = new URL(href, baseUrl).toString();
				}
				return {
					text: $el.text().trim(),
					href,
					context: $el.parent().text().trim().slice(0, 200),
				};
			})
			.get()
			.filter((l) => l.text && l.href)
			.slice(0, 100);

		if (!links.length) {
			console.warn(`No links found with selector: ${SELECTOR}`);
			await Bun.write(`results/${SOURCE_NAME}.json`, "[]");
			return;
		}

		const { object } = await generateObject({
			model: openai("gpt-4o-mini"),
			schema: jobSchema,
			prompt: `Extract job listings from these links. Only include actual job postings, not navigation or unrelated links.
Base URL: ${SOURCE_URL}
Links: ${JSON.stringify(links)}`,
		});

		await Bun.write(
			`results/${SOURCE_NAME}.json`,
			JSON.stringify(object.shows || []),
		);
		console.log(`✓ ${SOURCE_NAME}: found ${object.shows?.length || 0} shows`);
	} catch (error) {
		console.error(`✗ ${SOURCE_NAME}:`, error);
		await Bun.write(`results/${SOURCE_NAME}.json`, "[]");
	}
};

crawl().catch(console.error);
