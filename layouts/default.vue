<template>
	<div>
		<client-only>
			<Header />
			<Spinner v-show="isLoading" />
			<nuxt />
			<Sidebar />
			<Footer />
		</client-only>		
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
	computed: {
		...mapState('util', ["isLoading"]),
		...mapState('util', ["activeView"]),
		...mapState('util', ["fcmToken"])
	},
	methods: {
		...mapMutations('util', ["setIsLoading"]),
		...mapMutations('util', ["setFixedStatu"]),
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
            if (getCookie("fcm_token") !== null) {
                this.setFcmToken(getCookie("fcm_token"));
            }
        }
	},
    mounted() {
        this.setIsLoading(true);
        setTimeout(() => {
            this.setIsLoading(false)
        }, 2500);
		this.checkNetwork();
		this.setFixedStatu((!this.$route.fullPath.includes('/page/skor')) && !this.$route.fullPath.includes('/page/canli-borsa'));
		this.setActiveTab(this.$route.fullPath);
		this.getFcmToken();
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
			this.setFixedStatu((!to.fullPath.includes('/page/skor')) && !to.fullPath.includes('/page/canli-borsa'));
			this.setActiveTab(to.fullPath);
        }
    }
}

function getCookie(name) {
    let c_name = name + "=";
    let cookie_decoded = decodeURIComponent(document.cookie);
    let cookie_parts = cookie_decoded.split(';');
    
    for(let i = 0; i <cookie_parts.length; i++) {
        let c = cookie_parts[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(c_name) == 0) {
            return c.substring(c_name.length, c.length);
        }
    }
    return null;
}
</script>