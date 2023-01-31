export default {
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
  getAccounts: state => {
    return () => {
      return state.accounts
    }
  },
  getActive: state => {
    return () => {
      return state.activePost
    }
  },
  getFixedStatu: state => {
    return () => {
      return state.fixedStatu
    }
  },
  getBottomMenuActiveTab: state => {
    return () => {
      return state.bottomMenuActiveTab
    }
  }
};