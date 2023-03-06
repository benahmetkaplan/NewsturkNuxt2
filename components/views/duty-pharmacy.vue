<template>
    <div id="appCapsule">
        <div class="appContent">
            <form class="mb-3 mt-3" @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <select name="il" id="il" v-model="formData.il" @change="selectProvince" class="form-control">
                        <option :value="null">İl Seçin</option>
                        <option v-for="item in apiData.iller" :key="item.il" :value="item.il">
                            {{ item.il }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <select name="ilce" id="ilce" v-model="formData.ilce" class="form-control">
                        <option :value="null">İlçe Seçin</option>
                        <option v-for="item in apiData.ilceler" :key="item.ilce" :value="item.ilce">
                            {{ item.ilce }}
                        </option>
                    </select>
                </div>
                <button v-if="formData.il !== null && formData.ilce !== null" type="submit" class="btn btn-primary btn-lg btn-block">
                    <i class="fa-solid fa-paper-plane-top"></i>&emsp;Listele
                </button>
            </form>
            <div class="eczane_list" v-if="apiData.eczaneler !== null">
                <div v-for="item in apiData.eczaneler" :key="item.title" class="eczane">
                    <div class="eczane_title">
                        <span class="eczane_logo">E</span>
                        <span class="eczane_name" v-html="item.title"></span>
                    </div>
                    <div class="eczane_bio">
                        <p><strong>Adres: </strong>{{ item.address }}</p>
                        <p><strong>Tel: </strong><a :href="`tel:${item.phone}`">{{ item.phone }}</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import jsonIller from '../../json/iller.json';
import jsonIlceler from '../../json/ilceler.json';

export default {
    name: "DutyPharmacy",
    data() {
        return {
            formData: {
                il: null,
                ilce: null
            },
            apiData: {
                iller: jsonIller,
                ilceler: null,
                eczaneler: null
            }
        }
    },
	methods: {
        selectProvince(){
            let key = this.formData.il;
            this.formData.ilce = null;
            this.getDistrictList(key);
        },
        getDistrictList(key){
            this.apiData.ilceler = jsonIlceler.filter(function(x) { return x.il === key });
        },
        onFormSubmit(){
            this.$axios.get(`${this.$config.SITE_URL}/get-pharmacy.php?province=${this.formData.il}&district=${this.formData.ilce}`)
            .then((response) => {
                if (response.data.length < 1) {
                    this.$swal({
                        icon: 'error',
                        title: 'Dikkat!',
                        text: 'Herhangi bir kayıt bulunamadı.',
                        showConfirmButton: false
                    });
                }
                this.apiData.eczaneler = response.data;
            });
        }
	}
}

</script>