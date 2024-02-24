<template class="showroom">
    <div>
        <LandingPageAppBar toRoute="/auth" nameButton="LOGIN"></LandingPageAppBar>
        <v-main>
            <div>
                <v-carousel cycle style="height: 250px !important;">
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

                <v-container fluid>
                    <v-row>
                        <v-col v-for="announcement in announcements" :key="announcement.id" lg="3">
                            <v-card class="mx-auto" max-width="300">
                                <v-carousel height="200" cycle>
                                    <v-carousel-item src="../../../assets/advertisements/img-6.jpg" cover></v-carousel-item>
                                </v-carousel>
                                <v-card-subtitle class="pt-4" style="font-weight: bold;">
                                    {{ announcement.title }}
                                </v-card-subtitle>
                                <v-card-text>
                                    <p>
                                        {{ formatNumberForReal(announcement.value) }}
                                    </p>
                                    <div>{{ announcement.description }}</div>
                                </v-card-text>
                                <v-card-actions class="d-flex justify-center">
                                    <v-btn color="showroom">
                                        Visualizar
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>

            </v-container>
        </v-main>
        <LadingPageFooter></LadingPageFooter>
    </div>
</template>
  
<script>
import announcementService from '../../../services/announcementService';

export default {
    name: 'LadingPage',
    components: {
        LandingPageAppBar: () => import('../components/AppBar.vue'),
        LadingPageFooter: () => import('../components/Footer.vue')
    },

    data: () => ({
        announcements: []
    }),
    watch: {
    },
    methods: {
        getAll() {
            announcementService.getAll().then(response => {
                if (response) {
                    this.announcements = response;
                }
                console.log(this.announcements);
            }).catch(error => {
                console.log(error);
            })
        },

        formatNumberForReal(numberInString) {
            const number = parseFloat(numberInString);
            if (isNaN(number)) {
                console.error('Número inválido');
                return numberInString;
            }

            const formattedNumber = number.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
            });

            return formattedNumber;
        }
    },
    mounted() {
        this.getAll();
    },
}
</script>

<style>
.custom-btn {
    background-color: #ffffff;
}

.showroom {
    background: linear-gradient(to right, #808080, #404040);
}
</style>

  