# AI Shows Board

Free shows feed powered by GitHub Pages + Actions + AI crawlers. Zero hosting costs.

- **RSS feed** at `/rss.xml`
- **Shows feed UI** with search and filters
- **Daily updates** via GitHub Actions cron
- **Smart deduplication** (no duplicates)
- **Mobile responsive** design

**Your static site**

Your shows feed board: `https://YOUR_USERNAME.github.io/REPO_NAME/`

**To add more sources**

edit `src/multi-crawl.ts` and `.github/workflows/shows-feed.yml`

## Stack

Bun + TypeScript + Cheerio + AI SDK + GitHub Actions

## Quick Start
1. **Fork this repo**
1. **Add OpenAI API key** to repo secrets:
   - Go to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI API key from [platform.openai.com](https://platform.openai.com)
1. **Enable GitHub Pages** (Settings → Pages → Deploy from branch: `gh-pages`)
1. **Run workflow** (Actions → `shows-feed` → Run workflow)
   > **Note:** `GITHUB_TOKEN` is automatically provided by GitHub Actions

## Local Testing

```bash
# Install
bun install

# Test single source (27 shows)
SOURCE_URL=https://news.ycombinator.com/shows SOURCE_NAME=test SELECTOR='.titleline>a' bun crawl

# Test multiple sources (75+ shows)
bun multi-crawl

# Build feed
bun build

# Serve locally
bun serve
```

## Troubleshooting

**GitHub Actions failing with npm 503 errors?**

- This is temporary npm registry downtime
- Workflow has 3 retry attempts with 30s delays
- Just re-run the workflow later

**No shows showing up?**

- Check Actions logs for API key issues
- Verify `OPENAI_API_KEY` is set in repo secrets
- Some shows sites may block automated requests
