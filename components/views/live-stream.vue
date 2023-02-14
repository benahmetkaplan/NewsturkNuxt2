<template>
    <div id="appCapsule">
        <div class="appContent mt-3">
            <div class="container">
                <div class="row">
                    <div v-for="item in channels" :key="item.code" class="col-md-3 col-sm-12">
                        <a class="channel-item" :href="`https://www.youtube.com/embed/${item.code}?autoplay=0`">
                            <img :src="item.thumbnail">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LiveStream",
    data() {
        return {
            channels: []
        }
    },
    created(){
        this.getChannels();
        $(document).on("click", ".channel-item", function(e){
            e.preventDefault();
            let _href = $(this).attr("href");
            $(this).html(`<iframe height="235" src="${_href}" frameborder="0"></iframe>`);
        });
    },
    methods:{
        getChannels(){
            this.$axios.get('https://newsturk.com.tr/yt-codes.php')
            .then(response => {
                if (response.data) {
                    this.channels = response.data;
                }
            });
        }
    }
}
</script>

<style>
a.channel-item {
    display: inline-block;
    width: 100%;
    height: auto;
    line-height: 0;
    overflow: hidden;
    border-radius: 5px;
    padding: 5px;
    background: #ebebeb;
    margin-bottom: 15px;
}
a.channel-item img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 5px;
}
a.channel-item iframe {
    width: 100%;
    display: block;
    border-radius: 5px;
}
</style>