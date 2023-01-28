<template>
    <div id="appCapsule">
        <div class="appContent">

            <div class="sectionTitle mb-2">
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

            <form class="mb-2">

                <div class="form-group">
                    <input type="text" class="form-control" v-model="formData.name" placeholder="Ad">
                </div>

                <div class="form-group">
                    <input type="text" class="form-control" v-model="formData.last_name" placeholder="Soyad">
                </div>

                <div class="form-group">
                    <input type="text" class="form-control" v-model="formData.email" placeholder="E-Posta Adresi">
                </div>

                <div class="form-group">
                    <input type="text" class="form-control" v-model="formData.phone" placeholder="Telefon Numarası">
                </div>
                
                <div class="form-group">
                    <textarea class="form-control" rows="3" v-model="formData.message" placeholder="Mesajınız"></textarea>
                </div>
                <div>
                    <button @click="formSend" type="button" class="btn btn-primary btn-lg btn-block">
                        <i class="icon ion-ios-send"></i> Formu Gönder
                    </button>
                </div>
            </form>

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

export default {
    name: "ContactForm",
    data() {
        return {
            formData: {
                access_key: '6d99cac3-83d0-4766-902b-65f671517b91',
                name: '',
                last_name: '',
                email: '',
                phone: '',
                message: '',
                subject: 'İletişim Formu'
            }
        }
    },
	methods: {
		formSend () {
            if(this.formData.name !== '' && this.formData.last_name !== '' && this.formData.email !== '' && this.formData.message !== ''){
                this.$axios.post("https://api.web3forms.com/submit", this.formData)
                .then((response) => {
                    if(response.data.success){
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
                        this.$swal({
                            icon: 'error',
                            title: 'Dikkat!',
                            text: 'Bir sorun oluştu.',
                            confirmButtonText: 'Tamam'
                        });
                    }
                });
            }else{
                this.$swal({
                    icon: 'error',
                    title: 'Dikkat!',
                    text: 'Lütfen zorunlu alanları doldurun.',
                    confirmButtonText: 'Tamam'
                });
            }
        }
	}
}

</script>