<template class="showroom">
    <div>
        <LandingPageAppBar toRoute="/"></LandingPageAppBar>
        <v-main>
            <v-container fluid>
                <v-carousel height="400" cycle>
                    <v-carousel-item src="../../../assets/advertisements/img-6.jpg" cover></v-carousel-item>

                    <v-carousel-item src="../../../assets/advertisements/img-5.jpg" cover></v-carousel-item>

                    <v-carousel-item src="../../../assets/advertisements/img-4.jpg" cover></v-carousel-item>
                </v-carousel>

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
                                            <v-col cols="12" md="12" lg="6">
                                                <v-text-field label="Nome" class="purple-input" type=text />
                                            </v-col>

                                            <v-col cols="12" md="12" lg="6">
                                                <v-text-field label="Sobre nome" class="purple-input" type=text />
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field label="E-mail" class="purple-input" required />
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field label="Senha de acesso" class="purple-input" type=password
                                                    required />
                                            </v-col>

                                            <v-col cols="12" class="text-right">
                                                <v-btn color="showroom" class="mr-5">
                                                    Entrar
                                                </v-btn>
                                                <v-btn color="info" class="mr-0">
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
    },
}
</script>

<style>
.showroom {
    background: linear-gradient(to right, #808080, #404040);
}
</style>