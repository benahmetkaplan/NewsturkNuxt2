require('dotenv').config();

module.exports = {
	head: {
		title: process.env.APP_NAME,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'minimum-scale=1.0, width=device-width, maximum-scale=0.6667, user-scalable=no' }
		],
		link: [
			{ rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/ionicons@4.5.10-1/dist/css/ionicons.min.css' },
			{ rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&amp;display=swap' },
			{ rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.css' },
			{ rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick-theme.min.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/inc/bootstrap/bootstrap.min.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/inc/splide/splide.min.css' },
			{ rel: 'stylesheet', type: 'text/css', href: `/assets/css/style.css?v=${process.env.APP_VERSION}` }
		],
		script: [
			{ src: '/assets/js/jquery.min.js' },
			{ src: '/assets/js/jquery-migrate.min.js' },
			{ src: '/assets/js/slick.min.js' },
			{ src: `/assets/js/custom.js?v=${process.env.APP_VERSION}` }
		]
	},
	loading: { color: '#ffffff' },
	modules: ['@nuxtjs/axios'],
	buildModules: [
		['@nuxtjs/dotenv', { filename: '.env' }]
	],
	publicRuntimeConfig: {
		APP_VERSION: process.env.APP_VERSION,
		APP_NAME: process.env.APP_NAME,

		SITE_URL: process.env.SITE_URL,
		API_PATH: process.env.API_PATH,
		API_URL: process.env.API_URL
	}
}