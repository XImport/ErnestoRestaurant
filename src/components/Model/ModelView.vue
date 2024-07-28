<template>
  <v-dialog v-model="Dialog" persistent max-width="600" class="rounded-xl">
    <v-card class="pa-4 pa-sm-6">
      <h3 class="pa-2 pa-sm-4 text-h5 text-sm-h4 text-center">
        <v-icon color="black" class="mr-2">mdi-headset</v-icon>
        Restaurant-Hotline :
      </h3>
      <h1
        class="red pa-2 rounded-xl mt-2 white--text text-h6 text-sm-h5 d-flex justify-center align-center"
      >
        <v-icon class="white--text mr-2" x-large>mdi-phone</v-icon>
        <span>Telefon: 069 65005891</span>
      </h1>

      <v-card-actions class="justify-center mt-4">
        <v-btn icon color="black" @click="ChangeDialogView()">
          <v-icon>mdi-close-thick</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
  computed: {
    Dialog() {
      return this.$store.getters.GetModelState;
    },
  },
  methods: {
    ChangeDialogView() {
      this.$store.commit("ChangeModelState");
    },
  },
};
</script>
