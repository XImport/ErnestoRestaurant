<template>
  <div>
    <NavigationBar />
    <ModelView />

    <CarouselSection :ShowItem="showItem" ingredients="ingredients" />

    <v-main class="pt-12 mt-12">
      <FooterView />
    </v-main>
  </div>
</template>

<script>
import NavigationBar from "../components/Navigation/NavigationBar";

import CarouselSection from "../components/CarouselSection/CarouselSectionView";

import FooterView from "../components/Footer/FooterView";
import ModelView from "../components/Model/ModelView";

export default {
  name: "HomeView",
  created() {
    document.title = "Speisekarte | Ernesto Restaurante";
  },
  components: {
    NavigationBar,

    CarouselSection,

    FooterView,
    ModelView,
  },
  data() {
    return {
      showItem: 200,
      ingredients: true,
    };
  },
};
</script>
