<template class="showroom">
    <div>
        <LandingPageAppBar toRoute="/auth" nameButton="LOGIN"></LandingPageAppBar>
        <v-main>
            <v-container fluid>
                <!-- Create account content -->
                <v-container id="user-profile" fluid tag="section" class="mt-10">
                    <v-row justify="center">
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

                                <v-form type="submit">
                                    <v-container class="py-0">
                                        <v-row>
                                            <v-col cols="12" md="12" lg="6">
                                                <v-text-field color="showroom" label="Nome" class="purple-input" type=text
                                                    required />
                                            </v-col>

                                            <v-col cols="12" md="12" lg="6">
                                                <v-text-field color="showroom" label="Sobre nome" class="purple-input"
                                                    type=text />
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field color="showroom" label="E-mail" class="purple-input" required
                                                    type="email" />
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field color="showroom" label="Senha de acesso" class="purple-input"
                                                    type=password required />
                                            </v-col>
                                            <v-col cols="12" md="12">
                                                <v-text-field color="showroom" label="Confirmar senha de acesso"
                                                    class="purple-input" type=password required />
                                            </v-col>

                                            <v-col cols="12" class="text-center">
                                                <v-btn color="showroom">
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
    name: 'AccountPage',
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