export default {
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
  getFixedStatu: state => {
    return () => {
      return state.fixedStatu
    }
  },
  getBottomMenuActiveTab: state => {
    return () => {
      return state.bottomMenuActiveTab
    }
  },
  getFcmToken: state => {
    return () => {
      return state.fcmToken
    }
  }
};