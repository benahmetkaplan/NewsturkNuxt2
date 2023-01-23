module.exports = {
	head: {
		title: 'News Turk',
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
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/style.css?v=1.0.4' }
		],
		script: [
			{ src: '/assets/js/jquery.min.js' },
			{ src: '/assets/js/jquery-migrate.min.js' },
			{ src: '/assets/js/slick.min.js' },
			{ src: '/assets/js/custom.js?v=1.0.4' }
		]
	},
	loading: { color: '#ffffff' },
	modules: ['@nuxtjs/axios']
}