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
  getActiveCategoryPosts: state => {
    return () => {
      return state.categoryPosts
    }
  },
  getCategoryDatas: state => {
    return () => {
      return state.categoryDatas
    }
  },
  getActive: state => {
    return () => {
      return state.activePost
    }
  }
};