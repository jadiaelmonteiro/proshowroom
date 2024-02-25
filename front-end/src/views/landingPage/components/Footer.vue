<template>
    <!-- footer -->
    <v-footer class="bg-indigo-lighten-1 flex-column text-center">
        <v-container fluid>
            <v-row class="d-flex justify-center">
                <div v-for="item in team" class="mt-2">
                    <v-btn :href="item.link" target="_blank" color="showroom">
                        <v-icon :class="'larger-icon ' + item.icon" variant="text">
                        </v-icon>
                        {{ item.name }}
                    </v-btn>
                </div>
            </v-row>
        </v-container>
        <div class="mt-2">
            Está página Web é para divulgação do nosso projeto que se chama ProShowroom e ele é um sistema abrangente
            desenvolvido para oferecer uma plataforma unificada para a divulgação de trabalhos e produtos.
        </div>

        <div>
            Desenvolvido em fevereiro de 2024 — <strong>Projeto integrador</strong>
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
        team: [
            {
                name: 'Dayane Ferreira',
                link: 'https://www.linkedin.com/in/dayane-s-ferreira?trk=contact-info',
                icon: 'mdi mdi-linkedin'
            },
            {
                name: 'Enoque Canazza',
                link: 'https://www.linkedin.com/in/enoque-canazza',
                icon: 'mdi mdi-linkedin'
            },
            {
                name: 'Gabriela Kosmalski',
                link: 'https://www.linkedin.com/in/gabriela-kosmalski-32aaa3187?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                icon: 'mdi mdi-linkedin'
            },
            {
                name: 'Jadiael Monteiro',
                link: 'https://www.linkedin.com/in/jadiael-monteiro',
                icon: 'mdi mdi-linkedin'
            },
            {
                name: 'Larissa Carolina',
                link: 'https://www.linkedin.com/in/larissa-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                icon: 'mdi mdi-linkedin'
            },
            {
                name: 'Lucas Simião',
                link: 'https://www.linkedin.com/in/lucas-simi%C3%A3o-b4b619212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                icon: 'mdi mdi-linkedin'
            },
            {
                name: 'Marcicleide Olimpio',
                link: 'https://www.linkedin.com/in/marcicleide-olimpio-2a66ba21b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                icon: 'mdi mdi-linkedin'
            },
        ]
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
}

.showroom {
    background: linear-gradient(to right, #808080, #404040);
}
</style>