import Vue from 'vue';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

Vue.use(VueTelInput, {
    defaultCountry: 'tr',
    styleClasses: 'form-control',
    inputOptions: {
        placeholder: 'Lütfen telefon numaranızı girin.',
        showDialCode: true
    }
});