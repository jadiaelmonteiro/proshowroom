<template>
    <v-container fluid>
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
                        <v-select clearable color="showroom" prepend-icon="mdi-text-box-edit"
                            v-model="dataForm.productState" label="Estado do produto" :items="productState">
                        </v-select>
                    </v-col>
                </v-row>

                <v-col cols="12" class="text-right">
                    <v-btn color="showroom" class="mr-0" @click="sendForm()" :disabled="dataForm.name === ''
                        || dataForm.description === ''
                        || dataForm.value === ''
                        || dataForm.categorie === ''
                        || dataForm.categorie == null">
                        Atualizar perfil
                    </v-btn>
                </v-col>

            </v-form>
        </base-material-card>
    </v-container>
</template>
<script>
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
            productState: ""
        },
        categorie: [
            'Serviços em geral',
            'Eletrodomésticos',
            'Jogos Eletrônicos',
            'Jogos de Tabuleiro',
            'Moda',
            'Saúde e Beleza',
            'Alimentação',
            'Tecnologia'
        ],
        productState: [
            'Novo',
            'Usado',
            'Semi-novo',
        ]
    }),
    watch: {
    },
    methods: {
        sendForm() {
            console.log(this.dataForm);
        }
    },
    created() {
        console.log("criado");
    },
    mounted() {
        console.log("montado");
    }
}
</script>
<style>
.showroom {
    background: linear-gradient(to right, #808080, #404040);
}
</style>