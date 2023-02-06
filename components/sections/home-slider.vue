<template>
    <div class="splide__list">
        <VueSlickCarousel v-bind="carouselOption" v-if="getGundemRecords().length > 0">
            <div class="splide__slide item" v-for="item in getGundemRecords()" :key="item.id">
                <a href="javascript:;" @click="goToPost(item.id)" class="card card-overlay text-white">
                    <img v-if="item.image" :src="item.image" alt="image" class="card-img img-fluid">
                    <div class="card-img-overlay">
                        <div class="content">
                            <h1 v-html="item.title"></h1>
                            <footer>
                                <div class="date">
                                    {{ formatDate(item.date) }}
                                </div>
                            </footer>
                        </div>
                    </div>
                </a>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
    name: "HomeSlider",
    components: { VueSlickCarousel },
    data() {
        return {
            carouselOption: {
                slidesToShow: 1,
                dots: false,
                centerMode: false,
                autoplay: true,
                arrows: false,
                infinite: true,
                speed: 1000,
                fade: true,
                cssEase: 'linear'
            }
        }
    },
    computed: {
		...mapGetters('post', ["getGundem"])
	},
	async created() {
		await this.$store.dispatch("post/getGundemPosts");
	},
	methods: {
		...mapActions({getGundemPosts: 'post/getGundemPosts'}),
        
		getGundemRecords() {
			return this.getGundem();
		},
        goToPost(id) {
			return this.$nuxt.$options.router.push(`/post/${id}`);
		},
        formatDate(dateString) {
            if(dateString !== ""){
                const date = new Date(dateString);
                return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
            }else{
                return "";
            }            
        }
	}
}

</script>