<template class="showroom">
    <div>
        <LandingPageAppBar toRoute="/" nameButton="ANUNCIOS"></LandingPageAppBar>
        <v-main>
            <v-container fluid>
                <!-- Login content -->
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
                                                <v-text-field label="E-mail" class="purple-input" required
                                                    color="showroom" />
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field label="Senha de acesso" class="purple-input" type=password
                                                    required color="showroom" />
                                            </v-col>

                                            <v-col cols="12" class="text-center">
                                                <v-btn color="showroom">
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
export default {
    name: 'AuthPage',
    components: {
        LandingPageAppBar: () => import('../components/AppBar.vue'),
        LadingPageFooter: () => import('../components/Footer.vue')
    },
    data: () => ({

    }),

    methods: {
        redirectToCreateAccount() {
            this.$router.push('/resgister');
        }
    },
}
</script>

<style>
.showroom {
    background: linear-gradient(to right, #808080, #404040);
}
</style>