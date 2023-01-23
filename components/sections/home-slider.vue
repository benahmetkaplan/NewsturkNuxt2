<template>
    <div class="splide__list">

        <div class="splide__slide item" v-for="record in getGundemRecords()" :key="record.title.rendered">
            <a href="javascript:;" @click="goToPost(record.id)" class="card card-overlay text-white">
                <img :src="record.jetpack_featured_media_url" alt="image" class="card-img img-fluid">
                <div class="card-img-overlay">
                    <div class="header row">
                        <!-- <div class="col-8">GÜNDEM</div> -->
                    </div>
                    <div class="content">
                        <h1 v-html="record.title.rendered"></h1>
                        <footer>
                            <div class="date">
                                {{ formatDate(record.date) }}
                            </div>
                        </footer>
                    </div>
                </div>
            </a>
        </div>
        
    </div>        
</template>

<script>

import { mapActions, mapGetters } from "vuex"

export default {
    name: "HomeSlider",
    computed: {
		...mapGetters(["getGundem"])
	},
	async created() {
		await this.$store.dispatch("getGundemPosts");
        this.initHomeSlider();
	},
	methods: {
		...mapActions(["getGundemPosts"]),
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
        },
        initHomeSlider(){
            if(this.getGundemRecords().length > 0){
                setTimeout(() => {
                    if(typeof $ !== "undefined"){
                        $('.splide__list').slick({
                            slidesToShow: 1,
                            dots: false,
                            centerMode: false,
                            autoplay: true,
                            arrows: false,
                            infinite: true,
                            speed: 1000,
                            fade: true,
                            cssEase: 'linear'
                        });
                    }
                }, 500);
            }
        }
	}
}

</script>