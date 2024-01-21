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
}
</script>