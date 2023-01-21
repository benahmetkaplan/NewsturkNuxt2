<template>
    <div v-bind:class="getClass()">
        <div v-bind:class="getActiveClass('home')">
            <a @click="goToHome">
                <p>
                    <i class="icon ion-ios-home"></i>
                    <span>Anasayfa</span>
                </p>
            </a>
        </div>
        <div v-bind:class="getActiveClass('skor')">
            <a @click="goToView('skor')">
                <p>
                    <i class="icon ion-ios-football"></i>
                    <span>Canlı Skor</span>
                </p>
            </a>
        </div>
        <div v-bind:class="getActiveClass('hisseler')">
            <a @click="goToView('hisseler')">
                <p>
                    <i class="icon ion-ios-cash"></i>
                    <span>Canlı Borsa</span>
                </p>
            </a>
        </div>
        <div v-bind:class="getActiveClass('bize-ulasin')">
            <a @click="goToView('bize-ulasin')">
                <p>
                    <i class="icon ion-ios-mail"></i>
                    <span>Bize Ulaşın</span>
                </p>
            </a>
        </div>
    </div>
</template>

<script>

import { mapMutations } from "vuex"

export default {
    name: "Footer",
    data() {
        return {
            fixStatu: true,
            activeTab: 'home'
        }
    },
    methods: {
        ...mapMutations(["setIsLoading"]),

        goToView(slug) {
            this.setIsLoading(true);
            this.activeTab = slug;
            setTimeout(() => {
                this.setIsLoading(false)
            }, 2000);
            return this.$nuxt.$options.router.push(`/view/` + slug);            
        },
        goToHome(){
            this.activeTab = 'home';
            return this.$nuxt.$options.router.push(`/`);
        },
        getClass(){
            return this.fixStatu ? 'appBottomMenu fixed' : 'appBottomMenu'
        },
        getActiveClass (prefix) {
            return prefix === this.activeTab ? 'item active' : 'item'
        }
    },
    watch:{
        $route (to){
            this.fixStatu = !to.fullPath.includes('/view');
            if(!to.fullPath.includes('/view')){
                this.activeTab = 'home'
            }
        }
    }
}
</script>