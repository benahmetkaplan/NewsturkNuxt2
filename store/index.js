import Vuex from 'vuex';

const siteUrl = "https://www.newsturk.com.tr";
const apiUrl = siteUrl + "/wp-json/wp/v2";

var state = {
  isLoading: false,
  gundemPosts: [],
  dunyaPosts: [],
  sporPosts: [],
  teknolojiPosts: [],
  ekonomiPosts: [],
  categoryPosts: [],
  categories: [],
  activePost: null,
  pages: [
    {
      slug: 'home',
      title: 'Ana Sayfa',
      icon: 'home'
    },
    {
      slug: 'gazeteler',
      title: 'Gazeteler',
      icon: 'paper'
    },
    {
      slug: 'skor',
      title: 'Canlı Skor',
      icon: 'football'
    },
    {
      slug: 'hisseler',
      title: 'Canlı Borsa',
      icon: 'cash'
    },
    {
      slug: 'bize-ulasin',
      title: 'Bize Ulaşın',
      icon: 'mail'
    }
  ],
  papers: [
    { slug: 'turkiye', title: 'Türkiye'},
    { slug: 'aksam', title: 'Akşam'},
    { slug: 'milat', title: 'Milat'},
    { slug: 'sabah', title: 'Sabah'},
    { slug: 'milliyet', title: 'Milliyet'},
    { slug: 'hurriyet', title: 'Hürriyet'},
    { slug: 'turkgun', title: 'Türkgün'},
    { slug: 'yeni-birlik', title: 'Yeni Birlik'},
    { slug: 'milli-gazete', title: 'Milli Gazete'},
    { slug: 'yenicag', title: 'Yeniçağ'},
    { slug: 'yenisoz', title: 'Yeni Söz'},
    { slug: 'fotomac', title: 'Fotomaç'}
  ]
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
  getPages: state => {
    return () => {
      return state.pages
    }
  },
  getPapers: state => {
    return () => {
      return state.papers
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
    let endpoint = `${apiUrl}/posts?per_page=10&categories=25`;
    try {
      let response = await this.$axios.get(endpoint);
      let newRes = [];
      response.data.forEach(rec => {
        let post = {
          id: rec.id,
          title: rec.title.rendered,
          date: rec.date,
          image: `${siteUrl}/media/${rec.date.split('-')[0]}/${rec.date.split('-')[1]}/${rec.slug}.jpg`
        };
        if(post.image !== ''){
          newRes.push(post);
        }
      });
      store.commit("setGundemPosts", newRes);
    } catch (error) {
      console.error(`Error: `, error);
    }
  },
  async getDunyaPosts(store) {
    let endpoint = `${apiUrl}/posts?per_page=6&categories=2`;
    try {
      let response = await this.$axios.get(endpoint);
      let newRes = [];
      response.data.forEach(rec => {
        let post = {
          id: rec.id,
          title: rec.title.rendered,
          date: rec.date,
          image: `${siteUrl}/media/${rec.date.split('-')[0]}/${rec.date.split('-')[1]}/${rec.slug}.jpg`
        };
        if(post.image !== ''){
          newRes.push(post);
        }
      });
      store.commit("setDunyaPosts", newRes);
    } catch (error) {
      console.error(`Error: `, error);
    }
  },
  async getSporPosts(store) {
    let endpoint = `${apiUrl}/posts?per_page=6&categories=12`;
    try {
      let response = await this.$axios.get(endpoint);
      let newRes = [];
      response.data.forEach(rec => {
        let post = {
          id: rec.id,
          title: rec.title.rendered,
          date: rec.date,
          image: `${siteUrl}/media/${rec.date.split('-')[0]}/${rec.date.split('-')[1]}/${rec.slug}.jpg`
        };
        if(post.image !== ''){
          newRes.push(post);
        }
      });
      store.commit("setSporPosts", newRes);
    } catch (error) {
      console.error(`Error: `, error);
    }
  },
  async getTeknolojiPosts(store) {
    let endpoint = `${apiUrl}/posts?per_page=6&categories=13`;
    try {
      let response = await this.$axios.get(endpoint);
      let newRes = [];
      response.data.forEach(rec => {
        let post = {
          id: rec.id,
          title: rec.title.rendered,
          date: rec.date,
          image: `${siteUrl}/media/${rec.date.split('-')[0]}/${rec.date.split('-')[1]}/${rec.slug}.jpg`
        };
        if(post.image !== ''){
          newRes.push(post);
        }
      });
      store.commit("setTeknolojiPosts", newRes);
    } catch (error) {
      console.error(`Error: `, error);
    }
  },
  async getEkonomiPosts(store) {
    let endpoint = `${apiUrl}/posts?per_page=6&categories=3`;
    try {
      let response = await this.$axios.get(endpoint);
      let newRes = [];
      response.data.forEach(rec => {
        let post = {
          id: rec.id,
          title: rec.title.rendered,
          date: rec.date,
          image: `${siteUrl}/media/${rec.date.split('-')[0]}/${rec.date.split('-')[1]}/${rec.slug}.jpg`
        };
        if(post.image !== ''){
          newRes.push(post);
        }
      });
      store.commit("setEkonomiPosts", newRes);
    } catch (error) {
      console.error(`Error: `, error);
    }
  },
  async getCategoryPosts(store, payload) {
    let endpoint = `${apiUrl}/posts?per_page=26&categories=` + payload;
    try {
      let response = await this.$axios.get(endpoint);
      let newRes = [];
      response.data.forEach(rec => {
        let post = {
          id: rec.id,
          title: rec.title.rendered,
          date: rec.date,
          image: `${siteUrl}/media/${rec.date.split('-')[0]}/${rec.date.split('-')[1]}/${rec.slug}.jpg`
        };
        if(post.image !== ''){
          newRes.push(post);
        }
      });
      store.commit("setCategoryPosts", newRes);
    } catch (error) {
      console.error(`Error: `, error);
    }
  },
  async getCategoriesList(store) {
    let endpoint = `${apiUrl}/categories`;
    try {
      let response = await this.$axios.get(endpoint);
      store.commit("setCategories", response.data);
    } catch (error) {
      console.error(`Error: `, error);
    }
  },
  async getActivePost(store, payload) {
    let endpoint = `${apiUrl}/posts/` + payload;
    try {
      let response = await this.$axios.get(endpoint);
      let post = {
        id: response.data.id,
        title: response.data.title.rendered,
        content: response.data.content.rendered,
        date: response.data.date,
        categoryId: response.data.categories[0],
        image: `${siteUrl}/media/${response.data.date.split('-')[0]}/${response.data.date.split('-')[1]}/${response.data.slug}.jpg`
      };
      store.commit("setActivePost", post);
    } catch (error) {
      console.error(`Error: `, error);
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