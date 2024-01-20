<template>
    <!-- footer -->
    <v-footer foxed class="mt-10" id="dashboard-core-footer">
        <v-container>
            <v-row align="center" no-gutters>
                <v-col v-for="(link, i) in links" :key="i" class="text-center mb-sm-0 mb-5" cols="auto">
                    <a :href="link.href" class="mr-0" style="color: black;" rel="noopener" target="_blank"
                        v-text="link.text" />
                </v-col>

                <v-spacer class="hidden-sm-and-down" />

                <v-col cols="12" md="auto">
                    <div class="body-1 font-weight-light pt-6 pt-md-0 text-center" style="color: azure;">
                        &copy; 2023, feito com
                        <v-icon size="18">
                            mdi-heart
                        </v-icon>
                        por <a href="https://www.creative-tim.com">Grupo do Projeto Integrador</a> Faculdade SENAC.
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>

export default {
    name: 'LadingPageFooter',

    props: {
        toRoute: {
            type: String,
            default: "",
        },
    },

    data: () => ({
        links: [
            {
                href: '#',
                text: 'Obeter mais informações',
            },
            {
                href: '#',
                text: 'Redes sociais',
            },
            {
                href: '#',
                text: 'Blog',
            },
        ],
    }),

    computed: {
    },

    methods: {

    },
}
</script>