<template>
    <div>
      <NavigationBar />
  
 
      <!-- <v-main class="pt-12 mt-12">
      <FooterView />
      </v-main> -->
    </div>
  </template>
  
  <script>
  import NavigationBar from "../components/Navigation/NavigationBar";
  import HeaderSection from "../components/Header/HeaderSection";
  import CarouselSection from "../components/CarouselSection/CarouselSectionView";
  import BannerSection from "../components/Banner/BannerView"
  import FooterView from "../components/Footer/FooterView"
  export default {
    name: "HomeView",
    components: {
      NavigationBar,
      HeaderSection,
      CarouselSection,
      BannerSection,
      FooterView
    },
    data() {
      return {
        showItem: 6,
        ingredients : false
      };
    }
  };
  </script>
  