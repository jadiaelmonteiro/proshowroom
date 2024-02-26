<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <base-material-snackbar v-model="snackbar" :type="colorSnack" top center>
        Aviso: <span class="font-weight-bold">&nbsp;{{ textContentSnack }}&nbsp;</span>
      </base-material-snackbar>
      <v-col cols="12" md="4">
        <base-material-card color="showroom" class="v-card-profile">
          <div v-if="this.dataUser.filePath" class="avatar text-center">
            <img id="imgFileUser" class="img" width="150" :src="url + this.dataUser.filePath" />
          </div>
          <div v-else class="avatar text-center">
            <img id="imgFileUser" class="img" width="150" :src="url + '/uploads/empty-photo.jpg'" />
          </div>
          <v-card-text class="text-center">
            <h6 class="display-1 mb-1 font-weight-light">
              DADOS DO PERFIL
            </h6>

            <h4 class="display-2 mb-3 font-weight-light">
              {{ this.dataUser.firstName }} {{ this.dataUser.lastName }}
            </h4>

            <p class="font-weight-light">
              Email: {{ this.dataUser.email }}
            </p>
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
                  <v-text-field v-model="dataInputForm.code" prepend-icon="mdi-text-box-edit" color="showroom"
                    class="purple-input" label="CEP" type="number" @blur="getViaCepData()" />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field v-model="dataInputForm.city" prepend-icon="mdi-text-box-edit" color="showroom"
                    label="Cidade" class="purple-input" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field v-model="dataInputForm.state" prepend-icon="mdi-text-box-edit" color="showroom"
                    label="Estado" class="purple-input" />
                </v-col>

                <v-col cols="12">
                  <v-text-field v-model="dataInputForm.address" prepend-icon="mdi-text-box-edit" color="showroom"
                    label="Endereço" class="purple-input" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field v-model="dataInputForm.firstName" prepend-icon="mdi-text-box-edit" color="showroom"
                    label="Primeiro Nome" class="purple-input" :rules="rulesText" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field v-model="dataInputForm.lastName" prepend-icon="mdi-text-box-edit" color="showroom"
                    label="Segundo Nome" class="purple-input" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field v-model="dataInputForm.phone" prepend-icon="mdi mdi-phone" color="showroom" label="Número"
                    class="purple-input" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-file-input v-model="dataInputForm.file" color="showroom" label="Trocar imagem do perfil"
                    accept="image/*"></v-file-input>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field v-model="dataInputForm.email" color="showroom" label="E-mail" class="purple-input"
                    :rules="emailRules" prepend-icon="mdi-email" />
                </v-col>

                <v-col cols="12">
                  <v-switch color="blue" v-model="dataInputForm.changePassword" label="Trocar senha ?"></v-switch>
                </v-col>

                <template v-if="dataInputForm.changePassword">
                  <v-col cols="12" md="6">
                    <v-text-field v-model="dataInputForm.passwordOld" :type="showPasswordOld ? 'text' : 'password'"
                      color="showroom" label="Senha antiga" class="purple-input" :rules="passwordRules"
                      prepend-icon="mdi-lock" :append-icon="showPasswordOld ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPasswordOld = !showPasswordOld" />
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field v-model="dataInputForm.passwordNew" :type="showPassword ? 'text' : 'password'"
                      color="showroom" label="Senha nova" class="purple-input" :rules="passwordRules"
                      prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword" />
                  </v-col>
                </template>

                <v-col cols="12" class="text-right">
                  <v-btn color="showroom" class="mr-0" @click="updateProfile()">
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
import userService from '../../../services/userService';
const config = require('../../../config.js');
export default {
  data: () => ({
    showPassword: false,
    showPasswordOld: false,
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
    dataUser: [],
    dataInputForm: {
      id: localStorage.getItem('userId') ?? "",
      code: '',
      city: '',
      state: '',
      address: '',
      file: [],
      firstName: '',
      lastName: '',
      email: '',
      passwordNew: '',
      passwordOld: '',
      changePassword: false,
      phone: '',
    },
    textContentSnack: "",
    colorSnack: "success",
    snackbar: false,
    url: config.urlBase,
  }),
  methods: {
    async getDataUser() {
      await userService.getUserById({
        id: localStorage.getItem('userId'),
        jwt: localStorage.getItem('jwt')
      }).then(res => {
        this.dataUser = res;
      }).catch(error => {
        console.log(error);
      })
    },

    fillDataForm() {
      this.dataInputForm.firstName = this.dataUser.firstName;
      this.dataInputForm.email = this.dataUser.email;
      this.dataInputForm.address = this.dataUser.address;
      this.dataInputForm.city = this.dataUser.city;
      this.dataInputForm.code = this.dataUser.code;
      this.dataInputForm.file = [];
      this.dataInputForm.lastName = this.dataUser.lastName;
      this.dataInputForm.state = this.dataUser.state;
      this.dataInputForm.phone = this.dataUser.phone;
    },

    updateProfile() {
      this.checkFileImg();
      userService.updatedUserById({
        jwt: localStorage.getItem('jwt'),
        body: this.dataInputForm
      }).then(response => {
        if (response) {
          this.textContentSnack = "DADOS ATUALIZADOS COM SUCESSO!";
          this.colorSnack = "success";
          this.snackbar = true;
          this.getDataUser().then(() => {
            this.fillDataForm();
          })
        }
      }).catch(error => {
        console.log(error);
        this.textContentSnack = "ERRO AO ATUALIZAR, TENTE NOVAMENTE!";
        this.colorSnack = "error";
        this.snackbar = true;
      })
    },

    checkFileImg() {
      if (this.dataInputForm.file.type) {
        if (!this.dataInputForm.file.type.startsWith('image')) {
          this.textContentSnack = "ARQUIVO DEVE SER DO TIPO IMAGEM!";
          this.colorSnack = "error";
          this.snackbar = true;
          this.dataInputForm.file = [];
        }
        this.uploadFile();
      };
    },

    uploadFile() {
      userService.updateFile({
        id: this.dataInputForm.id,
        jwt: localStorage.getItem('jwt'),
        file: this.dataInputForm.file
      }).then(response => {
        console.log(response);
        this.textContentSnack = "DADOS ATUALIZADOS COM SUCESSO!";
        this.colorSnack = "success";
        this.snackbar = true;
        this.getDataUser().then(() => {
          this.fillDataForm();
        })
      }).catch(error => {
        console.log(error);
      })
    },

    async getViaCepData() {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${this.dataInputForm.code}/json/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao realizar a solicitação.');
        }

        const data = await response.json();
        this.dataInputForm.address = `${data.logradouro}, ${data.bairro}`;
        this.dataInputForm.city = data.localidade;
        this.dataInputForm.state = data.uf;
      } catch (error) {
        console.error('Erro durante a solicitação:', error);
        this.textContentSnack = "ERRO AO ATUALIZAR, TENTE NOVAMENTE!";
        this.colorSnack = "error";
        this.snackbar = true;
      }
    }
  },
  created() {
    this.getDataUser().then(() => {
      this.fillDataForm();
    })
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
