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
				<div class="col-6" v-for="item in getDunyaRecords()" :key="item.title">
					<a :href="`/post/${item.id}`" v-if="item" class="postItem">
						<div class="imageWrapper">
							<img :src="item.image" alt="image" class="image">
						</div>
						<h2 class="title" v-html="item.title"></h2>
					</a>
					<content-placeholders v-if="!item" rounded="true">
						<content-placeholders-img />
						<content-placeholders-text lines="1" />
					</content-placeholders>
				</div>
			</div>

			<div class="sectionTitle mt-2 mb-2">
				<div class="title">
					<h1>Spor</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-6" v-for="item in getSporRecords()" :key="item.title">
					<a :href="`/post/${item.id}`" v-if="item" class="postItem">
						<div class="imageWrapper">
							<img :src="item.image" alt="image" class="image">
						</div>
						<h2 class="title" v-html="item.title"></h2>
					</a>
					<content-placeholders v-if="!item" rounded="true">
						<content-placeholders-img />
						<content-placeholders-text lines="1" />
					</content-placeholders>
				</div>
			</div>

			<div class="sectionTitle mt-2 mb-2">
				<div class="title">
					<h1>Ekonomi</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-6" v-for="item in getEkonomiRecords()" :key="item.title">
					<a :href="`/post/${item.id}`" v-if="item" class="postItem">
						<div class="imageWrapper">
							<img :src="item.image" alt="image" class="image">
						</div>
						<h2 class="title" v-html="item.title"></h2>
					</a>
					<content-placeholders v-if="!item" rounded="true">
						<content-placeholders-img />
						<content-placeholders-text lines="1" />
					</content-placeholders>
				</div>
			</div>

			<div class="sectionTitle mt-2 mb-2">
				<div class="title">
					<h1>Teknoloji</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-6" v-for="item in getTeknolojiRecords()" :key="item.title">
					<a :href="`/post/${item.id}`" v-if="item" class="postItem">
						<div class="imageWrapper">
							<img :src="item.image" alt="image" class="image">
						</div>
						<h2 class="title" v-html="item.title"></h2>
					</a>
					<content-placeholders v-if="!item" rounded="true">
						<content-placeholders-img />
						<content-placeholders-text lines="1" />
					</content-placeholders>
				</div>
			</div>

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

export default {
	components: {
		HomeSlider
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