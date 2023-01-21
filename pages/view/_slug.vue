<template>
    <div id="appCapsule" class="web-view">
        <iframe :src="source" frameborder="0"></iframe>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            source: ''
        }
    },
    async created() {
        this.source = `https://www.newsturk.com.tr/${this.$route.params.slug}/?app=1`;
    }
}
</script>