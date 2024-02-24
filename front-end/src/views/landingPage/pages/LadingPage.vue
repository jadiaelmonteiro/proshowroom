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
                        Busque por anúncios
                    </h1>
                    <h4 class="subheading text-center" style="color: black;">
                        Experiência, Qualidade, ProShowroom
                    </h4>

                    <v-text-field v-model="searchTerm" append-icon="mdi mdi-card-search" @input="filterAnnouncements()"
                        label="Pesquisar por nome" color="showroom" class="mt-5" style="width: 500px;">
                    </v-text-field>
                </div>

                <v-container fluid>
                    <v-row class="d-flex justify-center">
                        <v-col v-for="announcement in filteredAnnouncements" :key="announcement.id" lg="3">
                            <v-card class="mx-auto" max-width="300">
                                <v-carousel height="200" cycle>
                                    <v-carousel-item v-if="announcement.filePath"
                                        :src="'http://127.0.0.1:8080/back-end/' + announcement.filePath" cover>
                                    </v-carousel-item>
                                    <v-carousel-item v-else src="../../../assets/advertisements/img-6.jpg" cover>
                                    </v-carousel-item>
                                </v-carousel>
                                <v-card-subtitle class="pt-4" style="font-weight: bold;">
                                    {{ announcement.title }}
                                </v-card-subtitle>
                                <v-card-text>
                                    <div>{{ formatNumberForReal(announcement.value) }}</div>
                                    <div>{{ announcement.description }}</div>
                                    <div>{{ announcement.categorie }} - {{ announcement.state }}</div>
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
        announcements: [],
        searchTerm: '',
        filteredAnnouncements: [],
    }),
    watch: {
    },
    methods: {
        getAll() {
            announcementService.getAll().then(response => {
                if (response) {
                    this.announcements = response;
                    this.filteredAnnouncements = response;
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
        },
        filterAnnouncements() {
            if (this.announcements.length > 0) {
                const filtered = this.announcements.filter(announcement =>
                    announcement.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
                if (filtered.length > 0) {
                    this.filteredAnnouncements = filtered;
                } else {
                    this.filteredAnnouncements = this.announcements;
                }
            }
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

  