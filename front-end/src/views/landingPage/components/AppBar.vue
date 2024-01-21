<template>
    <v-app-bar color="showroom" id="app-bar" absolute app flat height="75">
        <v-img class="" rounded="lg" max-height="100" max-width="120" elevation="1" :aspect-ratio="1"
            src="../../../assets/logo/logo_transparent.png"></v-img>
        <v-spacer />
        <v-btn size="x-large" color="white" variant="flat" class="ml-2 text-subtitle-1" min-width="0" text :to="toRoute">
            <v-icon>mdi-account</v-icon>
            {{ nameButton }}
        </v-btn>
    </v-app-bar>
</template>
  
<script>

export default {
    name: 'AppBar',

    props: {
        toRoute: {
            type: String,
            default: "",
        },
        nameButton: {
            type: String,
            default: "",
        }
    },

    data: () => ({

    }),

    computed: {
    },

    methods: {

    },
}
</script>
  