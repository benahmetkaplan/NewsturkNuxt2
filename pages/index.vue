<template>
	<div id="appCapsule">

		<div class="appContent">

			<HomeSlider />

			<div class="sectionTitle mt-2 mb-2">
				<div class="title">
					<h1>Dünya</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-6" v-for="record in getDunyaRecords()" @click="goToPost(record.id)"
					:key="record.title">
					<a class="postItem">
						<div class="imageWrapper">
							<img :src="record.image" alt="image" class="image">
						</div>
						<h2 class="title" v-html="record.title"></h2>
					</a>
				</div>
			</div>

			<div class="sectionTitle mt-2 mb-2">
				<div class="title">
					<h1>Spor</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-6" v-for="record in getSporRecords()" @click="goToPost(record.id)"
					:key="record.title">
					<a class="postItem">
						<div class="imageWrapper">
							<img :src="record.image" alt="image" class="image">
						</div>
						<h2 class="title" v-html="record.title"></h2>
					</a>
				</div>
			</div>

			<div class="sectionTitle mt-2 mb-2">
				<div class="title">
					<h1>Ekonomi</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-6" v-for="record in getEkonomiRecords()" @click="goToPost(record.id)"
					:key="record.title">
					<a class="postItem">
						<div class="imageWrapper">
							<img :src="record.image" alt="image" class="image">
						</div>
						<h2 class="title" v-html="record.title"></h2>
					</a>
				</div>
			</div>

			<div class="sectionTitle mt-2 mb-2">
				<div class="title">
					<h1>Teknoloji</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-6" v-for="record in getTeknolojiRecords()" @click="goToPost(record.id)"
					:key="record.title">
					<a class="postItem">
						<div class="imageWrapper">
							<img :src="record.image" alt="image" class="image">
						</div>
						<h2 class="title" v-html="record.title"></h2>
					</a>
				</div>
			</div>

		</div>

		<footer class="appFooter">
			<div class="heading">Copyright © {{ new Date().getFullYear() }}. Tüm hakları saklıdır.</div>
			<br>
			<a v-if="getAccountList().length > 0" v-for="item in getAccountList()" :key="item.slug" :href="item.link" target="_blank" :class="`btn btn-${item.slug} btn-icon me-1`">
				<i :class="`icon ion-logo-${item.slug}`"></i>
			</a>
		</footer>

	</div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
import HomeSlider from '~/components/sections/home-slider.vue';

export default {
	components: {
		HomeSlider
	},
	computed: {
		...mapGetters(["getDunya"]),
		...mapGetters(["getSpor"]),
		...mapGetters(["getTeknoloji"]),
		...mapGetters(["getEkonomi"]),
		...mapGetters(["getAccounts"])
	},
	async created() {
		await this.$store.dispatch("getDunyaPosts");
		await this.$store.dispatch("getSporPosts");
		await this.$store.dispatch("getTeknolojiPosts");
		await this.$store.dispatch("getEkonomiPosts");
	},
	methods: {
		...mapActions(["getDunyaPosts"]),
		...mapActions(["getSporPosts"]),
		...mapActions(["getTeknolojiPosts"]),
		...mapActions(["getEkonomiPosts"]),

		goToPost(id) {
			return this.$nuxt.$options.router.push(`/post/${id}`);
		},

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