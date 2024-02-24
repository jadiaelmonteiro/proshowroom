<template class="showroom">
    <div>
        <LandingPageAppBar toRoute="/auth" nameButton="LOGIN"></LandingPageAppBar>
        <v-main>
            <v-container fluid>
                <v-container id="user-profile" fluid tag="section" class="mt-10">
                    <v-row justify="center">

                        <base-material-snackbar v-model="snackbar" :type="colorSnack" top center>
                            Aviso: <span class="font-weight-bold">&nbsp;{{ textContentSnack }}&nbsp;</span>
                        </base-material-snackbar>

                        <v-col cols="12" md="8">
                            <base-material-card color="showroom">
                                <template v-slot:heading>
                                    <div class="display-2 font-weight-light">
                                        Criar conta
                                    </div>

                                    <div class="subtitle-1 font-weight-light">
                                        Preencher os dados necessários
                                    </div>
                                </template>

                                <v-form>
                                    <v-container class="py-0">
                                        <v-row>
                                            <v-col cols="12" md="12" lg="6">
                                                <v-text-field v-model="dataUser.firstName" color="showroom" label="Nome"
                                                    :rules="rulesText" class="purple-input" type=text
                                                    prepend-icon="mdi-text-box-edit" />
                                            </v-col>

                                            <v-col cols="12" md="12" lg="6">
                                                <v-text-field v-model="dataUser.lastName" color="showroom"
                                                    label="Sobre nome" class="purple-input" type=text
                                                    prepend-icon="mdi-text-box-edit" />
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field v-model="dataUser.email" color="showroom" label="E-mail"
                                                    :rules="emailRules" class="purple-input" prepend-icon="mdi-email"
                                                    type="email" />
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field v-model="dataUser.password" color="showroom"
                                                    label="Senha de acesso" class="purple-input"
                                                    :type="showPassword ? 'text' : 'password'" :rules="passwordRules"
                                                    prepend-icon="mdi-lock"
                                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                                    @click:append="showPassword = !showPassword" />
                                            </v-col>
                                            <v-col cols="12" md="12">
                                                <v-text-field v-model="dataUser.confirmPassword" color="showroom"
                                                    label="Confirmar senha de acesso" class="purple-input"
                                                    :rules="[!!this.dataUser.confirmPassword || 'Por favor, confirme a senha', this.dataUser.confirmPassword === this.dataUser.password || 'As senhas não conferem.']"
                                                    prepend-icon="mdi-lock"
                                                    :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                                    :type="showConfirmPassword ? 'text' : 'password'"
                                                    @click:append="showConfirmPassword = !showConfirmPassword" />
                                            </v-col>

                                            <v-col cols="12" class="text-center">
                                                <v-btn color="showroom" @click="createUser"
                                                    :disabled="isFirstNameEmpty || isPasswordsMismatched || isEmailInvalid">
                                                    Criar conta
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-form>
                            </base-material-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-container>
        </v-main>
        <LadingPageFooter></LadingPageFooter>
    </div>
</template>
<script>

import userService from '../../../services/userService.js';

export default {
    name: 'AccountPage',
    components: {
        LandingPageAppBar: () => import('../components/AppBar.vue'),
        LadingPageFooter: () => import('../components/Footer.vue')
    },
    data: () => ({
        showConfirmPassword: false,
        showPassword: false,
        dataUser: {
            firstName: "",
            lastName: "",
            password: "",
            email: "",
            confirmPassword: "",
        },
        passwordRules: [
            (value) => !!value || 'Por favor, escreva uma senha.',
            (value) => (value && value.length >= 3) || 'Mínimo de 3 characters',
        ],
        rulesText: [
            value => !!value || 'Requerido'
        ],
        emailRules: [
            value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Por favor, digite um e-mail válido!'
        ],
        snackbar: false,
        textContentSnack: "",
        colorSnack: "success",
    }),

    computed: {
        isFirstNameEmpty() {
            return !this.dataUser.firstName.trim();
        },
        isPasswordsMismatched() {
            return this.dataUser.confirmPassword !== this.dataUser.password;
        },
        isEmailInvalid() {
            return !this.dataUser.email.trim();
        },
    },

    methods: {
        createUser() {
            userService.createUser({
                body: this.dataUser
            })
                .then(response => {
                    if (response) {
                        this.colorSnack = "success";
                        this.textContentSnack = "CONTA CRIADA COM SUCESSO! SERÁ REDIRECIONADO PARA A TELA DE LOGIN";
                        this.snackbar = true;

                        this.redirectToCreateAccount();
                    }
                })
                .catch(error => {
                    this.colorSnack = "error";
                    this.textContentSnack = "HOUVE UMA FALHA AO TENTAR CRIAR A CONTA, TENTE NOVAMENTE!";
                    this.snackbar = true;
                    console.log(error);
                });
        },

        redirectToCreateAccount() {
            setTimeout(() => {
                this.$router.push('/auth');
            }, 4000);
        }

    },

    mounted() {
    }
}
</script>

<style>
.showroom {
    background: linear-gradient(to right, #808080, #404040);
}
</style>