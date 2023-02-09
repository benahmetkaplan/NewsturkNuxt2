<template>
    <VueSlickCarousel v-bind="carouselOption" v-if="getPaperList().length > 0">
        <div class="item" v-for="item in getPaperList()" :key="item.slug">
            <img :src="`${$config.SITE_URL}/get-paper.php?slug=${item.slug}&size=big`">
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
		...mapGetters('util', ["getPapers"])
	},
	methods: {
		getPaperList() {
			return this.getPapers();
		}
	}
}

</script>