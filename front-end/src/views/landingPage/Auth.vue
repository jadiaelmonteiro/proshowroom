<template>
    <v-app>
        <auth-page />
    </v-app>
</template>

<script>
export default {
    name: 'Auth',

    components: {
        AuthPage: () => import('./pages/AuthPage.vue'),
    },

    data: () => ({
        titlePage: "Lading Page para teste BB"
    }),
}
</script>