<template>
    <div id="appCapsule" class="web-view">
        <iframe :src="url" frameborder="0"></iframe>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            slug: this.$route.params.id,
            url: ''
        }
    },
    async created() {
        this.url = `https://www.newsturk.com.tr/${this.slug}/?app=1`;
    }
}
</script>