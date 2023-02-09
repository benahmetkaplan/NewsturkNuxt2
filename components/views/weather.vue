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
                        <div class="location">{{ apiData.firstDay.day }}</div>
                        <div class="degree">
                            <div class="num">{{ Math.ceil(apiData.firstDay.max) }}<sup>o</sup>C</div>
                            <div class="image"><img :src="apiData.firstDay.icon"></div>
                        </div>
                    </div>
                </div>
                <div v-if="apiData.result !== null" v-for="item in apiData.result" :key="item.day" class="forecast other-day">
                    <div class="forecast-header">
                        <div class="day">{{ item.day }}</div>
                    </div>
                    <div class="forecast-content">
                        <div class="degree">{{ Math.ceil(item.max) }}<sup>o</sup>C</div>
                        <small>{{ Math.ceil(item.min) }}<sup>o</sup></small>
                        <div class="image"><img :src="item.icon"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

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
            this.$axios.get(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${key}`,
            {
                headers: {
                    'authorization': 'apikey 6oAn6200lc153WmoBlXovS:3sw2h6xSRF9dr3knRa8ids',
                    'content-type': 'application/json'
                }
            })
            .then((response) => {
                if (response.data.success) {
                    this.apiData.result = [];
                    response.data.result.forEach((item, index) => {
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