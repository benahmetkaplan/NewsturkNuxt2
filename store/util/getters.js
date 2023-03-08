export default {
  getPages: state => {
    return () => {
      return state.pages
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