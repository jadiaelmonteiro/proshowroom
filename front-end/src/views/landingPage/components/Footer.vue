<template>
    <!-- footer -->
    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
        <div>
            <p>LEMBRAR DE ADD AS REDES SOCIAIS DA GALERA DO GRUPO</p>
            <span v-for="icon in icons" :key="icon" :class="'mx-4 larger-icon ' + icon" variant="text"></span>
        </div>

        <div class="pt-0">
            Está página Web é para divulgação do nosso produto que se chama ProShowroom e ele é um sistema abrangente
            desenvolvido para oferecer uma plataforma unificada para a divulgação de trabalhos e produtos. Projetado para
            atender tanto profissionais independentes quanto empresas, o ProShowroom oferece uma experiência de usuário
            intuitiva e eficiente para promover seus serviços e mercadorias.
        </div>

        <div>
            {{ new Date().getFullYear() }} — <strong>Projeto integrador</strong>
        </div>
    </v-footer>
</template>

<script>

export default {
    name: 'Footer',
    props: {
        toRoute: {
            type: String,
            default: "",
        },
    },

    data: () => ({
        icons: [
            'mdi mdi-twitter',
            'mdi mdi-linkedin',
            'mdi mdi-instagram',
        ],
    }),

    computed: {
    },

    methods: {

    },
}
</script>

<style scoped>
.larger-icon {
    font-size: 30px !important;
    /* ou o tamanho desejado em pixels, em %, em em, etc. */
}
</style>