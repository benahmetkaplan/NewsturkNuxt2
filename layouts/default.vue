<template>
	<div>
		<Header />
		<Spinner v-show="isLoading" />
		<nuxt />
		<Sidebar />
		<Footer />
	</div>
</template>
<script>

import { mapState, mapMutations } from "vuex";

import Header from '~/components/partials/header.vue';
import Footer from '~/components/partials/footer.vue';
import Sidebar from '~/components/partials/sidebar.vue';
import Spinner from '~/components/partials/spinner.vue';

export default {
	data() {
        return {
            redirect: null
        }
    },
	components: {
		Header,
		Footer,
		Sidebar,
		Spinner
	},
	computed: {
		...mapState(["isLoading"]),
		...mapState(["activeView"])
	},
	methods: {
		...mapMutations(["setIsLoading"]),
		getParameterByName(name) {
			if(process.browser){
				let url = window.location.href;
				name = name.replace(/[\[\]]/g, '\\$&');
				var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
				if (!results) return null;
				if (!results[2]) return '';
				return decodeURIComponent(results[2].replace(/\+/g, ' '));
			}
		},
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
		}
	},
    mounted() {
        this.setIsLoading(true);
        setTimeout(() => {
            this.setIsLoading(false)
        }, 2500);
		this.redirect = this.getParameterByName('redirect');
		this.checkNetwork();
    },
    watch:{
        $route (){
            this.setIsLoading(true);
			setTimeout(() => {
				this.setIsLoading(false);
				$("#appSidebar").removeClass("show");
			}, 2500);
        },
		redirect: {
			handler(redirect) {
				if(redirect !== null){
					return this.$nuxt.$options.router.push(redirect);
				}
			},
			deep: true
		}
    }
}
</script>