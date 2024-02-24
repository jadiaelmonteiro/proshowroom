<template>
  <v-container fluid id="dashboard" tag="section">
    <v-row justify="center">
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
            <v-col cols="12" sm="6" lg="3">
              <base-material-stats-card color="info" icon="mdi mdi-counter" title="Total de anúncios"
                :value="dashboardData.totalAnnouncements" sub-icon="mdi-clock" sub-text="Última publicação" />
            </v-col>

            <v-col cols="12" sm="6" lg="3">
              <base-material-stats-card color="primary" icon="mdi mdi-currency-brl"
                title="Somatório dos valores dos anúncios"
                :value="formatNumberForReal(dashboardData.totalAnnouncementsValue)" sub-icon="mdi-clock"
                sub-text="Última publicação" />
            </v-col>
          </v-row>
        </base-material-card>
      </v-col>

      <!-- <v-col cols="12" lg="4">
        <base-material-chart-card :data="dailySalesChart.data" :options="dailySalesChart.options" color="success"
          hover-reveal type="Line">
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" color="info" icon v-on="on">
                  <v-icon color="info">
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" light icon v-on="on">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Daily Sales
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            <v-icon color="green" small>
              mdi-arrow-up
            </v-icon>
            <span class="green--text">55%</span>&nbsp;
            increase in today's sales
          </p>

          <template v-slot:actions>
            <v-icon class="mr-1" small>
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
          </template>
        </base-material-chart-card>
      </v-col> -->

      <!-- <v-col cols="12" md="6">
        <base-material-card color="warning" class="px-5 py-3">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Employees Stats
            </div>

            <div class="subtitle-1 font-weight-light">
              New employees on 15th September, 2016
            </div>
          </template>
          <v-card-text>
            <v-data-table :headers="headers" :items="items" />
          </v-card-text>
        </base-material-card>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import announcementService from '../../services/announcementService';
export default {
  name: 'DashboardDashboard',

  data() {
    return {
      dashboardData: []
    }
  },

  methods: {
    getDataDasboard() {
      announcementService.getDataDashboard({
        jwt: localStorage.getItem('jwt'),
        userId: localStorage.getItem('userId')
      }).then(response => {
        this.dashboardData = response;
        console.log(this.dashboardData);
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
  },
  mounted() {
    this.getDataDasboard();
  }
}
</script>

<style>
.showroom {
  background: linear-gradient(to right, #808080, #404040);
}
</style>
