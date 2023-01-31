require('dotenv').config();
import webpack from 'webpack';

module.exports = {
	head: {
		title: process.env.APP_NAME,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'minimum-scale=1.0, width=device-width, maximum-scale=0.6667, user-scalable=no' }
		],
		link: [
			{ rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&amp;display=swap' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/inc/fontawesome/fontawesome.min.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/inc/bootstrap/bootstrap.min.css' },
			{ rel: 'stylesheet', type: 'text/css', href: `/assets/css/inc/splide/splide.min.css?v=${process.env.APP_VERSION}` },
			{ rel: 'stylesheet', type: 'text/css', href: `/assets/css/style.css?v=${process.env.APP_VERSION}` }
		]
	},
	loading: { color: '#ffffff' },
	modules: [
		['@nuxtjs/axios']
	],
	plugins: [
		{ src: './plugins/vue-sweetalert.js' },
		{ src: './plugins/vee-validate.js' },
		{ src: './plugins/vue-tel-input.js' }
	],
	build: {
		transpile: ["vee-validate/dist/rules"],
		vendor: ["jquery"],
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery'
			})
		],
		extend(config, ctx) {
			config.module.rules.push({
					test: /\.(ogg|mp3|wav|mpe?g)$/i,
					loader: 'file-loader',
					options: {
					name: '[path][name].[ext]'
				}
			})
		}
	},
	buildModules: [
		[
			'@nuxtjs/dotenv', { filename: '.env' }, '@nuxt/typescript-build'
		]
	],
	publicRuntimeConfig: {
		APP_VERSION: process.env.APP_VERSION,
		APP_NAME: process.env.APP_NAME,

		SITE_URL: process.env.SITE_URL,
		API_PATH: process.env.API_PATH,
		API_URL: process.env.API_URL
	}
}