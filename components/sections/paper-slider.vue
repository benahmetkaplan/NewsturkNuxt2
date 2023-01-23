<template>
    <div class="paper-slider-slick">

        <div class="item" v-for="item in getPaperList()" :key="item.slug">
            <img :src="getPaperImage(item.slug)">
        </div>
        
    </div>
</template>

<script>

import { mapGetters } from "vuex"

export default {
    name: "PaperSlider",
    computed: {
		...mapGetters(["getPapers"])
	},
	async created() {
        this.initPaperSlider();
	},
	methods: {
		getPaperList() {
			return this.getPapers();
		},
        getPaperImage(slug){
            let date = new Date().toISOString().split('T')[0].toString().split('-');
            let year = date[0].substring(2);
            let month = date[1];
            let day = date[2];
            return `https://i2.haber7.net/haber7/gazete/${slug}/big_${day+month+year}_0800.jpg`;
        },
        initPaperSlider(){
            if(this.getPaperList().length > 0){
                setTimeout(() => {
                    if(typeof $ !== "undefined"){
                        $('.paper-slider-slick').slick({
                            slidesToShow: 1,
                            dots: false,
                            autoplay: false,
                            arrows: false,
                            infinite: false
                        });
                    }
                }, 500);
            }
        }
	}
}

</script>