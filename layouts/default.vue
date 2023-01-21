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
import { mapState } from "vuex"
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
	}
}
</script>