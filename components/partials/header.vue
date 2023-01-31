<template>
    <div :class="`appHeader ${ fixedStatu() ? 'fixed' : '' }`" data-test="header">
        <div class="left">
            <a @click="goBack" v-show="goBackStatu" href="javascript:;" class="icon goBack">
                <i class="icon ion-ios-arrow-back"></i>
            </a>            
        </div>
        <div class="pageTitle">
            <a href="javascript:;" @click="goToHome">
                <img :src="`${this.$config.SITE_URL}/icon.png`" class="image">
            </a>
        </div>
        <div class="right">
            <a @click="sidebarToggle" id="appSidebarBtn" href="javascript:;" class="icon">
                <i class="icon ion-ios-menu"></i>
            </a>
        </div>
    </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
    name: "Header", 
    data() {
        return {
            goBackStatu: false
        }
    },
    computed: {
		...mapGetters(["getPages"]),
		...mapGetters(["getFixedStatu"])
	},
    methods: {
        goBack(){
            window.history.back();
        },
        goToHome(){
            return this.$nuxt.$options.router.push(`/`);
        },
        sidebarToggle(){
            $("#appSidebar").toggleClass("show");
        },
        fixedStatu(){
            return this.getFixedStatu();
        }
    },
    watch:{
        $route (to){
            this.goBackStatu = to.fullPath.includes('/post/') || to.fullPath.includes('/view/') || to.fullPath.includes('/category/')
        }
    }
}
</script>