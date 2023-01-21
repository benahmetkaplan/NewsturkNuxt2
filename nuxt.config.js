module.exports = {
	head: {
		title: 'News Turk',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,viewport-fit=cove' }
		],
		link: [
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/style.css' }
		],
		script: [
			{ src: '/assets/js/jquery.min.js' },
			{ src: '/assets/js/custom.js' }
		]
	},
	loading: { color: '#ffffff' },
	modules: ['@nuxtjs/axios']
}