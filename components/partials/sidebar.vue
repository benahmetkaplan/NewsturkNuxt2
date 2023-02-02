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
                                <i :class="item.icon"></i>
                                {{ item.title }}
                            </a>
                        </li>
                        <li v-if="notificationStatu !== null">
                            <div class="checkbox-switch">
                                <input type="checkbox" @change="notificationStatuChange" id="notificationStatu" v-model="notificationStatu" />
                                <label for="notificationStatu"></label>
                                <span>Bildirim almak ister misiniz?</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters, mapState } from "vuex";

export default {
    name: "Sidebar",
    data() {
        return {
            notificationStatu: null
        }
    },
    computed: {
		...mapGetters('category', ["getCategories"]),
		...mapGetters('util', ["getPages"]),
        ...mapState('util', ["fcmToken"])
	},
	async created() {
		await this.$store.dispatch("category/getCategoriesList");
        await this.getTokenStatu();
	},
	methods: {
		...mapActions({getCategoriesList: 'category/getCategoriesList'}),
        
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
        },
        getTokenStatu(){
            if (this.fcmToken !== null) {
                this.$axios.get(`${this.$config.SITE_URL}/gcm-notification/get-statu.php?basic_token=YWhtdGtwbG45NkBnbWFpbC5jb206MjI1NTg4KipLYXBsYW4&token=${this.fcmToken}`)
                .then((response) => {
                    this.notificationStatu = response.data.statu === "1";
                });
            }
        },
        async notificationStatuChange(){
            const formData = new FormData();
            formData.append("token", this.fcmToken);
            await this.$axios.post(`${this.$config.SITE_URL}/gcm-notification/change-statu.php?basic_token=YWhtdGtwbG45NkBnbWFpbC5jb206MjI1NTg4KipLYXBsYW4`, formData)
            .then((response) => {
                if (response.data.success) {
                    this.$swal({
                        icon: 'success',
                        title: 'Oley!',
                        text: response.data.message,
                        showConfirmButton: false
                    });
                }
            });
        }
	}
}
</script>