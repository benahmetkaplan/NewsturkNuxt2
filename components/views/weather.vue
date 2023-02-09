<template>
    <div class="weather-page">
        <div class="container">
            <div class="search-container">
                <div class="form-group">
                    <label for="il">Şehir Seçiniz</label>
                    <select @change="selectChange" name="il" id="il" v-model="formData.il" class="form-control">
                        <option :value="null">İl Seçin</option>
                        <option v-for="item in apiData.iller" :key="item.il" :value="item.il">
                            {{ item.il }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="forecast-container">
                <div v-if="apiData.firstDay !== null" class="today forecast">
                    <div class="forecast-header">
                        <div class="day">Bugün</div>
                        <div class="date">{{ formData.il }}</div>
                    </div>
                    <div class="forecast-content">
                        <div class="degree">
                            <div class="num">{{ Math.ceil(apiData.firstDay.day.mintemp_c) }}<sup>o</sup>C</div>
                            <div class="image"><img :src="apiData.firstDay.day.condition.icon"></div>
                        </div>
                    </div>
                </div>
                <div v-if="apiData.result !== null" v-for="item in apiData.result" :key="item.day" class="forecast other-day">
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

String.prototype.turkishtoEnglish = function () {
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

import jsonIller from '../../json/iller.json';

export default {
    name: "Weather",
    data() {
        return {
            formData: {
                il: "İSTANBUL"
            },
            apiData: {
                iller: jsonIller,
                result: null,
                firstDay: null
            }
        }
    },
    created(){
        this.getWeather(this.formData.il);
    },
	methods: {
        selectChange(){
            this.getWeather(this.formData.il);
        },
        getWeather(key){
            this.$axios.get(`https://api.weatherapi.com/v1/forecast.json?key=85e1ee6e88ad45deb10130011230902&q=${key.turkishtoEnglish()}&days=7&aqi=no&alerts=no`,
            {
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then((response) => {
                if (response.data.forecast.forecastday) {
                    this.apiData.result = [];
                    response.data.forecast.forecastday.forEach((item, index) => {
                        if (index === 0) {
                            this.apiData.firstDay = item;
                        }else{
                            this.apiData.result.push(item);
                        }
                    });
                }
            });
        }
	}
}

</script>