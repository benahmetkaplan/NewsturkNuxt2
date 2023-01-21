<template>
    <div id="appCapsule">
        <div class="appContent" v-if="getCategoryRecords().length > 0">
            <div class="sectionTitle mt-2 mb-2">
                <div class="title">
                    <h1>{{ title }}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-6" v-for="record in getCategoryRecords()" :key="record.title.rendered">
                    <a v-on:click="goPost(record.id)" class="postItem">
                        <div class="imageWrapper">
                            <img :src="record.jetpack_featured_media_url" alt="image" class="image">
                        </div>
                        <h2 class="title" v-html="record.title.rendered"></h2>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from "vuex"

export default {
    data() {
        return {
            id: this.$route.params.id,
            title: ''
        }
    },
    computed: {
        ...mapGetters(["getCategories"]),
		...mapGetters(["getCategory"])
	},
	async created() {
		await this.$store.dispatch("getCategoryPosts", this.id);
        this.getCategoryTitle();
	},
	methods: {
		...mapActions(["getCategoryPosts"]),
        ...mapMutations(["setIsLoading"]),
		getCategoryRecords() {
			return this.getCategory();
		},
        goPost(id){
            return this.$nuxt.$options.router.push(`/post/` + id);
        },
        getCategoryTitle(){
            this.title = this.getCategories().find(x => x.id === parseInt(this.id)).name;
        }
	},
    mounted() {
        this.setIsLoading(true);
        setTimeout(() => {
            this.setIsLoading(false)
        }, 3000);
    }
}
</script>