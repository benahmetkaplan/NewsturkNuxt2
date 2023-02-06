export default {

    async getGundemPosts(store) {
        await store.dispatch('getPosts', {
            perPage: 6,
            categoryId: 25,
            setter: 'setGundemPosts'
        });
    },

    async getDunyaPosts(store) {
        await store.dispatch('getPosts', {
            perPage: 6,
            categoryId: 2,
            setter: 'setDunyaPosts'
        });
    },

    async getSporPosts(store) {
        await store.dispatch('getPosts', {
            perPage: 6,
            categoryId: 12,
            setter: 'setSporPosts'
        });
    },

    async getTeknolojiPosts(store) {
        await store.dispatch('getPosts', {
            perPage: 6,
            categoryId: 13,
            setter: 'setTeknolojiPosts'
        });
    },

    async getEkonomiPosts(store) {
        await store.dispatch('getPosts', {
            perPage: 6,
            categoryId: 3,
            setter: 'setEkonomiPosts'
        });
    },

    async getCategoryPosts(store, payload) {
        let endpoint = `${this.$config.API_URL}/posts?page=${payload.page}&per_page=${payload.perPage}&categories=${payload.id}`;
        try {
            let response = await this.$axios.get(endpoint);            
            let newRes = [];
            response.data.forEach(rec => {
                let post = {
                    id: rec.id,
                    title: rec.title.rendered,
                    date: rec.date,
                    image: `${this.$config.SITE_URL}/get-image.php?id=${rec.id}`
                };
                newRes.push(post);
            });
            store.commit("setCategoryPosts", {
                results: newRes,
                id: payload.id,
                page: payload.page
            });
            let total = parseInt(response.headers["x-wp-total"]);
            let totalpages = parseInt(response.headers["x-wp-totalpages"]);
            store.commit("setCategoryDatas", {
                total: total,
                totalpages: totalpages
            });
        } catch (error) {
            console.error(`Error: `, error);
        }
    },

    async getActivePost(store, payload) {
        let endpoint = `${this.$config.API_URL}/posts/` + payload;
        try {
            let response = await this.$axios.get(endpoint);
            let post = {
                id: response.data.id,
                title: response.data.title.rendered,
                content: response.data.content.rendered,
                date: response.data.date,
                categoryId: response.data.categories[0],
                image: `${this.$config.SITE_URL}/get-image.php?id=${response.data.id}`
            };
            store.commit("setActivePost", post);
        } catch (error) {
            console.error(`Error: `, error);
        }
    },

    async getPosts(store, payload) {
        let endpoint = `${this.$config.API_URL}/posts?per_page=${payload.perPage}&categories=${payload.categoryId}`;
        try {
            let response = await this.$axios.get(endpoint);
            let newRes = [];
            response.data.forEach(rec => {
                let post = {
                    id: rec.id,
                    title: rec.title.rendered,
                    date: rec.date,
                    image: `${this.$config.SITE_URL}/get-image.php?id=${rec.id}`
                };
                newRes.push(post);
            });
            store.commit(payload.setter, newRes);
        } catch (error) {
            console.error(`Error: `, error);
        }
    }

};