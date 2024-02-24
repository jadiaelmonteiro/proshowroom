<template class="showroom">
    <div>
        <LandingPageAppBar toRoute="/" nameButton="ANUNCIOS"></LandingPageAppBar>
        <v-main>
            <v-container fluid>
                <base-material-snackbar v-model="snackbar" :type="colorSnack" top center>
                    Aviso: <span class="font-weight-bold">&nbsp;{{ textContentSnack }}&nbsp;</span>
                </base-material-snackbar>

                <v-container id="user-profile" fluid tag="section" class="mt-10">
                    <v-row justify="center">
                        <v-col cols="12" md="8">
                            <base-material-card color="showroom">
                                <template v-slot:heading>
                                    <div class="display-2 font-weight-light">
                                        Realizar login
                                    </div>

                                    <div class="subtitle-1 font-weight-light">
                                        Acessar com e-mail e senha
                                    </div>
                                </template>

                                <v-form type="submit">
                                    <v-container class="py-0">
                                        <v-row>
                                            <v-col cols="12" md="12">
                                                <v-text-field v-model="email" label="E-mail" class="purple-input"
                                                    color="showroom" :rules="emailRules" prepend-icon="mdi-email" />
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field v-model="password" label="Senha de acesso"
                                                    class="purple-input" required color="showroom"
                                                    :type="showPassword ? 'text' : 'password'" :rules="passwordRules"
                                                    prepend-icon="mdi-lock"
                                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                                    @click:append="showPassword = !showPassword" />
                                            </v-col>

                                            <v-col cols="12" class="text-center">
                                                <v-btn color="showroom" @click="login()">
                                                    Entrar
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="12" class="text-center">
                                                <p>Se ainda não possui uma conta, clique em "Criar Conta" para realizar o
                                                    seu cadastro!</p>
                                                <v-btn color="info" @click="redirectToCreateAccount()">
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
    name: 'AuthPage',
    components: {
        LandingPageAppBar: () => import('../components/AppBar.vue'),
        LadingPageFooter: () => import('../components/Footer.vue')
    },
    data: () => ({
        showPassword: false,
        emailRules: [
            value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Por favor, digite um e-mail válido!'
        ],
        passwordRules: [
            (value) => !!value || 'Por favor, escreva sua senha.',
        ],
        snackbar: false,
        textContentSnack: "",
        colorSnack: "success",
        email: "",
        password: "",
    }),

    methods: {
        redirectToCreateAccount() {
            this.$router.push('/resgister');
        },

        login() {
            userService.login({
                body: {
                    email: this.email,
                    password: this.password
                }
            }).then(res => {
                if (res) {
                    localStorage.setItem('jwt', res.data.accessToken);
                    localStorage.setItem('userId', res.data.userId);
                    this.$router.push('/showroom/dashboard');
                }
            }).catch(error => {
                this.colorSnack = "error";
                this.textContentSnack = "HOUVE UMA FALHA AO TENTAR FAZER LOGIN, TENTE NOVAMENTE!";
                this.snackbar = true;
                console.log(error);
            });
        },

        checkAuth() {
            userService.checkAuth({ jwt: localStorage.getItem('jwt') }).then(res => {
                if (res) {
                    console.log(res);
                    this.$router.push('/showroom/dashboard');
                }
            }).catch(error => {
                console.log(error);
                this.$router.push('/auth');
            });
        }
    },
    mounted() {
        this.checkAuth();
    }
}
</script>

<style>
.showroom {
    background: linear-gradient(to right, #808080, #404040);
}
</style>