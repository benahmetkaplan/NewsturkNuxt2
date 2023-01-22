<template>
    <div v-bind:class="getClass()">

        <div v-for="item in getPageList()" :key="item.slug" v-bind:class="getActiveClass(item.slug)">
            <a @click="goToView(item.slug)">
                <p>
                    <i :class="getIconClass(item.icon)"></i>
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
                return this.$nuxt.$options.router.push(`/view/` + slug);
            }
        },
        getClass(){
            return this.fixStatu ? 'appBottomMenu fixed' : 'appBottomMenu'
        },
        getIconClass(icon){
            return `icon ion-ios-${icon}`;
        },
        getActiveClass (slug) {
            return slug === this.activeTab ? 'item active' : 'item'
        },
        getPageList(){
            return this.getPages();
        }
    },
    watch:{
        $route (to){
            this.fixStatu = !to.fullPath.includes('/view/');
            if(!to.fullPath.includes('/view/')){
                this.activeTab = 'home'
            }else{
                this.activeTab = to.fullPath.replaceAll("/view/", "");
                this.fixStatu = false;
            }
        }
    }
}
</script>