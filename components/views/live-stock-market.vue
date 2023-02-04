<template>
    <div id="appCapsule">
        <div class="appContent">
            <h3 class="title mb-1 mt-3">Canlı Borsa</h3>
            <div class="table-responsive table-live-stock-market">
                <table v-if="datas !== null" class="table">
                    <thead>
                        <tr>
                            <th>Menkul</th>
                            <th>Fiyat</th>
                            <th>%</th>
                            <th>Zaman</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="item.zaman !== null" v-for="(item, index) in datas" :key="index">
                            <td class="hisse_adi"><strong>{{ index }}</strong></td>
                            <td><em>{{ item.fiyat }}</em></td>
                            <td class="yuzde">{{ item.hisse }}</td>
                            <td class="zaman">{{ item.zaman }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import { mapMutations } from "vuex";

export default {
    name: "LiveStockMarket",
    data() {
        return {
            datas: null
        }
    },
    created(){
        this.getMarket();
    },
	methods: {
        getMarket(){
            this.getData();
            setInterval(function(){
                this.getData();
            }.bind(this), 20000);
        },
        getData(){
            this.$axios.get(`${this.$config.SITE_URL}/template/inc/class/hisseler.php`)
            .then((response) => {
                this.datas = response.data;
            });
        }
	}
}

</script>