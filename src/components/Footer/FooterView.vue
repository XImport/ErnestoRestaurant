<template>
  <v-footer class="bg-grey-darken-4" dark>
    <v-container>
      <v-row>
        <!-- Company Info -->
        <v-col cols="12" sm="4">
          <h3 class="text-h6 mb-3">Restaurant Ernesto</h3>
          <p>Bieberer Straße 24 63065 Offenbach am Main</p>
          <p>Besonderheiten: hausgemachte Pasta, neapolitanische Pizza</p>
          <p>Telefon: 069 65005891</p>
          <p>
            Öffnungszeiten <span class="red--text"> Montag - Samstag</span>
            <span class="red--text">11.00 - 23.00</span>
          </p>
          <p>
            Öffnungszeiten <span class="red--text"> Sonntag</span>
            <span class="red--text">Noon</span>
          </p>
        </v-col>

        <!-- Quick Links -->
        <v-col cols="12" sm="4">
          <h3 class="text-h6 mb-3">Schnellzugriff</h3>
          <v-list density="compact" nav class="bg-transparent">
            <v-list-item to="/" class="pa-0">
              <v-list-item-title>Startseite</v-list-item-title>
            </v-list-item>
            <v-list-item to="/menu" class="pa-0">
              <v-list-item-title>Speisekarte</v-list-item-title>
            </v-list-item>
            <v-list-item to="/about" class="pa-0">
              <v-list-item-title>Reservierungen</v-list-item-title>
            </v-list-item>
            <v-list-item to="/contact" class="pa-0">
              <v-list-item-title>Kontakt</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Social Media -->
        <v-col cols="12" sm="4">
          <h3 class="text-h6 mb-3">Folgen Sie uns</h3>
          <v-btn class="mx-2" fab dark small depressed>
            <v-icon dark> mdi-facebook </v-icon>
          </v-btn>

          <v-btn class="mx-2" fab dark small depressed>
            <v-icon dark> mdi-twitter </v-icon>
          </v-btn>

          <v-btn class="mx-2" fab dark small depressed>
            <v-icon dark> mdi-instagram </v-icon>
          </v-btn>

          <v-btn class="mx-2" fab dark small depressed>
            <v-icon dark> mdi-youtube </v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <!-- Copyright -->
      <v-row class="mt-4">
        <v-col cols="12" class="text-center">
          <v-divider class="mb-4"></v-divider>
          © {{ new Date().getFullYear() }} Unser Restaurant. Alle Rechte
          vorbehalten.
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style>
v-btn {
  box-shadow: none !important;
}
</style>
