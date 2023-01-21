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
                </div>
            </nav>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from "vuex"

export default {
    name: "Sidebar",
    computed: {
		...mapGetters(["getCategories"])
	},
	async created() {
		await this.$store.dispatch("getCategoriesList");
	},
	methods: {
        ...mapMutations(["setIsLoading"]),
		...mapActions(["getCategoriesList"]),
		getCategoriesList() {
			return this.getCategories();
		},
        goCategory(id){
            this.setIsLoading(true);
            setTimeout(() => {
                this.setIsLoading(false)
            }, 3000);
            return this.$nuxt.$options.router.push(`/category/` + id);
        }
	}
}
</script>