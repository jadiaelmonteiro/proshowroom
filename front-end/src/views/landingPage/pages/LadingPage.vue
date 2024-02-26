<template class="showroom">
    <div>
        <LandingPageAppBar toRoute="/auth" nameButton="LOGIN"></LandingPageAppBar>
        <v-main>
            <div>
                <v-carousel cycle style="height: 200px !important;">
                    <v-carousel-item src="../../../assets/advertisements/img-6.jpg" cover></v-carousel-item>

                    <v-carousel-item src="../../../assets/advertisements/img-5.jpg" cover></v-carousel-item>

                    <v-carousel-item src="../../../assets/advertisements/img-4.jpg" cover></v-carousel-item>
                </v-carousel>
            </div>
            <v-container fluid>
                <!-- filter of cards -->
                <div class="d-flex flex-column justify-center align-center mt-5">
                    <h1 class="text-h1 font-weight-thin text-center">
                        Busque por anúncios
                    </h1>
                    <h4 class="subheading text-center">
                        Experiência, Qualidade, ProShowroom
                    </h4>

                    <v-text-field v-model="searchTerm" append-icon="mdi-card-search" @input="filterAnnouncements()"
                        label="Pesquisar pelo nome do anúncio" color="showroom" class="mt-5" style="width: 500px;">
                    </v-text-field>
                </div>

                <v-container fluid>
                    <v-row class="d-flex justify-center" v-if="announcements.length > 0">
                        <v-col v-for="announcement in filteredAnnouncements" :key="announcement.id" lg="3">
                            <v-card class="mx-auto" max-width="300">
                                <v-carousel height="200" cycle>
                                    <v-carousel-item v-if="announcement.filePath" :src="url + announcement.filePath" cover>
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
                                    <v-btn color="showroom" @click="fillDataAnnouncements(announcement)">
                                        Dados do anúnciante
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-row class="d-flex justify-center" v-else>
                        <base-material-card color="showroom">
                            <template v-slot:heading>
                                <div class="display-1 font-weight-light">
                                    Ainda não temos anúncios publicados! Faça Login e crie seu anúncio!!
                                </div>
                            </template>
                            <v-row>
                                <v-card-text class="d-flex justify-center">
                                    <v-btn size="x-large" color="showroom" class="ml-2 text-subtitle-1" to="/auth">
                                        <v-icon>mdi-account</v-icon>
                                        LOGIN
                                    </v-btn>
                                </v-card-text>
                            </v-row>
                        </base-material-card>
                    </v-row>

                </v-container>

                <v-dialog max-width="800" v-model="dialog">
                    <template>
                        <v-container fluid id="dialogAnnouncement" tag="section">
                            <v-row justify="center">
                                <v-col cols="12">
                                    <base-material-card v-if="dialog" color="showroom mt-10">
                                        <template v-slot:heading>
                                            <div class="display-2 font-weight-light">
                                                {{ publisher.user.firstName }}
                                            </div>
                                            <div class="subtitle-1 font-weight-light">
                                                {{ publisher.title }} - {{ publisher.categorie }}
                                            </div>
                                        </template>

                                        <v-row>
                                            <v-card-text>
                                                <v-col cols="12">
                                                    <v-text-field color="showroom" label="E-mail" class="purple-input"
                                                        :value="publisher.user.email" prepend-icon="mdi-email" disabled />
                                                </v-col>

                                                <v-col cols="12">
                                                    <v-text-field prepend-icon="mdi mdi-phone"
                                                        :value="publisher.user.phone ?? 'Não cadastrado'" color="showroom"
                                                        label="Número" class="purple-input" disabled />
                                                </v-col>

                                                <v-col cols="12">
                                                    <v-text-field prepend-icon="mdi mdi-clock"
                                                        :value="formatDate(publisher.updatedAt)" color="showroom"
                                                        label="Publicado" class="purple-input" disabled />
                                                </v-col>
                                            </v-card-text>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="showroom" @click="closeDialog()">Fechar</v-btn>
                                            </v-card-actions>
                                        </v-row>
                                    </base-material-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </template>
                </v-dialog>
            </v-container>
        </v-main>
        <LadingPageFooter></LadingPageFooter>
    </div>
</template>
  
<script>
import announcementService from '../../../services/announcementService';
const config = require('../../../config.js');
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
        dialog: false,
        publisher: [],
        url: config.urlBase
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
        },
        fillDataAnnouncements(data) {
            this.dialog = true;
            this.publisher = data;
            console.log(this.publisher);
        },

        closeDialog() {
            this.dialog = false;
        },
        formatDate(dateString) {
            const date = new Date(dateString);
            const formattedDate = this.formatWithZeroPadding(date.getDate()) +
                '/' + this.formatWithZeroPadding(date.getMonth() + 1) +
                '/' + date.getFullYear() +
                ' ' + this.formatWithZeroPadding(date.getHours()) +
                ':' + this.formatWithZeroPadding(date.getMinutes()) +
                ':' + this.formatWithZeroPadding(date.getSeconds());

            return formattedDate;
        },
        formatWithZeroPadding(value) {
            return value.toString().padStart(2, '0');
        },

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

  