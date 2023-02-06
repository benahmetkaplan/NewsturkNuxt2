<template>
	<div id="appCapsule">

		<div class="appContent">
			<HomeSlider />
			<IndexPostList v-bind:items="getDunyaRecords()" title="Dünya" />
			<IndexPostList v-bind:items="getSporRecords()" title="Spor" />
			<IndexPostList v-bind:items="getEkonomiRecords()" title="Ekonomi" />
			<IndexPostList v-bind:items="getTeknolojiRecords()" title="Teknoloji" />
		</div>

		<footer class="appFooter">
			<div class="heading">Copyright © {{ new Date().getFullYear() }}. Tüm hakları saklıdır.</div>
			<br>
			<a v-if="getAccountList().length > 0" v-for="item in getAccountList()" :key="item.slug" :href="item.link" target="_blank" :class="`btn btn-${item.slug} btn-icon me-1`">
				<i :class="item.icon"></i>
			</a>
		</footer>

	</div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
import HomeSlider from '~/components/sections/home-slider.vue';
import IndexPostList from '~/components/sections/index-post-list.vue';

export default {
	components: {
		HomeSlider,
		IndexPostList
	},
	computed: {
		...mapGetters('post', ["getDunya"]),
		...mapGetters('post', ["getSpor"]),
		...mapGetters('post', ["getTeknoloji"]),
		...mapGetters('post', ["getEkonomi"]),
		...mapGetters('util', ["getAccounts"])
	},
	async created() {
		await this.$store.dispatch("post/getDunyaPosts");
		await this.$store.dispatch("post/getSporPosts");
		await this.$store.dispatch("post/getTeknolojiPosts");
		await this.$store.dispatch("post/getEkonomiPosts");
	},
	methods: {
		...mapActions({getEkonomiPosts: 'post/getDunyaPosts'}),
		...mapActions({getSporPosts: 'post/getSporPosts'}),
		...mapActions({getTeknolojiPosts: 'post/getTeknolojiPosts'}),
		...mapActions({getEkonomiPosts: 'post/getEkonomiPosts'}),
		
		getDunyaRecords() {
			return this.getDunya();
		},

		getSporRecords() {
			return this.getSpor();
		},

		getTeknolojiRecords() {
			return this.getTeknoloji();
		},

		getEkonomiRecords() {
			return this.getEkonomi();
		},

		getAccountList() {
			return this.getAccounts();
		},
	}
}
</script>