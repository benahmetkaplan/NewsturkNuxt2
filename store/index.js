import Vuex from 'vuex';

const apiUrl = "https://www.newsturk.com.tr/wp-json/wp/v2";

var state = {
  isLoading: false,
  gundemPosts: [],
  dunyaPosts: [],
  sporPosts: [],
  teknolojiPosts: [],
  ekonomiPosts: [],
  categoryPosts: [],
  categories: [],
  activePost: null
}

var getters = {
  getGundem: state => {
    return () => {
      return state.gundemPosts
    }
  },
  getDunya: state => {
    return () => {
      return state.dunyaPosts
    }
  },
  getSpor: state => {
    return () => {
      return state.sporPosts
    }
  },
  getTeknoloji: state => {
    return () => {
      return state.teknolojiPosts
    }
  },
  getEkonomi: state => {
    return () => {
      return state.ekonomiPosts
    }
  },
  getCategory: state => {
    return () => {
      return state.categoryPosts
    }
  },
  getCategories: state => {
    return () => {
      return state.categories
    }
  },
  getActive: state => {
    return () => {
      return state.activePost
    }
  }
}

var mutations = {
  setIsLoading(state, value) {
    state.isLoading = value
  },
  setGundemPosts(state, results) {
    state.gundemPosts = results
  },
  setDunyaPosts(state, results) {
    state.dunyaPosts = results
  },
  setSporPosts(state, results) {
    state.sporPosts = results
  },
  setTeknolojiPosts(state, results) {
    state.teknolojiPosts = results
  },
  setEkonomiPosts(state, results) {
    state.ekonomiPosts = results
  },
  setCategoryPosts(state, results) {
    state.categoryPosts = results
  },
  setCategories(state, results) {
    state.categories = results
  },
  setActivePost(state, data) {
    state.activePost = data
  }
}

var actions = {
  async getGundemPosts(store) {
    let endpoint = `${apiUrl}/posts?per_page=10&categories=25`
    try {
      let response = await this.$axios.get(endpoint)
      store.commit("setGundemPosts", response.data)
    } catch (error) {
      console.error(`Error: `, error)
    }
  },
  async getDunyaPosts(store) {
    let endpoint = `${apiUrl}/posts?per_page=8&categories=2`
    try {
      let response = await this.$axios.get(endpoint)
      store.commit("setDunyaPosts", response.data)
    } catch (error) {
      console.error(`Error: `, error)
    }
  },
  async getSporPosts(store) {
    let endpoint = `${apiUrl}/posts?per_page=8&categories=12`
    try {
      let response = await this.$axios.get(endpoint)
      store.commit("setSporPosts", response.data)
    } catch (error) {
      console.error(`Error: `, error)
    }
  },
  async getTeknolojiPosts(store) {
    let endpoint = `${apiUrl}/posts?per_page=6&categories=13`
    try {
      let response = await this.$axios.get(endpoint)
      store.commit("setTeknolojiPosts", response.data)
    } catch (error) {
      console.error(`Error: `, error)
    }
  },
  async getEkonomiPosts(store) {
    let endpoint = `${apiUrl}/posts?per_page=6&categories=3`
    try {
      let response = await this.$axios.get(endpoint)
      store.commit("setEkonomiPosts", response.data)
    } catch (error) {
      console.error(`Error: `, error)
    }
  },
  async getCategoryPosts(store, payload) {
    let endpoint = `${apiUrl}/posts?per_page=20&categories=` + payload
    try {
      let response = await this.$axios.get(endpoint)
      store.commit("setCategoryPosts", response.data)
    } catch (error) {
      console.error(`Error: `, error)
    }
  },
  async getCategoriesList(store) {
    let endpoint = `${apiUrl}/categories`
    try {
      let response = await this.$axios.get(endpoint)
      store.commit("setCategories", response.data)
    } catch (error) {
      console.error(`Error: `, error)
    }
  },
  async getActivePost(store, payload) {
    let endpoint = `${apiUrl}/posts/` + payload
    try {
      let response = await this.$axios.get(endpoint)
      store.commit("setActivePost", response.data)
    } catch (error) {
      console.error(`Error: `, error)
    }
  }
}

var createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions    
  });
};

export default createStore