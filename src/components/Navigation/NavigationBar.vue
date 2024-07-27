<template>
  <v-app-bar style="padding: 1%">
    <v-img
        :src="require('@/assets/logo.png')"
        alt="Logo"
        max-height="150"
        style="margin-top: 2%;"
        max-width="250"
        contain
      ></v-img>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer> 
    <div v-for="(btn, index) in NavBar" :key="index" class="mr-4">
      <v-btn :to="btn.path" depressed class="transparent text-h6" tag="router-link">
    {{ btn.title }}
  </v-btn>
    </div>
    <v-spacer></v-spacer> 
    <v-spacer></v-spacer>
    <v-btn depressed color="red" class="mr-12 text-subtitle-1 white--text">
      <v-icon class="pr-2">mdi-arrow-right-bold</v-icon> Reservation Here
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    NavBar: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Menu",
        path: "/menu",
      },
      {
        title: "About",
        path: "/about",
      },
      {
        title: "Contact",
        path: "/contact",
      },
    ],
  }),
};
</script>

<style>
.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none !important;
  /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); */
}
</style>
