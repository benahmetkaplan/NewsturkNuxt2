export default {
    async getGundemPosts(store) {
        let endpoint = `${this.$config.API_URL}/posts?per_page=10&categories=25`;
        try {
            let response = await this.$axios.get(endpoint);
            let newRes = [];
            response.data.forEach(rec => {
                let post = {
                    id: rec.id,
                    title: rec.title.rendered,
                    date: rec.date,
                    image: `${this.$config.SITE_URL}/media/${rec.date.split('-')[0]}/${rec.date.split('-')[1]}/${rec.slug}.jpg`
                };
                newRes.push(post);
            });
            store.commit("setGundemPosts", newRes);
        } catch (error) {
            console.error(`Error: `, error);
        }
    },
    async getDunyaPosts(store) {
        let endpoint = `${this.$config.API_URL}/posts?per_page=6&categories=2`;
        try {
            let response = await this.$axios.get(endpoint);
            let newRes = [];
            response.data.forEach(rec => {
                let post = {
                    id: rec.id,
                    title: rec.title.rendered,
                    date: rec.date,
                    image: `${this.$config.SITE_URL}/media/${rec.date.split('-')[0]}/${rec.date.split('-')[1]}/${rec.slug}.jpg`
                };
                newRes.push(post);
            });
            store.commit("setDunyaPosts", newRes);
        } catch (error) {
            console.error(`Error: `, error);
        }
    },
    async getSporPosts(store) {
        let endpoint = `${this.$config.API_URL}/posts?per_page=6&categories=12`;
        try {
            let response = await this.$axios.get(endpoint);
            let newRes = [];
            response.data.forEach(rec => {
                let post = {
                    id: rec.id,
                    title: rec.title.rendered,
                    date: rec.date,
                    image: `${this.$config.SITE_URL}/media/${rec.date.split('-')[0]}/${rec.date.split('-')[1]}/${rec.slug}.jpg`
                };
                newRes.push(post);
            });
            store.commit("setSporPosts", newRes);
        } catch (error) {
            console.error(`Error: `, error);
        }
    },
    async getTeknolojiPosts(store) {
        let endpoint = `${this.$config.API_URL}/posts?per_page=6&categories=13`;
        try {
            let response = await this.$axios.get(endpoint);
            let newRes = [];
            response.data.forEach(rec => {
                let post = {
                    id: rec.id,
                    title: rec.title.rendered,
                    date: rec.date,
                    image: `${this.$config.SITE_URL}/media/${rec.date.split('-')[0]}/${rec.date.split('-')[1]}/${rec.slug}.jpg`
                };
                newRes.push(post);
            });
            store.commit("setTeknolojiPosts", newRes);
        } catch (error) {
            console.error(`Error: `, error);
        }
    },
    async getEkonomiPosts(store) {
        let endpoint = `${this.$config.API_URL}/posts?per_page=6&categories=3`;
        try {
            let response = await this.$axios.get(endpoint);
            let newRes = [];
            response.data.forEach(rec => {
                let post = {
                    id: rec.id,
                    title: rec.title.rendered,
                    date: rec.date,
                    image: `${this.$config.SITE_URL}/media/${rec.date.split('-')[0]}/${rec.date.split('-')[1]}/${rec.slug}.jpg`
                };
                newRes.push(post);
            });
            store.commit("setEkonomiPosts", newRes);
        } catch (error) {
            console.error(`Error: `, error);
        }
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
                    image: `${this.$config.SITE_URL}/media/${rec.date.split('-')[0]}/${rec.date.split('-')[1]}/${rec.slug}.jpg`
                };
                newRes.push(post);
            });
            store.commit("setCategoryPosts", {
                results: newRes,
                id: payload.id,
                page: payload.page
            });
        } catch (error) {
            console.error(`Error: `, error);
        }
    },
    async getCategoriesList(store) {
        let endpoint = `${this.$config.API_URL}/categories`;
        try {
            let response = await this.$axios.get(endpoint);
            store.commit("setCategories", response.data);
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
                image: `${this.$config.SITE_URL}/media/${response.data.date.split('-')[0]}/${response.data.date.split('-')[1]}/${response.data.slug}.jpg`
            };
            store.commit("setActivePost", post);
        } catch (error) {
            console.error(`Error: `, error);
        }
    }
};