<template>
    <v-app>
        <landing-page />
    </v-app>
</template>

<script>
export default {
    name: 'LandingPageIndex',

    components: {
        LandingPage: () => import('./pages/LadingPage.vue'),
    },

    data: () => ({
        titlePage: "Lading Page para teste BB"
    }),
}
</script>