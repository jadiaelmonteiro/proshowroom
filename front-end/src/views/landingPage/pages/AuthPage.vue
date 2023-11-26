<template>
    <div>
        <v-app-bar class="mb-10" id="app-bar" absolute app color="transparent" flat height="75">

            <v-img class="mx-auto" rounded="lg" height="150" max-width="150" elevation="1" :aspect-ratio="1"
                src="../../../assets/logo/logo_transparent.png"></v-img>
            <v-spacer />

            <v-btn size="x-large" variant="flat" class="ml-2 text-subtitle-1" min-width="0" text to="/"
                style="background-color: azure;">
                ANÚNCIOS
            </v-btn>
        </v-app-bar>

        <v-carousel height="400" cycle>
            <v-carousel-item src="../../../assets/advertisements/img-6.jpg" cover></v-carousel-item>

            <v-carousel-item src="../../../assets/advertisements/img-5.jpg" cover></v-carousel-item>

            <v-carousel-item src="../../../assets/advertisements/img-4.jpg" cover></v-carousel-item>
        </v-carousel>

        <!-- Login content -->

        <v-container id="user-profile" fluid tag="section" class="mt-10">
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <base-material-card>
                        <template v-slot:heading>
                            <div class="display-2 font-weight-light">
                                Realizar login
                            </div>

                            <div class="subtitle-1 font-weight-light">
                                Acessar com e-mail e senha
                            </div>
                        </template>

                        <v-form>
                            <v-container class="py-0">
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <v-text-field label="E-mail" class="purple-input" />
                                    </v-col>

                                    <v-col cols="12" md="12">
                                        <v-text-field label="Senha de acesso" class="purple-input" type=password />
                                    </v-col>

                                    <v-col cols="12" class="text-right">
                                        <v-btn color="success" class="mr-5">
                                            Entrar
                                        </v-btn>
                                        <v-btn class="mr-0">
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


        <v-footer id="dashboard-core-footer">
            <v-container>
                <v-row align="center" no-gutters>
                    <v-col v-for="(link, i) in links" :key="i" class="text-center mb-sm-0 mb-5" cols="auto">
                        <a :href="link.href" class="mr-0" rel="noopener" target="_blank" v-text="link.text" />
                    </v-col>

                    <v-spacer class="hidden-sm-and-down" />

                    <v-col cols="12" md="auto">
                        <div class="body-1 font-weight-light pt-6 pt-md-0 text-center">
                            &copy; 2023, feito com
                            <v-icon size="18">
                                mdi-heart
                            </v-icon>
                            por <a href="https://www.creative-tim.com">Grupo do Projeto Integrador</a> Faculdade SENAC.
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </div>
</template>
<script>
export default {
    name: 'AuthPage',
    data: () => ({
        links: [
            {
                href: '#',
                text: 'Obeter mais informações',
            },
            {
                href: '#',
                text: 'Redes sociais',
            },
            {
                href: '#',
                text: 'Blog',
            },
        ],
    }),

    methods: {
    },
}
</script>