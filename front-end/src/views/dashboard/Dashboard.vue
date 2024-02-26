<template>
  <v-container fluid id="dashboard" tag="section">
    <v-row justify="center">
      <base-material-snackbar v-model="snackbar" :type="colorSnack" top center>
        Aviso: <span class="font-weight-bold">&nbsp;{{ textContentSnack }}&nbsp;</span>
      </base-material-snackbar>
      <v-col cols="12">
        <base-material-card color="showroom">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Dashboards
            </div>
            <div class="subtitle-1 font-weight-light">
              Visualização de métricas
            </div>
          </template>

          <v-row>
            <v-col cols="12" sm="6">
              <base-material-stats-card color="info" icon="mdi mdi-counter" title="Total de anúncios"
                :value="dashboardData.totalAnnouncements ? dashboardData.totalAnnouncements.toString() : '0'"
                sub-icon="mdi-clock" sub-text="Última publicação" />
            </v-col>

            <v-col cols="12" sm="6">
              <base-material-stats-card color="primary" icon="mdi mdi-currency-brl"
                title="Somatório dos valores dos anúncios"
                :value="formatNumberForReal(dashboardData.totalAnnouncementsValue ?? '0')" sub-icon="mdi-clock"
                sub-text="Última publicação" />
            </v-col>
          </v-row>
        </base-material-card>
      </v-col>

      <v-col cols="12">
        <base-material-card color="showroom">
          <template v-slot:heading>
            <div v-if="announcements.length > 0" class="display-2 font-weight-light">
              Meus Anúncios
            </div>
            <div v-else class="display-2 font-weight-light">
              Você não tem anúncios
            </div>
          </template>

          <v-container fluid>

            <v-row class="d-flex justify-center" v-if="announcements.length > 0">
              <v-col v-for="announcement in announcements" :key="announcement.id" lg="3">
                <v-card class="mx-auto" max-width="300">
                  <v-carousel height="200" cycle>
                    <v-carousel-item v-if="announcement.filePath" :src="url + announcement.filePath" cover>
                    </v-carousel-item>
                    <v-carousel-item v-else src="../../assets/advertisements/img-6.jpg" contain>
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
                    <v-btn color="error" @click="deleteAnnouncement(announcement.id)">
                      <v-icon>mdi-delete</v-icon>
                      Excluir
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>

            <v-row class="d-flex justify-center" v-else>
              <template>
                <div>
                  <div>
                    <v-btn color="showroom" to="pages/announcement">
                      Criar Anúncio
                    </v-btn>
                  </div>
                </div>
              </template>
            </v-row>
          </v-container>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import announcementService from '../../services/announcementService';
const config = require('../../config.js');
export default {
  name: 'DashboardDashboard',

  data() {
    return {
      dashboardData: [],
      announcements: [],
      jwt: localStorage.getItem('jwt') ?? '',
      userId: localStorage.getItem('userId') ?? '',
      textContentSnack: "",
      colorSnack: "success",
      snackbar: false,
      url: config.urlBase,
    }
  },

  methods: {

    getDataDasboard() {
      announcementService.getDataDashboard({
        jwt: this.jwt,
        userId: this.userId
      }).then(response => {
        this.dashboardData = response;
      }).catch(error => {
        console.log(error);
      })
    },

    getAnnouncements() {
      announcementService.getByUserId({
        jwt: this.jwt,
        userId: this.userId
      }).then(response => {
        this.announcements = response;
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

    deleteAnnouncement(id) {
      if (id) {
        announcementService.deleteById({
          jwt: this.jwt,
          id: id
        }).then(response => {
          if (response.deletedAnnouncement) {
            this.getDataDasboard();
            this.getAnnouncements();
            this.textContentSnack = "ANÚNCIO EXCLUÍDO COM SUCESSO!";
            this.colorSnack = "success";
            this.snackbar = true;
          } else {
            this.textContentSnack = "HOUVE UM PROBLEMA!";
            this.colorSnack = "error";
            this.snackbar = true;
          }

        }).catch(response => {
          console.log(response);
          this.textContentSnack = "HOUVE UM PROBLEMA!";
          this.colorSnack = "error";
          this.snackbar = true;
        })
      }
    }
  },
  mounted() {
    this.getDataDasboard();
    this.getAnnouncements();
  }
}
</script>

<style>
.showroom {
  background: linear-gradient(to right, #808080, #404040);
}
</style>
