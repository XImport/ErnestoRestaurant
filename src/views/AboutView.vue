<template>
  <div>
    <NavigationBar />
    <ModelView />

    <section
      class="mt-12 pt-12"
      data-aos="fade-in"
      data-aos-offset="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <h1 class="text-center text-2xl font-bold mb-8 font--Menu--Text">
        Was wir tun?
      </h1>
      <div class="cards-container">
        <div class="card-wrapper" v-for="(card, index) in Cards" :key="index">
          <div class="card bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="card--img">
              <v-img
                :src="card.image"
                height="100%"
                width="100%"
                contain
              ></v-img>
            </div>
            <div class="card-content">
              <h2 class="text-sm font-semibold mb-2 text-center">
                {{ card.title }}
              </h2>
              <p class="text-gray-700 text-center subtext">
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="mt-12 pt-12"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <h1 class="text-center text-2xl font-bold mb-8 font--Menu--Text">
        Restaurant-Standort
      </h1>
      <div class="location-image-container">
        <v-img
          src="../assets/Location.png"
          height="100%"
          width="100%"
          contain
        ></v-img>
      </div>
    </section>
    <v-main class="pt-12 mt-12">
      <FooterView />
    </v-main>
  </div>
</template>

<script>
import NavigationBar from "../components/Navigation/NavigationBar";
import FooterView from "../components/Footer/FooterView";
import ModelView from "../components/Model/ModelView";

export default {
  name: "HomeView",
  components: {
    NavigationBar,
    FooterView,
    ModelView,
  },
  data() {
    return {
      showItem: 200,
      ingredients: true,
      Cards: [
        {
          title: "Schnellimbiss",
          image:
            "https://icon-library.com/images/fast-food-icon/fast-food-icon-19.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
        {
          title: "Desserts",
          image: "https://cdn-icons-png.flaticon.com/512/7780/7780470.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
        {
          title: "Getränke",
          image: "https://cdn-icons-png.flaticon.com/512/2094/2094538.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
        {
          title: "Meals",
          image: "https://cdn-icons-png.flaticon.com/512/1046/1046874.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 10px;
}
.card-wrapper {
  flex: 0 1 calc(25% - 10px);
  min-width: 100px;
  max-width: 300px;
}
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10% !important;
  /* margin-right: 50px !important; */
  width: 300px;
}
.card--img {
  height: 80px;
  width: 80px;
  margin: 10px auto;
  background-color: #f3f4f6;
  border-radius: 50%;
  overflow: hidden;
}
.card-content {
  padding: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.subtext {
  font-size: 0.8rem;
  line-height: 1.2;
}
@media (max-width: 1024px) {
  .card-wrapper {
    flex: 0 1 calc(33.333% - 10px);
  }
}
@media (max-width: 768px) {
  .card-wrapper {
    flex: 0 1 calc(50% - 10px);
  }
}
@media (max-width: 480px) {
  .card-wrapper {
    flex: 0 1 100%;
  }
}
.location-image-container {
  max-width: 80%;
  margin: auto;
  padding-bottom: 5%;
  border-radius: 10%;
}
.font--Menu--Text {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  color: rgb(96, 95, 95);
  /* text-decoration: underline; */
  font-style: normal;
}
</style>
