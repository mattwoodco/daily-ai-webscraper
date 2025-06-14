export const sources = [
	{
		name: "Bandsintown",
		url: "https://www.bandsintown.com/all-dates/genre/all-genres",
		selector: 'a[href*="/e/"]',
	},
	{
		name: "Songkick",
		url: "https://www.songkick.com",
		selector: "a.concerts-listing-item__link",
	},
	{
		name: "Live Nation",
		url: "https://www.livenation.com",
		selector: 'a[href*="/events/"]',
	},
	{
		name: "Resident Advisor",
		url: "https://ra.co/events",
		selector: ".event-item a",
	},
	{
		name: "V2 Presents",
		url: "https://v2presents.com/events",
		selector: "a.event",
	},
	{
		name: "ShowScoop",
		url: "https://www.showscoop.com",
		selector: ".concert-listing a",
	},
	{
		name: "Ents24",
		url: "https://www.ents24.com",
		selector: 'a[href*="/event/"]',
	},
	{
		name: "Pollstar",
		url: "https://www.pollstar.com",
		selector: 'a[href*="/tour"]',
	},
	{
		name: "JamBase",
		url: "https://www.jambase.com",
		selector: 'a[href*="/show/"]',
	},
	{
		name: "SeatGeek",
		url: "https://seatgeek.com",
		selector: 'a[href*="/concert/"]',
	},
	{
		name: "Eventbrite",
		url: "https://www.eventbrite.com",
		selector: "a.eds-event-card-content__action-link",
	},
	{
		name: "StubHub",
		url: "https://www.stubhub.com",
		selector: 'a[href*="/concert-tickets/"]',
	},
	{
		name: "Veeps",
		url: "https://veeps.com",
		selector: 'a[href*="/show/"]',
	},
	{
		name: "On Air",
		url: "https://onair.events",
		selector: 'a[href*="/watch/"]',
	},
	{
		name: "Fever",
		url: "https://www.feverup.com",
		selector: 'a[href*="/events/"]',
	},
	{
		name: "DoStuff Media",
		url: "https://dostuffmedia.com",
		selector: 'a[href*="/event/"]',
	},
	{
		name: "Ticketmaster",
		url: "https://www.ticketmaster.com",
		selector: 'a[href*="/event/"]',
	},
	{
		name: "Spotify Concerts",
		url: "https://open.spotify.com/concerts",
		selector: 'a[href*="/concert"]',
	},
	{
		name: "AXS",
		url: "https://www.axs.com",
		selector: 'a[href*="/events/"]',
	},
	{
		name: "Dice",
		url: "https://dice.fm",
		selector: 'a[href*="/gig/"]',
	},
	{
		name: "Bandsintown Pro",
		url: "https://pro.bandsintown.com",
		selector: 'a[href*="/artist/"][href*="/tour"]',
	},
	{
		name: "Local Venue Newsletters",
		url: "variable – city-based",
		selector: "varies",
	},
	{
		name: "Live Nation SLC",
		url: "https://www.livenation.com/discover/concerts/salt-lake-city",
		selector: 'a[href*="/events/"]',
	},
	{
		name: "Do512",
		url: "https://www.do512.com",
		selector: 'a[href*="/events/"]',
	},
];
