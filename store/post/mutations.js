export default {
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
    setActivePost(state, data) {
        state.activePost = data
    }
};