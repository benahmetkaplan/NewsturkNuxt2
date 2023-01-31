<template>
    <div class="sidebar-menu offcanvas offcanvas-start sidebarWrapper" tabindex="-1" id="appSidebar">
        <div class="offcanvas-body">
            <nav class="sidebar">
                <div class="sidebarGroup">
                    <ul class="sidebarMenu" v-if="getCategories().length > 0">
                        <li v-for="item in getCategoriesList()">
                            <a href="javascript:;" v-on:click="goCategory(item.id)">
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                    <ul class="sidebarMenu sidebar-page-menu" v-if="getPageList().length > 0">
                        <li v-for="item in getPageList()">
                            <a href="javascript:;" @click="goToView(item.slug)">
                                <i :class="`icon ion-ios-${item.icon}`"></i>
                                {{ item.title }}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
    name: "Sidebar",
    computed: {
		...mapGetters(["getCategories"]),
		...mapGetters(["getPages"])
	},
	async created() {
		await this.$store.dispatch("getCategoriesList");
	},
	methods: {
		...mapActions(["getCategoriesList"]),
		getCategoriesList() {
			return this.getCategories();
		},
        getPageList(){
            return this.getPages();
        },
        goCategory(id){
            return this.$nuxt.$options.router.push(`/category/` + id);
        },
        goToView(slug) {
            if(slug === "home"){
                return this.$nuxt.$options.router.push(`/`);
            }else{
                return this.$nuxt.$options.router.push(`/page/` + slug);
            }
        }
	}
}
</script>