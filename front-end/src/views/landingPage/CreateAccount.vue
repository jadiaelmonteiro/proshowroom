<template>
    <v-app>
        <AccountPage />
    </v-app>
</template>

<script>
export default {
    name: 'LandingPageCreateAccount',

    components: {
        AccountPage: () => import('./pages/Account.vue'),
    },
}
</script>