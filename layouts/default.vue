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
import { mapState, mapMutations } from "vuex"
import Header from '~/components/partials/header.vue'
import Footer from '~/components/partials/footer.vue'
import Sidebar from '~/components/partials/sidebar.vue'
import Spinner from '~/components/partials/spinner.vue'

export default {
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
		...mapMutations(["setIsLoading"])
	},
    mounted() {
        this.setIsLoading(true);
        setTimeout(() => {
            this.setIsLoading(false)
        }, 3000);
    },
    watch:{
        $route (to){
            this.setIsLoading(true);
			setTimeout(() => {
				this.setIsLoading(false)
			}, 3000);
        }
    }
}
</script>