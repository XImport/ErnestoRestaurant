<template>
  <div>
    <v-app-bar app>
      <v-container class="py-0 fill-height">
        <v-row align="center" justify="space-between">
          <v-col cols="auto">
            <v-img
              :src="require('@/assets/logo.png')"
              alt="Logo"
              max-height="60"
              max-width="150"
              contain
            ></v-img>
          </v-col>

          <v-col class="d-none d-md-flex">
            <v-row justify="center">
              <v-col v-for="(btn, index) in NavBar" :key="index" cols="auto">
                <v-btn :to="btn.path" text class="text-body-1">
                  {{ btn.title }}
                </v-btn>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="auto" class="d-none d-md-flex">
            <v-btn
              class="white--text red"
              :class="{ 'px-2': $vuetify.breakpoint.smAndDown }"
              @click="ChangeDialogView()"
            >
              <v-icon left>mdi-arrow-right-bold</v-icon>
              <span class="d-none d-sm-inline">Reservierung hier</span>
            </v-btn>
          </v-col>

          <v-app-bar-nav-icon
            class="d-md-none"
            @click="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary right app class="d-md-none">
      <v-list>
        <v-list-item
          v-for="(btn, index) in NavBar"
          :key="index"
          :to="btn.path"
          link
        >
          <v-list-item-title>{{ btn.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",

  data: () => ({
    drawer: false,
    NavBar: [
      { title: "Startseite", path: "/" },
      { title: "Speisekarte", path: "/menu" },
      { title: "Reservierungen", path: "/about" },
      { title: "Kontakt", path: "/contact" },
    ],
  }),
  methods: {
    ChangeDialogView() {
      this.$store.commit("ChangeModelState");
    },
  },
};
</script>

<style scoped>
.v-app-bar {
  box-shadow: none !important;
}
</style>
