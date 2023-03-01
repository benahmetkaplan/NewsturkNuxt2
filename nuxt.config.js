require('dotenv').config();
import webpack from 'webpack';
import axios from 'axios';

export default () => {
	return {
		head: {
			title: process.env.APP_NAME,
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'minimum-scale=1.0, width=device-width, maximum-scale=0.6667, user-scalable=no' }
			],
			link: [
				{ rel: 'shortcut icon', href: '#' },
				{ rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&amp;display=swap' },
				{ rel: 'stylesheet', type: 'text/css', href: '/assets/inc/fontawesome/fontawesome.min.css' },
				{ rel: 'stylesheet', type: 'text/css', href: '/assets/inc/bootstrap/bootstrap.min.css' },
				{ rel: 'stylesheet', type: 'text/css', href: '/assets/inc/checkbox-switch/checkbox-switch.css' },
				{ rel: 'stylesheet', type: 'text/css', href: '/assets/inc/weather/weather.css' },
				{ rel: 'stylesheet', type: 'text/css', href: '/assets/inc/splide/splide.min.css' }
			]
		},
		css: [
			"~/assets/scss/style.scss"
		],
		loading: { color: '#ffffff' },
		modules: [
			'@nuxtjs/axios',
			'@nuxtjs/sitemap',
			'@nuxt/http'
		],
		sitemap: {
			hostname: 'http://application.newsturk.com.tr/',
			path: '/sitemap.xml',
			cacheTime: 1000 * 60 * 60 * 2,
			trailingSlash: true,
			gzip: true,
			routes: async () => {
				const categories = await axios.get(`${process.env.API_URL}/categories`);
				const categoryItems = categories.data.map((item) => `/category/${item.id}`);

				const posts = await axios.get(`${process.env.API_URL}/posts?per_page=99`);
				const postItems = posts.data.map((item) => `/post/${item.id}`);

				return [
					...categoryItems,
					...postItems
				];				
			}
		},
		plugins: [
			{ src: './plugins/vue-sweetalert.js' },
			{ src: './plugins/vee-validate.js' },
			{ src: './plugins/vue-tel-input.js' },
			{ src: './plugins/vue-disqus.js' },
			{ src: './plugins/vue-content-placeholders.js' }
		],
		build: {
			transpile: ["vee-validate/dist/rules"],
			vendor: ["jquery"],
			plugins: [
				new webpack.ProvidePlugin({
					$: 'jquery'
				})
			],
			loaders: {
				sass: {
					implementation: require('sass')
				},
				scss: {
					implementation: require('sass')
				}
			},
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
				'@nuxtjs/dotenv', { filename: '.env' },
				'@nuxt/typescript-build'
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
}