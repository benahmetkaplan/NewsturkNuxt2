<template>
    <div class="weather-page">
        <div class="container">
            <div class="search-container">
                <div class="form-group">
                    <label for="province">Şehir Seçiniz</label>
                    <select @change="selectChange" name="province" id="province" v-model="formData.province" class="form-control">
                        <option :value="null">İl Seçin</option>
                        <option v-for="item in apiData.provinces" :value="item.il">
                            {{ item.il }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="forecast-container">
                <div v-if="apiData.firstDay !== null" class="today forecast">
                    <div class="forecast-header">
                        <div class="day">Bugün</div>
                        <div class="date">{{ formData.province }}</div>
                    </div>
                    <div class="forecast-content">
                        <div class="degree">
                            <div class="num">{{ Math.ceil(apiData.firstDay.day.mintemp_c) }}<sup>o</sup>C</div>
                            <div class="image"><img :src="apiData.firstDay.day.condition.icon"></div>
                        </div>
                    </div>
                </div>
                <div v-if="apiData.result !== null" v-for="item in apiData.result" class="forecast other-day">
                    <div class="forecast-header">
                        <div class="day">{{ new Date(item.date).toLocaleDateString("tr", { weekday: 'long' }) }}</div>
                    </div>
                    <div class="forecast-content">
                        <div class="degree">{{ Math.ceil(item.day.maxtemp_c) }}<sup>o</sup>C</div>
                        <small>{{ Math.ceil(item.day.mintemp_c) }}<sup>o</sup>C</small>
                        <div class="image"><img :src="item.day.condition.icon"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

String.prototype.trToEn = function () {
    return this.replaceAll('Ğ','g')
    .replaceAll('Ü','u')
    .replaceAll('Ş','s')
    .replaceAll('I','i')
    .replaceAll('İ','i')
    .replaceAll('Ö','o')
    .replaceAll('Ç','c')
    .replaceAll('ğ','g')
    .replaceAll('ü','u')
    .replaceAll('ş','s')
    .replaceAll('ı','i')
    .replaceAll('ö','o')
    .replaceAll('ç','c').toLowerCase();
};

export default {
    name: "Weather",
    data() {
        return {
            formData: {
                province: "İSTANBUL"
            },
            apiData: {
                provinces: null,
                result: null,
                firstDay: null
            }
        }
    },
    created(){
        this.getProvinces();
        this.getWeather(this.formData.province);
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
        selectChange(){
            this.getWeather(this.formData.province);
        },
        getWeather(key){
            this.$axios.get(`https://api.weatherapi.com/v1/forecast.json?key=85e1ee6e88ad45deb10130011230902&q=${key.trToEn()}&days=7&aqi=no&alerts=no`,
            {
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then((response) => {
                if (response.data.forecast.forecastday) {
                    this.apiData.result = [];
                    if (response.data !== null) {
                        response.data.forecast.forecastday.forEach((item, index) => {
                            if (index === 0) {
                                this.apiData.firstDay = item;
                            }else{
                                this.apiData.result.push(item);
                            }
                        });
                    }else{
                        this.$swal({
                            icon: 'error',
                            title: 'Dikkat!',
                            text: 'Herhangi bir kayıt bulunamadı.',
                            showConfirmButton: false
                        });
                    }                    
                }
            });
        }
	}
}

</script>