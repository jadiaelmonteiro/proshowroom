<template>
  <v-content>
    <router-view />

    <!-- <dashboard-core-footer /> -->
    <LadingPageFooter></LadingPageFooter>
  </v-content>
</template>

<script>
export default {
  name: 'DashboardCoreView',

  components: {
    // DashboardCoreFooter: () => import('./Footer'),
    LadingPageFooter: () => import('../../../landingPage/components/Footer.vue')
  },
}
</script>
