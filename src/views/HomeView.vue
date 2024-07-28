<template>
  <div>
    <NavigationBar />

    <HeaderSection />

    <CarouselSection :ShowItem="showItem" :ingredients="ingredients" />
    <BannerSection />
    <v-main class="pt-12 mt-12">
      <FooterView />
      <ModelView />
    </v-main>
  </div>
</template>

<script>
import NavigationBar from "../components/Navigation/NavigationBar";
import HeaderSection from "../components/Header/HeaderSection";
import CarouselSection from "../components/CarouselSection/CarouselSectionView";
import BannerSection from "../components/Banner/BannerView";
import FooterView from "../components/Footer/FooterView";
import ModelView from "../components/Model/ModelView";
export default {
  name: "HomeView",
  components: {
    NavigationBar,
    HeaderSection,
    CarouselSection,
    FooterView,
    ModelView,
    BannerSection,
  },
  data() {
    return {
      showItem: 6,
      ingredients: false,
    };
  },
};
</script>
