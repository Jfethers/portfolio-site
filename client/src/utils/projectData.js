// all the seed project data

const projectData = [
	{
		key: "portfolioSite",
		title: "Personal Site",
		subHeading:
			"Is it meta to talk about my personal site on my personal site..?",
		job: "Personal Project",
		description: [
			[
				"Probably. It's a CRA configured to use Typescript. It features a Node backend which integrates the Sendgrid api in order to send emails to me via the contact form.",
			],
			[
				"I'm particularly pleased with the project tiles which feature a deliciously millennial-y muted rainbow. The colors are exported scss variables which the Tile component picks up and applies dynamically using a data file to source color along with content for a given project.",
			],
		],
		tech: ["Typescript", "Javascript", "React", "Node"],
		color: "darkCyan",
		link: "https://github.com/Jfethers/portfolio-site",
	},
	{
		key: "catalogIngestion",
		title: "Catalog Ingestion",
		subHeading: "My first foray into the world of backend",
		job: "Boxed",
		description: [
			[
				"In my final 6 or so months of my time at Boxed, there was an initiative to make all engineers fullstack. So I found myself on a team with other back end engineers writing the catalog [read: product] ingestion software for the enterprise business venture we were calling Spresso. Our main objective was to find a way to ingest this csv of products and from that parse the data, structure the various complex relationships, and upsert them to the database via mongoose.",
			],
		],
		tech: ["Typescript", "Javascript", "Mongo"],
		color: "paynesGray",
	},
	{
		key: "knitCounter",
		title: "Knit Counter",
		subHeading: "Just keep knitting...",
		job: "Personal Project",
		description: [
			[
				"In knitting its often necessary to keep track of rows as you knit. I thought it'd be fun to make a small counter app to get my feet wet writing react typescript!",
			],
		],
		tech: ["Typescript", "React"],
		color: "red",
		link: "https://github.com/Jfethers/knit-counter",
	},
	{
		key: "spressoBeta",
		title: "Spresso Beta",
		subHeading: "Straight to beta",
		job: "Boxed",
		description: [
			[
				"A side hustle of Boxed is their service as a software named Spresso. On a small crack squad of engineers, we quickly put out the beta platform for Spresso. I coded, start to finish, the ability to implement bin packing rules for deliveries as well as fetching, editing, and filtering a company's product catalog",
			],
		],
		tech: ["Remix", "React", "Typescript"],
		color: "orange",
	},
	{
		key: "customNavigation",
		title: "Custom Navigation",
		subHeading: "Bip it, bop it, change it, swap it",
		job: "Boxed",
		description: [
			[
				"There is a lot of logic that goes into what you see in Boxed's navigation. If you're a B2B customer you would undoubtedly see something different than a B2C customer. You might see one thing if you're in California and something all together different in Maine.",
			],
			[
				"Prior to this project, our web engineers were asked to release Boxed Web to production just hard coding these changes. It was a broken-step type of problem - they were managing it and it was a pain but no one had the time / resources to fix it. Alongside our api team, I implemented a new tool which would allow the folks over at Marketing to set custom navigations per navigation type. Boxed web was relieved to no longer own this responsibility!",
			],
		],
		tech: ["React", "React Final Form"],
		color: "carrotOrange",
	},
	{
		key: "reorderVariants",
		title: "Reorder Variants",
		subHeading: "Much ado about a drop down's order..",
		job: "Boxed",
		description: [
			[
				"I was presented with an ask to allow for the reordering of variants in drop downs. If you're viewing a product page with variant options, it would be nice if we (us at Boxed, not casual Boxed users) could change the order of variants in the drop down",
			],
			[
				"Adding the ability to drag and drop variants was a quick and easy way to give non engineers the power to make impactful yet safe changes to Boxed Web",
			],
		],
		tech: ["React", "React Final Form"],
		color: "coral",
	},
	{
		key: "beyesianHypothesis",
		title: "Bayesian Hypothesis",
		subHeading: "My first project at Boxed",
		job: "Boxed",
		description: [
			[
				"I created a tool to let the Data Science folk enter the data figures for their experiments and view them in real time!",
			],
		],
		tech: ["React", "React Final Form"],
		color: "saffron",
	},
	{
		key: "RavelryApi",
		title: "Ravelry Api",
		subHeading: "Mix? or Remix?",
		job: "Boxed",
		description: [
			[
				"This was a research project I undertook during my time at Boxed. My manager was curious what working with Remix was like and whether or not it would be a good tool for our internal tools platform. I created a quick app utilizing Ravelry's free API all built on Remix",
			],
		],
		tech: ["Remix", "React"],
		color: "pistachio",
		link: "https://github.com/Jfethers/remix-demo-app",
	},
	{
		key: "productRedesign",
		title: "Product Category Redesign",
		subHeading: "What DOES thousands of products look like on a web page?",
		job: "Boxed",
		description: [
			[
				"Boxed had literally thousands of products organized in complex hierarchies of categories nested within categories. I took on the task of redesigning the category page to use a better tree model! Cut down on load time and made navigating categories much easier",
			],
		],
		color: "zomp",
		tech: ["React", "Javascript"],
	},
	{
		key: "auditLogs",
		title: "Tools Platform Audit Logs",
		subHeading:
			"People often joke that in order to understand recursion you first must understand recursion...",
		job: "Boxed",
		description: [
			[
				"Using the power of react final form, I wrote my own diffing algorithm that would accurately determine if a given value on a page had been changed and by who and when. This was really helpful for tracking down problematic changes to products on the website!",
			],
		],
		color: "darkCyan",
		tech: ["Javascript", "React Final Form", "Mongo"],
	},
	{
		key: "themeDesign",
		title: "Theme Design",
		subHeading: "To infinity and beyond!",
		job: "Zola",
		description: [
			[
				"Themes have been my baby from the moment I started at Zola. When I first joined the team, we had about 35 themes. Over the course of the year the number of themes have grown by leaps and bounds as I first coded new themes and later variations. Towards the end of my employment, I oversaw theme development as we continued to create more gorgeous themes for couples to pick from.",
			],
		],
		tech: ["Less", "Postgresql", "React"],
		color: "paynesGray",
		link: "https://www.zola.com/wedding-planning/website/designs",
	},
	{
		key: "themeRedesign",
		title: "Themes Listing Redesign",
		subHeading:
			"First serious project at Zola - Overhaul the Themes Listing Page",
		job: "Zola",
		description: [
			["This project was a huge undertaking spanning two large initiatives. "],
			[
				"First: Implement the ability to filter themes by color or by matching invitation. ",
			],
			[
				"Second: Restructure themes to allow us to implement 'variations'. This meant a change to how themes were stored in the database going from a single layer object of theme data to a notion of Theme Groups which have themes assigned to them - a parent and a child. Swatch toggle buttons allowed a user to thumb through these variations and ultimately make a selection.",
			],
		],
		tech: ["React", "Redux", "Node", "Less"],
		color: "red",
	},
	{
		key: "guestNotInGuestList",
		title: "Guest NOT in Guest List",
		subHeading:
			"What do you do if you go to RSVP to a wedding only to realize ... you aren't on the list?",
		job: "Zola",
		description: [
			[
				"This was a really fun project and was a great learning experience. The premise of the project was to solve a problem that happened quite a bit - A guest tries to RSVP to a couples' wedding only to realize they aren't on the guest list. ",
			],
			[
				"Previously, the only solution for guests in this predicament was copy telling them to call Zola customer service. This resulted in a lot of really weird mediation between Zola Customer Care, the couple, and the guests, as we all came together to figure out what the issue is. More often than not, its a misspelling on the couples's part. As someone who misspelled my father in law's name I can lend some anecdotal evidence on the issue.",
			],
			[
				"The solution to this problem was a new flow for this use case. If a potential guest could't find their name in the RSVP search copy would appear telling the guest to go ahead and email the couple through this handy form. The form submission did 2 things - it forward their query on to the couple for them to sort out and it also added a notification to their account that we could then fetch and render as a neat red dot on their dashboard letting them know this issue was outstanding.",
			],
		],
		tech: ["React", "Redux", "Redux Forms", "Less", "Node"],
		color: "orange",
	},
	{
		key: "unification",
		title: "Unification",
		job: "Zola",
		subHeading: "Two platforms, two stacks, two looks, too much",
		description: [
			[
				"When Zola first launched, our sole business was Registries - bringing the best assortment of products and experiences to couples everywhere. In 2017, we launched Zola Weddings which was a suite of online planning tools - Checklist, Guest List, and Websites specifically. Over time the two diverged in terms of style. They were written years apart, which is as good as a decade in tech, so in some parts of the site you might see a square button and others a rounded button. This button topic is contentious at Zola, its best not to bring it up. Other problems included little irritations like being unable to navigate between the two platforms easily on mobile as well as inconsistencies in styles, colors, or even fonts.",
			],
		],
		tech: ["React", "Less"],
		color: "carrotOrange",
	},
	{
		key: "preauthPages",
		title: "Preauth Pages",
		job: "Zola",
		subHeading: "Opening the gates of Zola up to the unregistered masses",
		description: [
			[
				"Previously, the only way to really interact with Zola's planning tools was to create an account. This is a lot of friction to overcome for a user who's on the fence between Wedding Wire, The Knot, or the dozens of other competing wedding tech sites (bet you didn't realize Wedding Tech was a thing till just now)",
			],
		],
		tech: ["React", "Redux", "React Router", "Less"],
		color: "coral",
	},
	{
		key: "mobileSnapShot",
		title: "Mobile Snap Shot",
		job: "Zola",
		subHeading: "Fun little query param project",
		description: [
			[
				"Our iOS engineer came up to me the other day with an interesting problem. The way they display the current state of a user's wedding website is to make a request to create a snap shot of the user's actual wedding website. This works well except because our websites have the ability to hide pages and the showing and hiding of pages is handled server side they were unable to create snap shots of pages that were hidden. As well, they wanted the ability to disable tracking since when these routes are hit no one is actually viewing the pages. Another param (badum tish) was to be able to hide the red banner alerting guests their website was unpublished because they were handling that messaging elsewhere in the App already as well as the navigation.",
			],
		],
		tech: ["React", "Redux", "React Router", "Node"],
		color: "saffron",
	},
	{
		key: "flightpathRedesign",
		title: "Flightpath Redesign",
		subHeading: "Baby's First Project",
		job: "Zola",
		description: [
			[
				"One of my favorite projects from my time at Flighpath was working on the company's site redesign. I was lucky enough to work with some incredibly talented engineers. I was responsible for the Work page as well as all of the individual client pages. It was so much fun and I learned so much doing it.",
			],
		],
		tech: ["CSS"],
		color: "pistachio",
	},
	{
		key: "cfd",
		title: "Custom Furniture Design",
		job: "CFD",
		subHeading: "Was it Uber that said everybody needed a side hustle?",
		description: [
			[
				"Custom Furniture Design is a stuido out in San Francisco and I routinely touch up their photos to mimick studio lighting.",
			],
		],
		tech: ["Photoshop"],
		color: "zomp",
	},
	{
		key: "cms",
		title: "CMS Navigation",
		job: "Zola",
		subHeading: "Linear Flow and a Win for Mobile",
		description: [
			[
				"We wanted to see if a different flow for editing pages would lead to more published wedding websites. I created a new navigation flow utilizing a more linear step by step flow then set up an Optimizely test to track the differences. Optimizely aside, this was a huge coupe for the Weddings platform in mobile.",
			],
		],
		tech: ["React", "Redux", "React Router", "Less", "Optimizely"],
		color: "darkCyan",
	},
	{
		key: "react16",
		title: "Over React-ing",
		job: "Zola",
		subHeading: "Upgraded web wedding's platform to React 16 from React 15",
		description: [
			[
				"The biggest struggle here was dealing with aspects of React that had become more asynchronous than it's previous itereation. Certain life cycles, ahem, ComponentWillReceiveProps, had to be refactored. This was definitely a quest to slay dragons",
			],
		],
		tech: ["React"],
		color: "paynesGray",
	},
];

export default projectData;
