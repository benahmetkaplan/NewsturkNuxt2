<template>
    <div :class="`appHeader ${ fixStatu ? 'fixed' : '' }`" data-test="header">
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
export default {
    name: "Header", 
    data() {
        return {
            fixStatu: true,
            goBackStatu: false
        }
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
        }
    },
    watch:{
        $route (to){
            this.fixStatu = (!to.fullPath.includes('/page/skor')) && !to.fullPath.includes('/page/hisseler');
            this.goBackStatu = to.fullPath.includes('/post/') || to.fullPath.includes('/view/') || to.fullPath.includes('/category/')
        }
    }
}
</script>