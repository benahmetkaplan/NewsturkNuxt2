<template>
	<div>
		<client-only>
			<Header />
			<Spinner v-show="isLoading" />
			<nuxt />
			<Sidebar />
			<Footer />
		</client-only>
		<div v-if="isApple" class="banner pwa-banner">
			<div class="content">
				<span>Bu web uygulamasını iPhone'unuza yükleyin:  <img src="/assets/img/apple-tap.png" class="text-icon" /> simgesine dokunun.</span>
			</div>
			<div class="arrow"></div>
		</div>
	</div>
</template>
<script>

import { mapState, mapMutations } from "vuex";

import Header from '~/components/partials/header.vue';
import Footer from '~/components/partials/footer.vue';
import Sidebar from '~/components/partials/sidebar.vue';
import Spinner from '~/components/partials/spinner.vue';

export default {
	components: {
		Header,
		Footer,
		Sidebar,
		Spinner
	},
	data() {
        return {
            isApple: false
        }
    },
	computed: {
		...mapState('util', ["isLoading"]),
		...mapState('util', ["activeView"]),
		...mapState('util', ["fcmToken"])
	},
	methods: {
		...mapMutations('util', ["setIsLoading"]),
		...mapMutations('util', ["setBottomMenuActiveTab"]),
		...mapMutations('util', ["setFcmToken"]),

		checkNetwork(){
			setInterval(() => {
				if (!window.navigator.onLine) {
					this.$swal({
						icon: 'error',
						title: 'Dikkat!',
						text: 'Lütfen internet bağlantınızı kontrol ediniz.',
						allowOutsideClick: false,
						showCancelButton: false,
						showConfirmButton: false
					});
				}else{
					this.$swal.close();
				}
			}, 15000);
		},
		setActiveTab(url){
			if(!url.includes('/page/')){
                this.setBottomMenuActiveTab('home');
            }else{
                this.setBottomMenuActiveTab(url.replaceAll("/page/", ""));
            }
		},
        getFcmToken(){
            if (getParameterByName("fcm_token") !== null && getParameterByName("fcm_token") !== undefined) {
                this.setFcmToken(getParameterByName("fcm_token"));
            }
        }
	},
    mounted() {
        this.setIsLoading(true);
        setTimeout(() => {
            this.setIsLoading(false)
        }, 2500);
		this.checkNetwork();
		this.setActiveTab(this.$route.fullPath);
		this.getFcmToken();
		this.isApple = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    },
    watch:{
        $route (to){
            this.setIsLoading(true);
			setTimeout(() => {
				$("#appSidebar").removeClass("show");
			}, 1000);
			setTimeout(() => {
				this.setIsLoading(false);
			}, 2500);
			this.setActiveTab(to.fullPath);
        }
    }
}

function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
	let url = window.location.href;
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
</script>