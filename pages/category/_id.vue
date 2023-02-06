<template>    
    <div id="appCapsule">
        <div class="appContent">
            <div class="row mt-2">
                
                <div class="col-12">
                    <h2 class="title mb-3">{{ title }}</h2>  
                </div>

                <div class="col-6" v-for="item in getCategoryRecords()" :key="item.title">
                    <a :href="`/post/${item.id}`" v-if="item" class="postItem">
						<div class="imageWrapper">
							<img :src="item.image" alt="image" class="image">
						</div>
						<h2 class="title" v-html="item.title"></h2>
					</a>
                </div>

            </div>
            <div v-if="addMoreStatu" class="mt-2 mb-2">
                <a href="javascript:;" @click="addMore" class="btn btn-primary btn-lg btn-block">Devamını Yükle</a>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
    data() {
        return {
            id: parseInt(this.$route.params.id),
            title: '',
            activePage: 1,
            perPage: 24,
            addMoreStatu: true
        }
    },
    computed: {
        ...mapGetters('category', ["getCategories"]),
		...mapGetters('post', ["getActiveCategoryPosts"]),
        ...mapGetters('post', ["getCategoryDatas"])
	},
	async created() {
		await this.$store.dispatch("post/getCategoryPosts", {
            id: this.id,
            perPage: this.perPage,
            page: this.activePage
        });
        this.getCategoryTitle();
	},
	methods: {
		...mapActions({getCategoryPosts: 'post/getCategoryPosts'}),
        
        ...mapMutations('util', ["setIsLoading"]),

		getCategoryRecords() {
			return this.getActiveCategoryPosts();
		},
        getTotals(){
            return this.getCategoryDatas();
        },
        getCategoryTitle(){
            this.title = this.getCategories().find(x => x.id === parseInt(this.id)).name;
        },
        addMore(){
            let totalpages = this.getTotals().totalpages;
            this.setIsLoading(true);
            if (this.activePage <= totalpages) {
                this.activePage++;
                this.$store.dispatch("post/getCategoryPosts", {
                    id: this.id,
                    perPage: this.perPage,
                    page: this.activePage
                });
            } else {
                this.addMoreStatu = false;
            }
            setTimeout(() => {
                this.setIsLoading(false);
            }, 2000);
        }
	}
}
</script>