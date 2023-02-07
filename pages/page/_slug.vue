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
</template>

<script>

import PaperSlider from '~/components/sections/paper-slider.vue';
import ContactForm from '~/components/views/contact-form.vue';
import DutyPharmacy from '~/components/views/duty-pharmacy.vue';

export default {
    components: {
		PaperSlider,
        ContactForm,
        DutyPharmacy
	},
    data() {
        return {
            slug: this.$route.params.slug
        }
    }
}
</script>