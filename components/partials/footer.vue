<template>
    <div :class="`appBottomMenu ${ fixedStatu() ? 'fixed' : '' }`">

        <div v-for="item in getPageList()" :key="item.slug" :class="`item ${item.slug === activeTab() ? 'active' : ''}`">
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

import { mapGetters } from "vuex";

export default {
    name: "Footer",
    data() {
        return {
        }
    },
    computed: {
		...mapGetters(["getPages"]),
		...mapGetters(["getFixedStatu"]),
		...mapGetters(["getBottomMenuActiveTab"])
	},
    methods: {
        goToView(slug) {
            if(slug === "home"){
                return this.$nuxt.$options.router.push(`/`);
            }else{
                return this.$nuxt.$options.router.push(`/page/` + slug);
            }
        },
        getPageList(){
            return this.getPages();
        },
        fixedStatu(){
            return this.getFixedStatu();
        },
        activeTab(){
            return this.getBottomMenuActiveTab();
        }
    }
}
</script>