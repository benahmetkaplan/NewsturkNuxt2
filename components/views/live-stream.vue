<template>
    <div id="appCapsule">
        <div class="appContent mt-3">
            <div class="container">
                <div class="row">
                    <div v-for="item in channels" :key="item.code" class="col-md-3 col-6">
                        <a class="channel-item" :data-title="item.title" :href="`https://www.youtube-nocookie.com/embed/${item.code}?autoplay=0`">
                            <img :src="item.thumbnail">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>

import "@fancyapps/ui/dist/fancybox.css";
import { Fancybox } from "@fancyapps/ui";

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
            let $href = $(this).attr("href");
            let $title = $(this).data("title");
            Fancybox.show([
                {
                    src: $href,
                    type: "iframe",
                    caption: $title
                }
            ]);
        });
    },
    methods:{
        getChannels(){
            this.$axios.get(`${this.$config.SITE_URL}/yt-codes.php`)
            .then(response => {
                if (response.data) {
                    this.channels = response.data;
                }
            });
        }
    }
}
</script>

<style lang="scss">
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
    img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 5px;
    }
}
</style>