<template>
    <div v-bind:class="getClass()" data-test="header">
        <div class="left">
            <a v-on:click="goBack" v-show="goBackStatu" href="javascript:;" class="icon goBack">
                <i class="icon ion-ios-arrow-back"></i>
            </a>
        </div>
        <div class="pageTitle">
            <router-link to="/">
                <img src="https://newsturk.com.tr/icon.png" class="image">
            </router-link>
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
        getClass(){
            return this.fixStatu ? 'appHeader fixed' : 'appHeader';
        }
    },
    watch:{
        $route (to){
            this.fixStatu = !to.fullPath.includes('/view');
            this.goBackStatu = to.fullPath.includes('/post') || to.fullPath.includes('/view');
        }
    }
}
</script>