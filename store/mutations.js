export default {
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
};