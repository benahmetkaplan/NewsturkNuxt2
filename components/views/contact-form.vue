<template>
    <div id="appCapsule">
        <div class="appContent">

            <div class="sectionTitle mb-2 mt-3">
                <div class="title">
                    <h1 class="d-block">Bize Ulaşın</h1>
                </div>
                <div class="lead">
                    <p>
                        <strong>GENEL YAYIN YÖNETMENİ</strong><br>
                        Hakan Aslan<br>
                        +90 555 322 92 14<br>
                        haslan@newsturk.com.tr<br><br>
                        <strong>HUKUK DANIŞMANI</strong><br>
                        Av.Erdal Yılmaz<br>
                        eyilmaz@newsturk.com.tr<br><br>
                        <strong>REKLAM REZERVASYON</strong><br>
                        reklam@newsturk.com.tr
                     </p>
                </div>
            </div>

            <ValidationObserver ref="form">
                <form class="mb-2" @submit.prevent="onFormSubmit">

                    <div class="form-group">
                        <ValidationProvider name="Ad" rules="required" v-slot="{ errors }">
                            <input v-model="contactForm.name" type="text" class="form-control" placeholder="Ad">
                            <span class="validation-error-message" v-if="errors[0]" v-html="errors[0]"></span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider name="Soyad" rules="required" v-slot="{ errors }">
                            <input v-model="contactForm.last_name" type="text" class="form-control" placeholder="Soyad">
                            <span class="validation-error-message" v-if="errors[0]" v-html="errors[0]"></span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider name="E-Posta Adresi" rules="required|email" v-slot="{ errors }">
                            <input v-model="contactForm.email" type="email" class="form-control" placeholder="E-Posta Adresi">
                            <span class="validation-error-message" v-if="errors[0]" v-html="errors[0]"></span>
                        </ValidationProvider>
                    </div>
                    
                    <div class="form-group">
                        <ValidationProvider name="Telefon Numarası" rules="required|phone" v-slot="{ errors }">
                            <vue-tel-input v-model="contactForm.phone"></vue-tel-input>
                            <span class="validation-error-message" v-if="errors[0]" v-html="errors[0]"></span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider name="Mesaj" rules="required" v-slot="{ errors }">
                            <textarea class="form-control" rows="3" v-model="contactForm.message" placeholder="Mesaj"></textarea>
                            <span class="validation-error-message" v-if="errors[0]" v-html="errors[0]"></span>
                        </ValidationProvider>
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg btn-block">
                        <i class="fa-solid fa-paper-plane-top"></i>&emsp;Formu Gönder
                    </button>
                </form>
            </ValidationObserver>            

            <div class="divider mt-4 mb-4"></div>

            <div class="card listviewCard">
                <div class="card-body pt-1 pb-1">
                    <div class="listView">

                        <a href="mailto:info@newsturk.com.tr" class="listItem">
                            <div class="image">
                                <div class="iconBox bg-primary">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                            <div class="text">
                                <div>
                                    <strong>info@newsturk.com.tr</strong>
                                </div>
                            </div>
                        </a>

                        <a v-if="getAccountList().length > 0" v-for="item in getAccountList()" :key="item.slug" :href="item.link" target="_blank" class="listItem">
                            <div class="image">
                                <div :class="`iconBox btn btn-${item.slug}`">
                                    <i :class="item.icon"></i>
                                </div>
                            </div>
                            <div class="text">
                                <div>
                                    <strong v-html="item.title"></strong>
                                </div>
                            </div>
                        </a>
                        
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>

import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { mapMutations, mapGetters } from "vuex";

export default {
    name: "ContactForm",
    components: {
        ValidationObserver,
        ValidationProvider        
    },
    data() {
        return {
            contactForm: {
                access_key: '6d99cac3-83d0-4766-902b-65f671517b91',
                subject: 'İletişim Formu',
                name: '',
                last_name: '',
                email: '',
                phone: '',
                message: ''
            }
        }
    },
    computed: {
        ...mapGetters('util', ["getAccounts"])
    },
	methods: {
        ...mapMutations('util', ["setIsLoading"]),

        getAccountList() {
			return this.getAccounts();
		},
        onFormSubmit () {
            this.setIsLoading(true);
            this.$refs.form.validate().then(success => {

                if (!success) {
                    this.$swal({
                        icon: 'error',
                        title: 'Dikkat!',
                        text: 'Lütfen formu kontrol ederek tekrar doldurun!',
                        confirmButtonText: 'Tamam',
                        showConfirmButton: false
                    });
                    this.setIsLoading(false);
                    return;
                }

                const formData = new FormData();
                formData.append("access_key", this.contactForm.access_key);
                formData.append("subject", this.contactForm.subject);
                formData.append("name", this.contactForm.name);
                formData.append("last_name", this.contactForm.last_name);
                formData.append("email", this.contactForm.email);
                formData.append("phone", this.contactForm.phone);
                formData.append("message", this.contactForm.message);

                this.$axios.post("https://api.web3forms.com/submit", formData)
                .then((response) => {
                    if(response.data.success){
                        this.setIsLoading(false);
                        this.$swal({
                            icon: 'success',
                            title: 'Oley!',
                            text: 'Mesajınız iletildi.',
                            showConfirmButton: false
                        });
                        this.contactForm.name = '';
                        this.contactForm.last_name = '';
                        this.contactForm.email = '';
                        this.contactForm.phone = '';
                        this.contactForm.message = '';
                    }else{
                        this.setIsLoading(false);
                        this.$swal({
                            icon: 'error',
                            title: 'Dikkat!',
                            text: 'Bir sorun oluştu.',
                            showConfirmButton: false
                        });
                    }
                });
                
            });
        }
	}
}

</script>