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
}
</script>