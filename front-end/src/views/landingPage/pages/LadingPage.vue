<template class="showroom">
    <div>
        <LandingPageAppBar toRoute="/auth" nameButton="LOGIN"></LandingPageAppBar>
        <v-main>
            <div>
                <v-carousel cycle>
                    <v-carousel-item src="../../../assets/advertisements/img-6.jpg" cover></v-carousel-item>

                    <v-carousel-item src="../../../assets/advertisements/img-5.jpg" cover></v-carousel-item>

                    <v-carousel-item src="../../../assets/advertisements/img-4.jpg" cover></v-carousel-item>
                </v-carousel>
            </div>
            <v-container fluid>
                <!-- filter of cards -->
                <div class="d-flex flex-column justify-center align-center mt-5">
                    <h1 class="text-h1 font-weight-thin text-center" style="color: black;">
                        Busque por produtos
                    </h1>
                    <h4 class="subheading text-center" style="color: black;">
                        Experiência, Qualidade, ProShowroom
                    </h4>

                    <v-text-field label="Pesquisar anúncio" color="showroom" class="mt-5" style="width: 500px;">
                        <template v-slot:append-outer>
                            <v-btn class="mt-n2" elevation="1" fab small>
                                <v-icon>mdi-magnify</v-icon>
                            </v-btn>
                        </template>
                    </v-text-field>
                </div>

                <v-row>
                    <v-container fluid>
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
                                    Visualizar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-container>
                </v-row>
            </v-container>
        </v-main>
        <LadingPageFooter></LadingPageFooter>
    </div>
</template>
  
<script>
export default {
    name: 'LadingPage',
    components: {
        LandingPageAppBar: () => import('../components/AppBar.vue'),
        LadingPageFooter: () => import('../components/Footer.vue')
    },

    data: () => ({
        menu: false,
        titlePage: "Lading Page para teste BB",
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

  