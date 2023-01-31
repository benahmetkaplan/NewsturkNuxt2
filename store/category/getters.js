export default {
  getCategories: state => {
    return () => {
      return state.categories
    }
  }
};