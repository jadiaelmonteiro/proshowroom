<template>
    <v-app-bar color="showroom" id="app-bar" absolute app flat height="75">
        <v-img class="mx-auto" rounded="lg" height="150" max-width="150" elevation="1" :aspect-ratio="1"
            src="../../../assets/logo/logo_transparent.png"></v-img>
        <v-spacer />
        <v-btn size="x-large" color="white" variant="flat" class="ml-2 text-subtitle-1" min-width="0" text :to="toRoute">
            <v-icon>mdi-account</v-icon>
            ANUNCIAR
        </v-btn>
    </v-app-bar>
</template>
  
<script>

export default {
    name: 'LandingPageAppBar',

    props: {
        toRoute: {
            type: String,
            default: "",
        },
    },

    data: () => ({

    }),

    computed: {
    },

    methods: {

    },
}
</script>
  