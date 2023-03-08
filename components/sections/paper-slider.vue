<template>
    <VueSlickCarousel v-bind="carouselOption" v-if="papers !== null">
        <div class="item" v-for="item in papers" :key="item.slug">
            <img :src="`${$config.SITE_URL}/get-paper.php?slug=${item.slug}&size=big`">
        </div>
    </VueSlickCarousel>
</template>

<script>

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
            },
            papers: null
        }
    },
    created(){
        this.getPapers();
    },
	methods: {
        getPapers(){
            this.$axios({
                method: "GET",
                url: `${this.$config.SITE_URL}/get-papers.php`
            }).then(response => {
                if (response.data) {
                    this.papers = response.data;
                }
            });
        }
	}
}

</script>