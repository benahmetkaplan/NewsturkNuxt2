import Vuex from 'vuex';
import Vue from 'vue';

import category from './category';
import post from './post';
import util from './util';

Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: {
    category,
    post,
    util
  }
});