<template>
    <div id="appCapsule">
        <div v-if="getActive() !== null && getCategories().length > 0" class="appContent">
            <h1 v-html="getActive().title" class="title-lg mt-2 mb-2"></h1>
            <div class="postHeader mb-2">
                <div class="category-title" v-html="categoryTitle(getActive().categoryId)"></div>
                <div>
                    {{ formatDate(getActive().date) }}
                </div>
            </div>
            <div class="postBody">
                <div class="content" v-html="getActive().content"></div>
                <div class="comments">
                    <Disqus />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            id: this.$route.params.id,
            post: {
                title: '',
                date: '',
                content: '',
                categoryTitle: ''
            }
        }
    },
    computed: {
        ...mapGetters('category', ["getCategories"]),
        ...mapGetters('post', ["getActive"])
    },
    created() {
		this.$store.dispatch("post/getActivePost", this.id);
	},
    methods:{
        ...mapActions({getActivePost: 'post/getActivePost'}),
        
        formatDate(dateString) {
            if(dateString !== ""){
                const date = new Date(dateString);
                return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
            }else{
                return "";
            }            
        },
        categoryTitle(id){
            return this.getCategories().find(x => x.id === id).name;
        }
    }
}
</script>