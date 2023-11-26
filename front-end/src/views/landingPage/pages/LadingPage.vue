<template>
    <div>
        <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">

            <v-img class="mx-auto" height="150" max-width="150" elevation="1" :aspect-ratio="1"
                src="../../../assets/logo/logo_transparent.png"></v-img>
            <v-spacer />

            <v-text-field :label="$t('Pesquisar anúncio')" color="secondary" hide-details style="max-width: 165px;">
                <template v-if="$vuetify.breakpoint.mdAndUp" v-slot:append-outer>
                    <v-btn class="mt-n2" elevation="1" fab small>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </template>
            </v-text-field>

            <v-btn class="ml-2" min-width="0" text to="/teste">
                <v-icon>mdi-view-dashboard</v-icon>
            </v-btn>

            <v-btn class="ml-2" min-width="0" text to="/teste">
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-app-bar>

        <v-carousel height="400">
            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
        </v-carousel>

        <div class="d-flex flex-column justify-center align-center text-white">
            <h1 class="text-h1 font-weight-thin">
                Busque por produtos
            </h1>
            <h4 class="subheading">
                Experiência, Qualidade, ProShowroom
            </h4>
        </div>

        <div>
            <v-row>
                <v-card class="mx-auto" max-width="400">
                    <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        cover>
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

                <v-card class="mx-auto" max-width="400">

                    <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        cover>
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




    </div>
</template>
  
<script>
export default {
    name: 'LadingPage',

    data: () => ({
        menu: false,
        titlePage: "Lading Page para teste BB"
    }),
}
</script>

<style scoped>
/* Seletor mais específico */
.v-app-bar .logo-teste {
    width: 5px;
    height: 5px;
}
</style>
  