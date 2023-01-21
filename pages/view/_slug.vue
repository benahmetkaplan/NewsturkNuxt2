<template>
    <div id="appCapsule" class="web-view">
        <iframe :src="source" frameborder="0"></iframe>
    </div>    
</template>

<script>
import { mapMutations } from "vuex"

export default {
    data() {
        return {
            source: ''
        }
    },
    async created() {
        this.source = `https://www.newsturk.com.tr/${this.$route.params.slug}/?app=1`;
    },
    methods: {
        ...mapMutations(["setIsLoading"])
	},
    mounted() {
        this.setIsLoading(true);
        setTimeout(() => {
            this.setIsLoading(false)
        }, 3000);
    }
}
</script>