import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a2bf3342 = () => interopDefault(import('..\\pages\\category\\_id.vue' /* webpackChunkName: "pages/category/_id" */))
const _37407784 = () => interopDefault(import('..\\pages\\page\\_slug.vue' /* webpackChunkName: "pages/page/_slug" */))
const _10adc306 = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _6625c735 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/category/:id?",
    component: _a2bf3342,
    name: "category-id"
  }, {
    path: "/page/:slug?",
    component: _37407784,
    name: "page-slug"
  }, {
    path: "/post/:id?",
    component: _10adc306,
    name: "post-id"
  }, {
    path: "/",
    component: _6625c735,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
