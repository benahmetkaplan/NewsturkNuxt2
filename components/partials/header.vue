<template>
    <div :class="`appHeader ${ fixClassStatu ? 'fixed' : '' }`" data-test="header">
        <div class="left">
            <a @click="goBack" v-show="goBackStatu" href="javascript:;" class="icon goBack">
                <i class="fa-solid fa-angle-left"></i>
            </a>            
        </div>
        <div class="pageTitle">
            <a href="javascript:;" @click="goToHome">
                <img :src="`${this.$config.SITE_URL}/icon.png`" class="image">
            </a>
        </div>
        <div class="right">
            <a @click="sidebarToggle" id="appSidebarBtn" href="javascript:;" class="icon">
                <i class="fa-solid fa-bars"></i>
            </a>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapMutations } from "vuex";

export default {
    name: "Header", 
    data() {
        return {
            goBackStatu: false,
            fixClassStatu: true
        }
    },
    computed: {
		...mapGetters('util', ["getPages"]),
		...mapGetters('util', ["getFixedStatu"])
	},
    methods: {
        ...mapMutations('util', ["setFixedStatu"]),

        goBack(){
            window.history.back();
        },
        goToHome(){
            return this.$nuxt.$options.router.push(`/`);
        },
        sidebarToggle(){
            $("#appSidebar").toggleClass("show");
        }
    },
    mounted() {
        if (this.$route.fullPath) {
            this.setFixedStatu((!this.$route.fullPath.includes('/page/skor')) && !this.$route.fullPath.includes('/page/hisseler'));
            this.goBackStatu = this.$route.fullPath.includes('/post/') || this.$route.fullPath.includes('/page/') || this.$route.fullPath.includes('/category/');
        }
        this.fixClassStatu = this.getFixedStatu();        
    },
    watch:{
        $route (to){
            this.fixClassStatu = this.getFixedStatu();
            this.goBackStatu = to.fullPath.includes('/post/') || to.fullPath.includes('/page/') || to.fullPath.includes('/category/');
        }
    }
}
</script>