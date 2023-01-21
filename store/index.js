import Vuex from 'vuex'

var state = {
  isLoading: false,
  gundemPosts: [],
  dunyaPosts: [],
  sporPosts: [],
  teknolojiPosts: [],
  ekonomiPosts: [],
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
  setActivePost(state, data) {
    state.activePost = data
  }
}

var actions = {
  async getGundemPosts(store) {
    var endpoint = `https://www.newsturk.com.tr/wp-json/wp/v2/posts?per_page=10&categories=25`
    try {
      store.commit("setIsLoading", true)
      var response = await this.$axios.get(endpoint)
      setTimeout(() => {
        var datas = []
        response.data.forEach((obj) => {
          datas.push({
            ...obj,
            categoryName: 'GÜNDEM',
            badgeClass: 'badge badge-danger'
          })
        })
        store.commit("setGundemPosts", datas)
        store.commit("setIsLoading", false)
      }, 1000)
    } catch (error) {
      store.commit("setIsLoading", false)
      console.error(`Error on retrieving articles: `, error)
    }
  },
  async getDunyaPosts(store) {
    var endpoint = `https://www.newsturk.com.tr/wp-json/wp/v2/posts?per_page=8&categories=2`
    try {
      var response = await this.$axios.get(endpoint)
      setTimeout(() => {
        var datas = []
        response.data.forEach((obj) => {
          datas.push({
            ...obj,
            categoryName: 'DÜNYA',
            badgeClass: 'badge badge-primary'
          })
        })
        store.commit("setDunyaPosts", datas)
      }, 1000)
    } catch (error) {
      console.error(`Error on retrieving articles: `, error)
    }
  },
  async getSporPosts(store) {
    var endpoint = `https://www.newsturk.com.tr/wp-json/wp/v2/posts?per_page=8&categories=12`
    try {
      var response = await this.$axios.get(endpoint)
      setTimeout(() => {
        var datas = []
        response.data.forEach((obj) => {
          datas.push({
            ...obj,
            categoryName: 'SPOR',
            badgeClass: 'badge badge-success'
          })
        })
        store.commit("setSporPosts", datas)
      }, 1000)
    } catch (error) {
      console.error(`Error on retrieving articles: `, error)
    }
  },
  async getTeknolojiPosts(store) {
    var endpoint = `https://www.newsturk.com.tr/wp-json/wp/v2/posts?per_page=6&categories=13`
    try {
      var response = await this.$axios.get(endpoint)
      setTimeout(() => {
        var datas = []
        response.data.forEach((obj) => {
          datas.push({
            ...obj,
            categoryName: 'TEKNOLOJİ',
            badgeClass: 'badge badge-info'
          })
        })
        store.commit("setTeknolojiPosts", datas)
      }, 1000)
    } catch (error) {
      store.commit("setIsLoading", false)
      console.error(`Error on retrieving articles: `, error)
    }
  },
  async getEkonomiPosts(store) {
    var endpoint = `https://www.newsturk.com.tr/wp-json/wp/v2/posts?per_page=6&categories=3`
    try {
      var response = await this.$axios.get(endpoint)
      setTimeout(() => {
        var datas = [];
        response.data.forEach((obj) => {
          datas.push({
            ...obj,
            categoryName: 'EKONOMİ',
            badgeClass: 'badge badge-warning'
          })
        })
        store.commit("setEkonomiPosts", datas)
      }, 1000)
    } catch (error) {
      console.error(`Error on retrieving articles: `, error)
    }
  },
  async getActivePost(store, payload) {
    var endpoint = `https://www.newsturk.com.tr/wp-json/wp/v2/posts/` + payload
    try {
      var response = await this.$axios.get(endpoint)
      store.commit("setActivePost", response.data)
    } catch (error) {
      console.error(`Error on retrieving articles: `, error)
    }
  }
}

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  });
};

export default createStore