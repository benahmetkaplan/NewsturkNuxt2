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