<template>
    <div :class="`appBottomMenu ${ fixStatu ? 'fixed' : '' }`">

        <div v-for="item in getPageList()" :key="item.slug" :class="`item ${item.slug === activeTab ? 'active' : ''}`">
            <a @click="goToView(item.slug)">
                <p>
                    <i :class="`icon ion-ios-${item.icon}`"></i>
                    <span>{{item.title}}</span>
                </p>
            </a>
        </div>
        
    </div>
</template>

<script>

import { mapGetters } from "vuex"

export default {
    name: "Footer",
    data() {
        return {
            fixStatu: true,
            activeTab: 'home'
        }
    },
    computed: {
		...mapGetters(["getPages"])
	},
    methods: {
        goToView(slug) {
            this.activeTab = slug;
            if(slug === "home"){
                return this.$nuxt.$options.router.push(`/`);
            }else{
                return this.$nuxt.$options.router.push(`/page/` + slug);
            }
        },
        getPageList(){
            return this.getPages();
        }
    },
    watch:{
        $route (to){
            this.fixStatu = (!to.fullPath.includes('/page/skor')) && !to.fullPath.includes('/page/hisseler');
            if(!to.fullPath.includes('/page/')){
                this.activeTab = 'home'
            }else{
                this.activeTab = to.fullPath.replaceAll("/page/", "");
                this.fixStatu = false;
            }
        }
    }
}
</script>