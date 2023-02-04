<template>
    <div :class="`appBottomMenu ${ fixClassStatu ? 'fixed' : '' }`">

        <div v-for="item in getPageList()" :key="item.slug" :class="`item ${item.slug === activeTab() ? 'active' : ''}`">
            <a @click="goToView(item.slug)">
                <p>
                    <i :class="item.icon"></i>
                    <span>{{item.title}}</span>
                </p>
            </a>
        </div>
        
    </div>
</template>

<script>

import { mapGetters, mapMutations } from "vuex";

export default {
    name: "Footer",
    data() {
        return {
            fixClassStatu: true
        }
    },
    computed: {
		...mapGetters('util', ["getPages"]),
		...mapGetters('util', ["getFixedStatu"]),
		...mapGetters('util', ["getBottomMenuActiveTab"])
	},
    methods: {
        ...mapMutations('util', ["setFixedStatu"]),

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
        activeTab(){
            return this.getBottomMenuActiveTab();
        }
    },
    created() {
        if (this.$route.fullPath) {
            this.setFixedStatu((!this.$route.fullPath.includes('/page/skor')));
        }
        this.fixClassStatu = this.getFixedStatu();
    },
    watch:{
        $route (){
            this.fixClassStatu = this.getFixedStatu();
        }
    }
}
</script>