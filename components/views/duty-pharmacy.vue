<template>
    <div id="appCapsule">
        <div class="appContent">
            <form v-if="apiData.provinces !== null" class="mb-3 mt-3" @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <select name="province" id="province" v-model="formData.province" @change="selectProvince" class="form-control">
                        <option :value="null">İl Seçin</option>
                        <option v-for="item in apiData.provinces" :key="item.il" :value="item.il">
                            {{ item.il }}
                        </option>
                    </select>
                </div>
                <div v-if="apiData.currentCountries !== null" class="form-group">
                    <select name="country" id="country" v-model="formData.country" class="form-control">
                        <option :value="null">İlçe Seçin</option>
                        <option v-for="item in apiData.currentCountries" :key="item.ilce" :value="item.ilce">
                            {{ item.ilce }}
                        </option>
                    </select>
                </div>
                <button v-if="formData.province !== null && formData.country !== null" type="submit" class="btn btn-primary btn-lg btn-block">
                    <i class="fa-solid fa-paper-plane-top"></i>&emsp;Listele
                </button>
            </form>
            <div class="eczane_list" v-if="apiData.pharmacies !== null">
                <div v-for="item in apiData.pharmacies" :key="item.title" class="eczane">
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
export default {
    name: "DutyPharmacy",
    data() {
        return {
            formData: {
                province: null,
                country: null
            },
            apiData: {
                provinces: null,
                countries: null,
                pharmacies: null,
                currentCountries: null
            }
        }
    },
    created(){
        this.getProvinces();
        this.getCountries();
    },
	methods: {
        getProvinces(){
            this.$axios({
                method: "GET",
                url: `${this.$config.SITE_URL}/json/provinces.php`
            }).then(response => {
                if (response.data) {
                    this.apiData.provinces = response.data;
                }
            });
        },
        getCountries(){
            this.$axios({
                method: "GET",
                url: `${this.$config.SITE_URL}/json/countries.php`
            }).then(response => {
                if (response.data) {
                    this.apiData.countries = response.data;
                }
            });
        },
        selectProvince(){
            let key = this.formData.province;
            this.formData.country = null;
            this.getCountryList(key);
        },
        getCountryList(key){
            this.apiData.currentCountries = this.apiData.countries.filter(function(x) { return x.il === key });
        },
        onFormSubmit(){
            this.$axios.get(`${this.$config.SITE_URL}/get-pharmacy.php?province=${this.formData.province}&district=${this.formData.country}`)
            .then((response) => {
                if (response.data.length < 1) {
                    this.$swal({
                        icon: 'error',
                        title: 'Dikkat!',
                        text: 'Herhangi bir kayıt bulunamadı.',
                        showConfirmButton: false
                    });
                }
                this.apiData.pharmacies = response.data;
            });
        }
	}
}

</script>