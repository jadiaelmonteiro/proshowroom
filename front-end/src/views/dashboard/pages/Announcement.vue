<template>
    <div>
        <base-material-card color="showroom">
            <template v-slot:heading>
                <div class="display-2 font-weight-light">
                    Crie seu anúncio
                </div>

                <div class="subtitle-1 font-weight-light">
                    Complete com mais informações
                </div>
            </template>
            <v-form>
                <v-row>
                    <v-col cols="12">
                        <v-text-field prepend-icon="mdi-text-box-edit" color="showroom" class="purple-input" label="NOME"
                            type="text" />
                    </v-col>
                    <v-col cols="12">
                        <v-textarea rows="1" prepend-icon="mdi-text-box-edit" color="showroom"
                            label="Descrição"></v-textarea>
                    </v-col>
                    <v-col cols="12">
                        <v-file-input color="showroom" label="Imagem do anúncio" accept="image/*">
                        </v-file-input>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field prepend-icon="mdi mdi-currency-brl" color="showroom" class="purple-input"
                            label="Valor" type="number" />
                    </v-col>
                    <v-col cols="12">
                        <v-text-field prepend-icon="mdi-text-box-edit" color="showroom" class="purple-input"
                            label="Categoria" type="text" />
                    </v-col>
                </v-row>
                <v-col cols="12" class="text-right">
                    <v-btn color="showroom" class="mr-0" @click="sendForm()">
                        Atualizar perfil
                    </v-btn>
                </v-col>

            </v-form>
        </base-material-card>
    </div>
</template>
<script>
export default {
    data: () => ({

    }),
    methods: {
        sendForm() {
            alert("Dados enviados");
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