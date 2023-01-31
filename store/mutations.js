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
    setCategoryPosts(state, res) {
        if (res.page === 1) {
            state.categoryPosts = res.results;
        } else {
            state.categoryPosts = state.categoryPosts.concat(res.results);
        }
    },
    setCategoryDatas(state, res) {
        state.categoryDatas = res;
    },
    setCategories(state, results) {
        state.categories = results
    },
    setActivePost(state, data) {
        state.activePost = data
    },
    setFixedStatu(state, data) {
        state.fixedStatu = data
    },
    setBottomMenuActiveTab(state, data) {
        state.bottomMenuActiveTab = data
    }
};