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
import favicon from "../assets/logo.png";

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
  created() {
    document.title = "Startseite | Ernesto Restaurante";
    this.changeFavicon(favicon);
  },

  methods: {
    changeFavicon(iconUrl) {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.getElementsByTagName("head")[0].appendChild(link);
      }
      link.href = iconUrl;
    },
  },
};
</script>
