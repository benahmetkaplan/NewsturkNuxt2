<template>
    <div class="paper-slider-slick" v-if="slug === 'gazeteler'">
        <PaperSlider />
    </div>
    <div v-else-if="slug === 'bize-ulasin'">
        <ContactForm />
    </div>
    <div v-else>
        <div id="appCapsule" class="web-view">
            <iframe :src="source" frameborder="0"></iframe>
        </div>
    </div>   
</template>

<script>

import PaperSlider from '~/components/sections/paper-slider.vue';
import ContactForm from '~/components/views/contact-form.vue';

export default {
    components: {
		PaperSlider,
        ContactForm
	},
    data() {
        return {
            source: '',
            slug: this.$route.params.slug
        }
    },
    async created() {
        this.source = `${this.$config.SITE_URL}/${this.slug}/?app=1`;
    }
}
</script>