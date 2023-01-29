<template>
    <VueSlickCarousel v-bind="carouselOption" v-if="getPaperList().length > 0">
        <div class="item" v-for="item in getPaperList()" :key="item.slug">
            <img :src="getPaperImage(item.slug)">
        </div>
    </VueSlickCarousel>
</template>

<script>

import { mapGetters } from "vuex";
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
    name: "PaperSlider",
    components: { VueSlickCarousel },
    data() {
        return {
            carouselOption: {
                slidesToShow: 1,
                dots: false,
                autoplay: false,
                arrows: false,
                infinite: false
            }
        }
    },
    computed: {
		...mapGetters(["getPapers"])
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
        }
	}
}

</script>