<template>
    <div id="appCapsule">
        <div class="appContent">
            <h1 v-html="post.title" class="title-lg mt-2 mb-2"></h1>
            <div class="postHeader mb-2">
                <div>
                    {{ formatDate(post.date) }}
                </div>
            </div>
            <div class="postBody">
                <div class="content" v-html="post.content"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    data() {
        return {
            slug: this.$route.params.id,
            post: {
                title: '',
                date: '',
                content: ''
            }
        }
    },
    computed: {
        ...mapGetters(["getActive"])
    },
    async created() {
		await this.$store.dispatch("getActivePost", this.slug);
        this.getActiveRecord();
	},
    methods:{
        ...mapActions(["getActivePost"]),
        formatDate(dateString) {
            if(dateString !== ""){
                const date = new Date(dateString);
                return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
            }else{
                return "";
            }            
        },
        getActiveRecord() {
			let rec = this.getActive();
            this.post = {
                title: rec.title.rendered,
                date: rec.date,
                content: rec.content.rendered
            };
		}
    }
}
</script>