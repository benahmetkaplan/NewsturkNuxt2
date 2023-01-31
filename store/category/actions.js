export default {    
    async getCategoriesList(store) {
        let endpoint = `${this.$config.API_URL}/categories`;
        try {
            let response = await this.$axios.get(endpoint);
            store.commit("setCategories", response.data);
        } catch (error) {
            console.error(`Error: `, error);
        }
    }
};