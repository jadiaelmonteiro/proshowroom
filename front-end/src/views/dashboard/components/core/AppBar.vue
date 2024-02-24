<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>

    <v-toolbar-title class="hidden-sm-and-down font-weight-light" v-text="$route.name" />
    <v-spacer />

    <v-btn class="ml-2" min-width="0" text to="/">
      <v-icon>mdi-view-dashboard</v-icon>
      <label for="Anúncios">Anúncios</label>
    </v-btn>

    <v-btn class="ml-2" min-width="0" text @click="logout()">
      <v-icon>mdi-account</v-icon>
      <label for="Sair">Sair</label>
    </v-btn>
  </v-app-bar>
</template>

<script>
// Components
import { VHover, VListItem } from 'vuetify/lib'

// Utilities
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'DashboardCoreAppBar',

  components: {
    AppBarItem: {
      render(h) {
        return h(VHover, {
          scopedSlots: {
            default: ({ hover }) => {
              return h(VListItem, {
                attrs: this.$attrs,
                class: {
                  'black--text': !hover,
                  'white--text secondary elevation-12': hover,
                },
                props: {
                  activeClass: '',
                  dark: hover,
                  link: true,
                  ...this.$attrs,
                },
              }, this.$slots.default)
            },
          },
        })
      },
    },
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    logout() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("userId");
      this.$router.push('/');
    }
  }),

  computed: {
    ...mapState(['drawer']),
  },

  methods: {
    ...mapMutations({
      setDrawer: 'SET_DRAWER',
    }),
  },
}
</script>
