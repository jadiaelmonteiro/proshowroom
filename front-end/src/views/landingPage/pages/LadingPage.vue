<template class="showroom">
    <div>
        <LadingPageAppBar toRoute="/auth"></LadingPageAppBar>
        <v-main>
            <v-container fluid>
                <div>
                    <v-carousel height="400" cycle>
                        <v-carousel-item src="../../../assets/advertisements/img-6.jpg" cover></v-carousel-item>

                        <v-carousel-item src="../../../assets/advertisements/img-5.jpg" cover></v-carousel-item>

                        <v-carousel-item src="../../../assets/advertisements/img-4.jpg" cover></v-carousel-item>
                    </v-carousel>
                </div>

                <!-- filter of cards -->

                <div class="d-flex flex-column justify-center align-center mt-5">
                    <h1 class="text-h1 font-weight-thin" style="color: black;">
                        Busque por produtos
                    </h1>
                    <h4 class="subheading" style="color: black;">
                        Experiência, Qualidade, ProShowroom
                    </h4>

                    <v-text-field :label="$t('Pesquisar anúncio')" color="secondary" class="mt-5" style="width: 500px;">
                        <template v-slot:append-outer>
                            <v-btn class="mt-n2" elevation="1" fab small>
                                <v-icon>mdi-magnify</v-icon>
                            </v-btn>
                        </template>
                    </v-text-field>
                </div>

                <div>
                    <v-row>
                        <!-- cards of products -->
                        <v-card class="mx-auto" max-width="400">
                            <v-carousel height="200" cycle>
                                <v-carousel-item src="../../../assets/advertisements/img-6.jpg" cover></v-carousel-item>

                                <v-carousel-item src="../../../assets/advertisements/img-5.jpg" cover></v-carousel-item>

                                <v-carousel-item src="../../../assets/advertisements/img-4.jpg" cover></v-carousel-item>
                            </v-carousel>

                            <v-card-subtitle class="pt-4">
                                Number 10
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Whitehaven Beach</div>

                                <div>Whitsunday Island, Whitsunday Islands</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="primary" class="aling-center">
                                    Share
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                        <v-card class="mx-auto" max-width="400">

                            <v-img class="align-end text-white" height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                                <v-card-title>Top 10 Australian beaches</v-card-title>
                            </v-img>

                            <v-card-subtitle class="pt-4">
                                Number 10
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Whitehaven Beach</div>

                                <div>Whitsunday Island, Whitsunday Islands</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="orange">
                                    Share
                                </v-btn>

                                <v-btn color="orange">
                                    Explore
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-row>
                </div>
            </v-container>
        </v-main>


        <!-- footer -->
        <v-footer foxed class="mt-10" id="dashboard-core-footer">
            <v-container>
                <v-row align="center" no-gutters>
                    <v-col v-for="(link, i) in links" :key="i" class="text-center mb-sm-0 mb-5" cols="auto">
                        <a :href="link.href" class="mr-0" style="color: black;" rel="noopener" target="_blank"
                            v-text="link.text" />
                    </v-col>

                    <v-spacer class="hidden-sm-and-down" />

                    <v-col cols="12" md="auto">
                        <div class="body-1 font-weight-light pt-6 pt-md-0 text-center" style="color: azure;">
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
    name: 'LadingPage',
    components: {
        LadingPageAppBar: () => import('../components/AppBar.vue'),
    },

    data: () => ({
        menu: false,
        titlePage: "Lading Page para teste BB",
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
    watch: {
    },
    methods: {

    },
    mounted() {
    },


}
</script>


/* Seletor mais específico */
<style>
.custom-btn {
    background-color: #ffffff;
}

.showroom {
    background: linear-gradient(to right, #808080, #404040);
}
</style>

  