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
                            <input v-model="formData.name" type="text" class="form-control" placeholder="Ad">
                            <span class="validation-error-message" v-html="errors[0]"></span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider name="Soyad" rules="required" v-slot="{ errors }">
                            <input v-model="formData.last_name" type="text" class="form-control" placeholder="Soyad">
                            <span class="validation-error-message" v-html="errors[0]"></span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider name="E-Posta Adresi" rules="required|email" v-slot="{ errors }">
                            <input v-model="formData.email" type="email" class="form-control" placeholder="E-Posta Adresi">
                            <span class="validation-error-message" v-html="errors[0]"></span>
                        </ValidationProvider>
                    </div>
                    
                    <div class="form-group">
                        <ValidationProvider name="Telefon Numarası" rules="phone" v-slot="{ errors }">
                            <input v-model="formData.phone" type="text" class="form-control" placeholder="Telefon Numarası">
                            <span class="validation-error-message" v-html="errors[0]"></span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider name="Mesaj" rules="required" v-slot="{ errors }">
                            <textarea class="form-control" rows="3" v-model="formData.message" placeholder="Mesaj"></textarea>
                            <span class="validation-error-message" v-html="errors[0]"></span>
                        </ValidationProvider>
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg btn-block">
                        <i class="icon ion-ios-send"></i> Formu Gönder
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
                                    <i class="icon ion-ios-mail"></i>
                                </div>
                            </div>
                            <div class="text">
                                <div>
                                    <strong>info@newsturk.com.tr</strong>
                                </div>
                            </div>
                        </a>
                        <a href="https://twitter.com/newsturksocial" target="_blank" class="listItem">
                            <div class="image">
                                <div class="iconBox btn btn-twitter">
                                    <i class="icon ion-logo-twitter"></i>
                                </div>
                            </div>
                            <div class="text">
                                <div>
                                    <strong>Twitter</strong>
                                </div>
                            </div>
                        </a>
                        <a href="https://instagram.com/newsturksocial" target="_blank" class="listItem">
                            <div class="image">
                                <div class="iconBox btn btn-instagram">
                                    <i class="icon ion-logo-instagram"></i>
                                </div>
                            </div>
                            <div class="text">
                                <div>
                                    <strong>Instagram</strong>
                                </div>
                            </div>
                        </a>
                        <a href="https://youtube.com/@newsturksocial" target="_blank" class="listItem">
                            <div class="image">
                                <div class="iconBox btn btn-youtube">
                                    <i class="icon ion-logo-youtube"></i>
                                </div>
                            </div>
                            <div class="text">
                                <div>
                                    <strong>YouTube</strong>
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
import { mapMutations } from "vuex";

export default {
    name: "ContactForm",
    components: {
        ValidationObserver,
        ValidationProvider        
    },
    data() {
        return {
            formData: {
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
	methods: {
        ...mapMutations(["setIsLoading"]),

        onFormSubmit () {
            this.setIsLoading(true);
            this.$refs.form.validate().then(success => {

                if (!success) {
                    this.$swal({
                        icon: 'error',
                        title: 'Dikkat!',
                        text: 'Lütfen formu kontrol ederek tekrar doldurun!',
                        confirmButtonText: 'Tamam'
                    });
                    this.setIsLoading(false);
                    return;
                }

                this.$axios.post("https://api.web3forms.com/submit", this.formData)
                .then((response) => {
                    if(response.data.success){
                        this.setIsLoading(false);
                        this.$swal({
                            icon: 'success',
                            title: 'Oley!',
                            text: 'Mesajınız iletildi.',
                            confirmButtonText: 'Tamam'
                        });
                        this.formData.name = '';
                        this.formData.last_name = '';
                        this.formData.email = '';
                        this.formData.phone = '';
                        this.formData.message = '';
                    }else{
                        this.setIsLoading(false);
                        this.$swal({
                            icon: 'error',
                            title: 'Dikkat!',
                            text: 'Bir sorun oluştu.',
                            confirmButtonText: 'Tamam'
                        });
                    }
                });
                
            });
        }
	}
}

</script>