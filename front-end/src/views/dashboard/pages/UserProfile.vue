<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">

      <v-col cols="12" md="4">
        <base-material-card color="showroom" class="v-card-profile">
          <div class="avatar text-center">
            <img class="img" width="150" src="../../../../../back-end/uploads/empty-photo.jpg" />
          </div>
          <v-card-text class="text-center">
            <h6 class="display-1 mb-1 grey--text">
              CEO / CO-FOUNDER
            </h6>

            <h4 class="display-2 font-weight-light mb-3 black--text">
              Alec Thompson
            </h4>

            <p class="font-weight-light grey--text">
              Don't be scared of the truth because we need to restart the human foundation in truth And I love you like
              Kanye loves Kanye I love Rick Owens’ bed design but the back is...
            </p>

            <v-btn color="showroom" rounded class="mr-0">
              Follow
            </v-btn>
          </v-card-text>
        </base-material-card>
      </v-col>

      <v-col cols="12" md="8">
        <base-material-card color="showroom">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Edite seu perfil
            </div>

            <div class="subtitle-1 font-weight-light">
              Complete com mais informações
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field prepend-icon="mdi-text-box-edit" color="showroom" class="purple-input" label="CEP"
                    type="number" />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field prepend-icon="mdi-text-box-edit" color="showroom" label="Cidade" class="purple-input" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field prepend-icon="mdi-text-box-edit" color="showroom" label="Estado" class="purple-input" />
                </v-col>

                <v-col cols="12">
                  <v-text-field prepend-icon="mdi-text-box-edit" color="showroom" label="Endereço" class="purple-input" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field prepend-icon="mdi-text-box-edit" color="showroom" label="Primeiro Nome"
                    class="purple-input" :rules="rulesText" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field prepend-icon="mdi-text-box-edit" color="showroom" label="Segundo Nome"
                    class="purple-input" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-file-input color="showroom" label="Imagem do perfil"></v-file-input>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field color="showroom" label="E-mail" class="purple-input" :rules="emailRules"
                    prepend-icon="mdi-email" />
                </v-col>

                <v-col cols="12">
                  <v-switch color="blue" v-model="changePassword" label="Trocar senha ?"></v-switch>
                </v-col>

                <template v-if="changePassword">
                  <v-col cols="12" md="6">
                    <v-text-field :type="showPassword ? 'text' : 'password'" color="showroom" label="Senha antiga"
                      class="purple-input" :rules="passwordRules" prepend-icon="mdi-lock"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword" />
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field :type="showPasswordOld ? 'text' : 'password'" color="showroom" label="Senha nova"
                      class="purple-input" :rules="passwordRules" prepend-icon="mdi-lock"
                      :append-icon="showPasswordOld ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPasswordOld = !showPasswordOld" />
                  </v-col>
                </template>

                <v-col cols="12" class="text-right">
                  <v-btn color="showroom" class="mr-0">
                    Atualizar perfil
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showPassword: false,
    showPasswordOld: false,
    changePassword: false,
    emailRules: [
      value => !!value || 'Requerido',
      value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Por favor, digite um e-mail válido!'
    ],
    passwordRules: [
      (value) => !!value || 'Por favor, escreva sua senha.',
      (value) => (value && value.length >= 3) || 'Mínimo de 3 characters',
    ],
    rulesText: [
      value => !!value || 'Requerido'
    ],
    dataUser: []
  }),
  methods: {
    getDataUser() {

    }
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
