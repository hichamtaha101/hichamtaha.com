export default [
	{
		id: 'travel-alberta',
		timeline: 'April, 2023 - Oct, 2024',
		title: 'Travel Alberta - ATIS',
		link: '/projects/travel-alberta',
		description:
			'ATIS is a web application developed for destination management operators in Alberta, enabling them to create, manage, and monitor tourism attraction listings. These listings are then delivered to public-facing websites via a dedicated API service created for Travel Alberta. The project was designed to transition from a legacy, unsupported system to a more modern and scalable tech stack. There are three components involved in ATIS: the operator app, the API, and the migration.',
		sections: [
			{
				title: 'ATIS - Operator App',
				titleDescriptions: [
					'The operator-facing web app allows operators to manage their listings and access relevant reporting and analytics. It integrates with a Sanity CMS instance, which is primarily managed by the contact center at Travel Alberta.',
					'Both the web application and CMS instance leverage the following technologies: Next on Vercel, Typescript, Tailwind, Storybook, Sanity, Sendgrid, Plausible, Jest, and Playwright.',
				],
				slides: [
					{
						title: 'Login',
						src: '/projects/travel-alberta/web-app/user-dashboard.png',
					},
					{
						title: 'Create Account',
						src: '/projects/travel-alberta/web-app/create-your-account.png',
					},
					{
						title: 'Create Account - Email Confirmation',
						src: '/projects/travel-alberta/web-app/account-confirm-email.png',
					},
					{
						title: 'Dashboard',
						src: '/projects/travel-alberta/web-app/user-dashboard.png',
					},
					{
						title: 'Create Organization',
						src: '/projects/travel-alberta/web-app/create-org-splash.png',
					},
					{
						title: 'Create Organization - Details',
						src: '/projects/travel-alberta/web-app/create-org-details.png',
					},
					{
						title: 'Create Organization - Email Confirmation',
						src: '/projects/travel-alberta/web-app/organization-confirm-email.png',
					},
					{
						title: 'Create Listing',
						src: '/projects/travel-alberta/web-app/create-listing.png',
					},
					{
						title: 'Create Listing - Location',
						src: '/projects/travel-alberta/web-app/create-listing-location.png',
					},
					{
						title: 'Create Listing - Media',
						src: '/projects/travel-alberta/web-app/create-listing-images.png',
					},
					{
						title: 'Create Listing - Overview',
						src: '/projects/travel-alberta/web-app/create-listing-overview.png',
					},
					{
						title: 'Dashboard - Listings',
						src: '/projects/travel-alberta/web-app/user-dashboard-listings.jpg',
					},
					{
						title: 'Dashboard - Analytics',
						src: '/projects/travel-alberta/web-app/user-dashboard-analytics.jpg',
					},
				],
			},
			{
				title: 'ATIS - API',
				titleDescriptions: [
					'The API provides operator developers with access to listing and organization data related to their business, typically for website development. Built on AWS infrastructure, it supports features such as API key management, rate limiting, throttling, caching, and robust security features like authentication via AWS IAM, encryption with SSL/TLS, and integration with AWS WAF for protection against common web exploits.',
					'Technologies involved here include: Typescript, Lambda, API Gateway, and CloudWatch with SNS Topics.',
				],
				slides: [
					{
						title: 'API - Documentation',
						src: '/projects/travel-alberta/api/api-documentation.png',
					},
					{
						title: 'API - Infrastructure Diagram',
						src: '/projects/travel-alberta/api/mermaid-diagram.png',
					},
					{
						title: 'API - Gateway',
						src: '/projects/travel-alberta/api/api-gateway.png',
					},
				],
			},
			{
				title: 'ATIS - Migration Script',
				titleDescriptions: [
					"The migration script is a sophisticated in-house tool designed to transition legacy ATIS data (in CSV format) to the new Sanity CMS structure. The process involves mapping relationships between approximately 7,000 listings, 11,000 images, 3,000 users, and 2,000 organizations, while maintaining data integrity. Ensuring accurate taxonomy and data structure mapping, while keeping stakeholders informed of potential risks, was essential for the migration's success. Additionally, a mass email campaign was sent to existing ATIS users, notifying them of the changes and outlining the necessary steps for migrating to the new platform.",
					'Technologies involved here include: Typescript, Nodejs, and Sanity.',
				],
				slides: [
					{
						title: 'Migration Email - Claim Your Listings',
						src: '/projects/travel-alberta/migration/migration-email.png',
					},
					{
						title: 'Migration Email - Reminder',
						src: '/projects/travel-alberta/migration/migration-email-reminder.png',
					},
					{
						title: 'Migration Email - Support',
						src: '/projects/travel-alberta/migration/migration-email-help.png',
					},
				],
			},
		],
	},
	{
		id: 'henesys-erp',
		timeline: 'Jan, 2019 - Jan, 2022',
		title: 'Henesys ERP',
		link: '/projects/henesys-erp',
		description:
			'Henesys ERP is an enterprise software developed to replace a legacy MS-DOS-based system. The platform enables wholesalers to quote, create, pick, invoice, and ship orders to vendors, while also managing inventory and generating sales and accounting reports.',
		sections: [
			{
				title: 'Henesys ERP',
				titleDescriptions: [
					'Resources are managed and displayed in modular, robust, and flexible tabular views, while taking advantage of server side pagination, and query building with advanced filtering capabilities.',
					'Furthermore, all resource oriented endpoints are built with authentication middleware. The permissions module allows the wholesale owners to create custom user roles for their employees, and attach the appropriate CRUD operations for each necessary resource. Once altered, the resource automatically takes into effect returning 401 status responses upon an unauthorized request or page navigation.',
					'The platform stack involves MongoDB, Express, Node, Vue, Docker, and AWS. Additionally technology frameworks and utility libraries include Vuetify, Tailwindcss, Postcss, and Webpack.',
				],
				slides: [
					{
						title: 'Henesys ERP Login',
						src: '/projects/henesys-erp/login.png',
					},
					{
						title: 'Henesys ERP Orders',
						src: '/projects/henesys-erp/orders.png',
					},
					{
						title: 'Henesys ERP Customer Management',
						src: '/projects/henesys-erp/customer-management.png',
					},
					{
						title: 'Henesys ERP User Roles',
						src: '/projects/henesys-erp/administration-roles.png',
					},
				],
			},
		],
	},
	{
		id: 'websites',
		timeline: 'June, 2020 - Feb, 2023',
		title: 'Websites',
		link: '/projects/websites',
		description:
			'The following is a list of websites I have developed over the years for freelance clients and close friends. These projects span e-commerce, portfolio, and content management solutions. Technologies used in their development include Vue, Nuxt, Node.js, Express, MongoDB, and the Square payment processing SDK.',
		sections: [
			{
				title: 'Henesys Group',
				titleDescriptions: [
					'The Henesys Group website is a Nuxt based project built to display and highlight the solutions and overview of Henesys Group Consulting. The site is generated and hosted statically on an AWS S3 bucket.',
					'One of the solutions provided by Henesys Group include free shipping quotes with the option to purchase shipping labels for small to medium packages. Shipping providers integrated include Canpar, Canada Post, Purolator, and DHL.',
				],
				link: 'https://henesysgroup.com/',
				slides: [
					{
						title: 'Henesys Group Homepage',
						src: '/projects/websites/henesys-group-homepage.png',
					},
					{
						title: 'Henesys Group Shipping Quote',
						src: '/projects/websites/henesys-group-shipping.png',
					},
					{
						title: 'Henesys Group Contact',
						src: '/projects/websites/henesys-group-contact.png',
					},
				],
			},
			{
				title: 'Vancouver Bitcoin',
				titleDescriptions: [
					'Vancouver Bitcoin is a Wordpress website built for a crypto brokerage. The site utilizes HTML, CSS, Javascript, PHP, MariaDB, Docker, and Node hosted on an AWS infrastructure including Route53, ACM, EC2, ALB, and RDS.',
					'Requirements defined in the mockup of this project included custom page templates, wordpress ajax actions for formatted data, and custom short codes for allowing the client to build custom secondary pages.',
				],
				link: 'https://vancouverbitcoin.com/',
				slides: [
					{
						title: 'Vancouver Bitcoin Homepage',
						src: '/projects/websites/vb-home.png',
					},
					{
						title: 'Vancouver Bitcoin Blog',
						src: '/projects/websites/vb-blog.png',
					},
					{
						title: 'Vancouver Bitcoin OTC',
						src: '/projects/websites/vb-secondary-page.png',
					},
					{
						title: 'Vancouver Bitcoin Ledger',
						src: '/projects/websites/vb-ledger-template.png',
					},
				],
			},
			{
				title: 'Neelam Woolley',
				titleDescriptions: [
					'Neelam Woolley is a portfolio website built for a designer of Henesys Group. The website was built on the Nuxt framework taking advantage of postcss plugins and tailwindcss. The site is statically hosted on S3 via CloudFront and Route53.',
				],
				link: 'https://neelamwoolley.com/',
				slides: [
					{
						title: 'Neelam Woolley Homepage',
						src: '/projects/websites/nw-homepage.png',
					},
					{
						title: 'Neelam Woolley Design',
						src: '/projects/websites/nw-design-page.png',
					},
					{
						title: 'Neelam Woolley Project Detail',
						src: '/projects/websites/nw-project-detail-page.png',
					},
					{
						title: 'Neelam Woolley Illustration',
						src: '/projects/websites/nw-illustrations-page.png',
					},
				],
			},
			{
				title: 'Gladiator Bikes',
				titleDescriptions: [
					"Gladiator Bikes is a Richmond based bike company that also serve as a client to Henesys Group's ERP platform. Inventory and store settings are pulled directly from the Henesys ERP via privately accessed endpoints. This site was built strictly on the Nuxt framework utilizing postcss, tailwindcss, and hosted statically on AWS S3.",
					'Gladiator Bikes also integrates the Square API for secure online payments via credit/debit card or digital wallets like Google or Apple Pay.',
				],
				link: 'https://gladiatorbikes.ca/',
				slides: [
					{
						title: 'Gladiator Bikes Homepage',
						src: '/projects/websites/gladiator-homepage.png',
					},
					{
						title: 'Gladiator Bikes Product Detail',
						src: '/projects/websites/gladiator-product-detail.png',
					},
					{
						title: 'Gladiator Bikes Checkout',
						src: '/projects/websites/gladiator-checkout.png',
					},
				],
			},
		],
	},
	{
		id: 'bittreo',
		timeline: 'Jan, 2018 - Dec, 2022',
		title: 'Bittreo',
		link: '/projects/bittreo',
		description:
			"Bittreo is a Vancouver-based over-the-counter cryptocurrency buy and sell platform, used exclusively by the company's owners and employees to streamline daily operations. The platform’s services and data structure comply with Fintrac regulations and offer robust support for business intelligence reporting.",
		sections: [
			{
				title: 'Bittreo',
				titleDescriptions: [
					'The Bittreo platform incorporates core market functionalities from an online cryptocurrency exchange, Binance. Market orders based on customer variables and asset details are performed and displayed appropriately to improve the daily processes of a Bittreo platform user.',
					'Technology used for the development of Bittreo include Node, Express, MongoDB, Vue and AWS.',
				],
				slides: [
					{
						title: 'Bittreo Login',
						src: '/projects/bittreo/login.png',
					},
					{
						title: 'Bittreo Customer Management',
						src: '/projects/bittreo/customer-management.png',
					},
					{
						title: 'Bittreo Customer Profile',
						src: '/projects/bittreo/customer-profile.png',
					},
					{
						title: 'Bittreo Cash Management',
						src: '/projects/bittreo/cash-management.png',
					},
				],
			},
		],
	},
	{
		id: 'chatso',
		timeline: 'Nov, 2019 - Mar, 2021',
		title: 'Chatso',
		link: '/projects/chatso',
		description:
			"Chatso is a chat platform developed as an alternative to Zendesk, offering analytics tailored to Advesa Digital's e-commerce solutions. The platform provides agents with real-time, accessible data to better understand and meet customer needs.",
		sections: [
			{
				title: 'Chatso',
				titleDescriptions: [
					'With a robust, flexible, and secure socket.io architecture, Chatso allows agents to handle one to many clients from variable ranges of store access. Agents are able to pull up product information about the client or store at hand, and perform actions like coupon generation, file uploads, and chat transferring.',
					'Additionally, Chatso takes advantage of in-house analytics and Google Analytics to provide a combination of valuable chat and website data on a per store basis.',
					'Core technology used to develop Chatso include React, Node, Express, Socket.io, Mongo, AWS, and the React component library, Material UI.',
				],
				slides: [
					{
						title: 'Chatso Login',
						src: '/projects/chatso/chatso-login.png',
					},
					{
						title: 'Chatso Dashboard',
						src: '/projects/chatso/chatso-dashboard.png',
					},
					{
						title: 'Chatso Live Chat',
						src: '/projects/chatso/chatso-live-chat.png',
					},
					{
						title: 'Chatso Analytics',
						src: '/projects/chatso/chatso-analytics.png',
					},
					{
						title: 'Chatso Agents',
						src: '/projects/chatso/chatso-agents.png',
					},
				],
			},
		],
	},
	{
		id: 'client-portal',
		timeline: 'Dec, 2017 - Dec, 2019',
		title: 'Client Portal',
		link: '/projects/client-portal',
		description:
			"A portal providing clients an interactive, user-friendly, powerful analytics tool for measuring their online performance with Convertus Digital. The platform facilitates and optimizes the client's decision making ability in the online automotive industry.",
		sections: [
			{
				title: 'Client Portal',
				titleDescriptions: [
					'Segments of the Client Portal uses the Google Analytics API to fetch organic statistics essential to clients who have a dealership website.',
					"Additionally, Google Adwords' campaign reporting API was used to grab campaign leads, costs, impressions, clicks, average cost per click, and cost per acquisition",
					'The portal was built on the Wordpress framework taking advantage of front-end libraries jQuery, AmCharts, and Bootstrap.',
				],
				slides: [
					{
						title: 'Client Portal Summary',
						src: '/projects/client-portal/summary.jpg',
					},
					{
						title: 'Client Portal Tour',
						src: '/projects/client-portal/bootstrap-tour.jpg',
					},
					{
						title: 'Client Portal Organic Search',
						src: '/projects/client-portal/organic-search.jpg',
					},
					{
						title: 'Client Portal Paid Search',
						src: '/projects/client-portal/paid-search.jpg',
					},
					{
						title: 'Client Portal Inventory',
						src: '/projects/client-portal/inventory.jpg',
					},
					{
						title: 'Client Portal Leads',
						src: '/projects/client-portal/leads.jpg',
					},
				],
			},
		],
	},
	{
		id: 'autotrader-migration',
		timeline: 'Dec, 2018 - Nov, 2019',
		title: 'Autotrader Migration',
		link: '/projects/autotrader-migration',
		description:
			'Led a project to transition legacy dealership websites to a modern WordPress platform, successfully migrating 1,500 websites. The migration included mapping widgets, page templates, and implementing custom features tailored to client requirements. Designed and deployed an online portal for monitoring, querying, and updating dealership websites. Additionally, developed a web service delivering comprehensive vehicle reference system data, including OEM make, model, trim, and style information. This API was privately created as an in-house solution for Convertus Digital.',
		sections: [
			{
				title: 'Migration Script',
				titleDescriptions: [
					"The script was designed to parse website data from an XML feed accessed via FTP, seamlessly map it to the WordPress platform's widget templates, theme settings, and core data structures, and execute the website migration using WP-CLI commands.",
					'Technology used includes Node, SQL, AWS, and the Wordpress CLI.',
				],
				slides: [
					{
						title: 'Migration Script Lexus On The Park (Before)',
						src: '/projects/migration-script/lexusonthepark-before.jpg',
					},
					{
						title: 'Migration Script Lexus On The Park (After)',
						src: '/projects/migration-script/lexusonthepark-after.jpg',
					},
					{
						title: 'Migration Script Midtown Ford (Before)',
						src: '/projects/migration-script/midtown-before.jpg',
					},
					{
						title: 'Migration Script Midtown Ford (After)',
						src: '/projects/migration-script/midtown-after.jpg',
					},
				],
			},
			{
				title: 'Achilles Portal',
				titleDescriptions: [
					'The Achilles Portal enables seamless management of SSL certificates, updates to WordPress database plugins and options, and access to private endpoints for website analytics.',
					'Main technology incorporated are Node, Express, MongoDB, and Vue.',
				],
				slides: [
					{
						title: 'Achilles Portal Login',
						src: '/projects/achilles-portal/ap-login.jpg',
					},
					{
						title: 'Achilles Portal Query',
						src: '/projects/achilles-portal/ap-mass-query.jpg',
					},
					{
						title: 'Achilles Portal SSL Certificate',
						src: '/projects/achilles-portal/ap-ssl-cloud-front.jpg',
					},
					{
						title: 'Achilles Portal Selenium',
						src: '/projects/achilles-portal/ap-selenium.jpg',
					},
					{
						title: 'Achilles Portal Networks',
						src: '/projects/achilles-portal/ap-networks.jpg',
					},
				],
			},
			{
				title: 'Vehicle Reference System',
				titleDescriptions: [
					'In-house documentation designed to assist Convertus developers in building vehicle data queries for front-end feature development on dealership websites.',
					'Technology used for development include Node, Express, Vue, MySQL, and AWS.',
				],
				slides: [
					{
						title: 'VRS Introduction',
						src: '/projects/convertus-vrs/intro.png',
					},
					{
						title: 'VRS Styles',
						src: '/projects/convertus-vrs/styles.png',
					},
				],
			},
		],
	},
];
