<template>
	<div>
		<Appheader />
		<Spinner v-show="isLoading" />
		<nuxt />
		<appfooter />
	</div>
</template>
<script>
import { mapState } from "vuex"
import Appheader from '~/components/partials/header.vue'
import Appfooter from '~/components/partials/footer.vue'
import Spinner from '~/components/partials/spinner.vue'

export default {
	components: {
		Appheader,
		Appfooter,
		Spinner
	},
	computed: {
		...mapState(["isLoading"]),
		...mapState(["activeView"])
	}
}
</script>