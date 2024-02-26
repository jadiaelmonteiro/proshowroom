<template>
    <v-container fluid>
        <base-material-snackbar v-model="snackbar" :type="colorSnack" top center>
            Aviso: <span class="font-weight-bold">&nbsp;{{ textContentSnack }}&nbsp;</span>
        </base-material-snackbar>
        <base-material-card color="showroom">
            <template v-slot:heading>
                <div class="display-2 font-weight-light">
                    Crie seu anúncio
                </div>

                <div class="subtitle-1 font-weight-light">
                    Os campos obrigatórios são *
                </div>
            </template>
            <v-form>
                <v-row>
                    <v-col cols="12">
                        <v-text-field v-model="dataForm.title" prepend-icon="mdi-text-box-edit" color="showroom"
                            class="purple-input" label="Título *" type="text" :rules="validateRules" />
                    </v-col>
                    <v-col cols="12">
                        <v-textarea v-model="dataForm.description" rows="1" prepend-icon="mdi-text-box-edit"
                            color="showroom" label="Descrição *" :rules="validateRules"></v-textarea>
                    </v-col>
                    <v-col cols="12">
                        <v-file-input v-model="dataForm.img" color="showroom" label="Imagem do anúncio" accept="image/*">
                        </v-file-input>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field v-model="dataForm.value" prepend-icon="mdi mdi-currency-brl" color="showroom"
                            class="purple-input" label="Valor *" type="number" :rules="validateRules" />
                    </v-col>
                    <v-col cols="12">
                        <v-select clearable color="showroom" prepend-icon="mdi-text-box-edit" v-model="dataForm.categorie"
                            label="Escolha uma categoria *" :items="categorie" :rules="validateRules">
                        </v-select>
                        <v-card color="surface-variant" variant="tonal">
                            <v-card-text class="text-medium-emphasis text-caption">
                                Categoria: Escolha a área que melhor descreve seu produto ou serviço. Por exemplo: Serviços
                                em geral, Eletrodomésticos, Jogos Eletrônicos, Jogos de Tabuleiro, Moda, Saúde e Beleza,
                                Alimentação, Tecnologia, entre outros. Escolha a opção que melhor se alinha com a natureza
                                do que você está oferecendo.
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12">
                        <v-select clearable color="showroom" prepend-icon="mdi-text-box-edit" v-model="dataForm.state"
                            label="Tipo do produto/Serviço" :items="productState">
                        </v-select>
                    </v-col>
                </v-row>

                <v-col cols="12" class="text-right">
                    <v-btn color="showroom" class="mr-0" @click="createAnnoucement()" :disabled="dataForm.name === ''
                        || dataForm.description === ''
                        || dataForm.value === ''
                        || dataForm.categorie === ''
                        || dataForm.categorie == null">
                        Criar Anúncio
                    </v-btn>
                </v-col>

            </v-form>
        </base-material-card>
    </v-container>
</template>
<script>

import announcementService from '../../../services/announcementService';

export default {
    data: () => ({
        validateRules: [
            (value) => !!value || 'Por favor, preencha algo.',
        ],
        dataForm: {
            title: "",
            description: "",
            img: [],
            value: "",
            categorie: "",
            state: "",
            userId: localStorage.getItem('userId') ?? ""
        },
        categorie: [
            'Alimentação',
            'Eletrodomésticos',
            'Instrumentos Musicais',
            'Jogos Eletrônicos',
            'Jogos de Tabuleiro',
            'Moda',
            'Serviços em geral',
            'Saúde e Beleza',
            'Tecnologia',
        ],
        productState: [
            'Novo',
            'Usado',
            'Semi-novo',
            'Serviços'
        ],
        textContentSnack: "",
        colorSnack: "success",
        snackbar: false,
        jwt: localStorage.getItem('jwt') ?? ""
    }),

    watch: {
        'dataForm.img': function (value) {
            if (value && typeof value === 'object' && value.type) {
                if (!value.type.startsWith('image')) {
                    this.textContentSnack = "ARQUIVO DEVE SER DO TIPO IMAGEM!";
                    this.colorSnack = "error";
                    this.snackbar = true;
                    this.dataForm.img = [];
                }
            }
        }
    },

    methods: {
        createAnnoucement() {
            announcementService.create({
                jwt: this.jwt,
                body: this.dataForm
            }).then(
                response => {
                    this.textContentSnack = "ANÚNCIO PUBLICADO!";
                    this.colorSnack = "success";
                    this.snackbar = true;
                    if (this.dataForm.img != null && this.dataForm.img.name) {
                        this.updateFilePath(response.id);
                    } else {
                        this.clearDataForm();
                    }
                }
            ).catch(error => {
                this.textContentSnack = "FALHA AO CRIAR ANÚNCIO!";
                this.colorSnack = "error";
                this.snackbar = true;
                console.log(error);
            });
        },

        updateFilePath(id) {
            if (this.dataForm.img) {
                announcementService.updateFile({
                    jwt: this.jwt,
                    id: id,
                    file: this.dataForm.img,
                }).then(response => {
                    console.log(response);
                    this.clearDataForm();
                }).catch(error => {
                    console.log(error);
                });
            }
        },
        clearDataForm() {
            this.dataForm.title = "";
            this.dataForm.description = "";
            this.dataForm.img = [];
            this.dataForm.value = "";
            this.dataForm.state = "";
            this.dataForm.categorie = "";
        },
    },
    created() {
    },
    mounted() {
    }
}
</script>
<style>
.showroom {
    background: linear-gradient(to right, #808080, #404040);
}
</style>