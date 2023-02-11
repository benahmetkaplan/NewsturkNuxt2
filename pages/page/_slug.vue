<template>
    <div class="paper-slider-slick" v-if="slug === 'gazeteler'">
        <PaperSlider />
    </div>
    <div v-else-if="slug === 'bize-ulasin'">
        <ContactForm />
    </div>
    <div v-else-if="slug === 'eczaneler'">
        <DutyPharmacy />
    </div>
    <div v-else-if="slug === 'hava-durumu'">
        <Weather />
    </div>
    <div v-else-if="slug === 'canli-yayin'">
        <LiveStream />
    </div>
</template>

<script>

import PaperSlider from '~/components/sections/paper-slider.vue';
import ContactForm from '~/components/views/contact-form.vue';
import DutyPharmacy from '~/components/views/duty-pharmacy.vue';
import Weather from '~/components/views/weather.vue';
import LiveStream from '~/components/views/live-stream.vue';

export default {
    components: {
		PaperSlider,
        ContactForm,
        DutyPharmacy,
        Weather,
        LiveStream
	},
    data() {
        return {
            slug: this.$route.params.slug
        }
    }
}
</script>