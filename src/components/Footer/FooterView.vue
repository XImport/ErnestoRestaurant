<template>
  <v-footer class="bg-grey-darken-4" dark>
    <v-container>
      <v-row>
        <!-- Company Info -->
        <v-col cols="12" sm="4">
          <h3 class="text-h6 mb-3">Ernesto Restaurant</h3>
          <p>Bieberer Straße 24 63065 Offenbach am Main</p>
          <p>Specialities : homemade pasta Neapolitanische pizza</p>
          <p>Phone: 069 65005891</p>
          <p>Openning : <span class="red--text"> Monday - Saturday</span> <span class="red--text">11.00 - 23.00</span></p>
          <p>Openning : <span class="red--text"> Sunday</span> <span class="red--text">Noon- 22.00</span></p>
        </v-col>

        <!-- Quick Links -->
        <v-col cols="12" sm="4">
          <h3 class="text-h6 mb-3">Quick Links</h3>
          <v-list density="compact" nav class="bg-transparent">
            <v-list-item to="/" class="pa-0">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item to="/menu" class="pa-0">
              <v-list-item-title>Menu</v-list-item-title>
            </v-list-item>
            <v-list-item to="/reservations" class="pa-0">
              <v-list-item-title>Reservations</v-list-item-title>
            </v-list-item>
            <v-list-item to="/contact" class="pa-0">
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Social Media -->
        <v-col cols="12" sm="4">
          <h3 class="text-h6 mb-3">Follow Us</h3>
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
          © {{ new Date().getFullYear() }} Our Restaurant. All rights reserved.
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
