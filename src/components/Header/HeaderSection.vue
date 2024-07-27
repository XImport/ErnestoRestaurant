<template>
  <div>
    <div class="container">
      <div class="text-header">
        <h1 class="text-font1">
          Experience Gourmet Dining at Ernesto Restaurant
        </h1>
        <h2 class="text-font2">
          Experience Gourmet Dining at Ernesto Restaurant
        </h2>
        <v-btn class="mt-6 white--text pl-12 pr-12 pt-6 pb-6" color="red">
          <v-icon
          class="pr-2"
        right
        dark
      >
      mdi-arrow-right
      </v-icon>
         
         
          Check Out
        </v-btn>
      </div>
      <div class="img-container">
        <v-img
          max-height="750"
          max-width="700"
          class="bg--image"
          src="@/assets/pizza.png"
        />
      </div>
    </div>
    <div class="text-center pb-2">
      <v-btn class="mx-2" fab large @click="scrollToSection">
        <v-icon>mdi-arrow-down</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    scrollToSection() {
      let targetSection = document.getElementById("TargetSection");
      if (targetSection) {
        window.scrollTo({
          left: targetSection.offsetLeft,
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;700&display=swap");

.container {
  display: flex;
  justify-content: space-evenly;
  width: 95%;
  margin: auto;
}

.text-header {
  text-align: center;
  padding-top: 25px;
  margin: auto;
}

.text-font1 {
  font-family: "Merriweather Sans", sans-serif;
  font-size: 60px;
}

.text-font2 {
  font-family: "Merriweather Sans", sans-serif;
  font-size: larger;
  font-weight: 400;
}

.img-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.bg--image {
  background-color: transparent;
  border-radius: 50%;
}

.v-btn {
  box-shadow: none;
}
</style>
