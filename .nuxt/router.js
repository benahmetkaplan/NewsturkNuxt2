import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _83473b44 = () => interopDefault(import('../pages/category/_id.vue' /* webpackChunkName: "pages/category/_id" */))
const _393ab3ff = () => interopDefault(import('../pages/page/_slug.vue' /* webpackChunkName: "pages/page/_slug" */))
const _20f0db00 = () => interopDefault(import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _9964ac26 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _83473b44,
    name: "category-id"
  }, {
    path: "/page/:slug?",
    component: _393ab3ff,
    name: "page-slug"
  }, {
    path: "/post/:id?",
    component: _20f0db00,
    name: "post-id"
  }, {
    path: "/",
    component: _9964ac26,
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
