<template>
  <div>
    <div class="container">
      <div class="text-header">
        <h1 class="text-font1">
          Erleben Sie Gourmet-Dining im Ernesto Restaurant
        </h1>
        <h2 class="text-font2">
          Erleben Sie Gourmet-Dining im Restaurant Ernesto
        </h2>
        <v-btn class="red white--text pa-4 mt-12">
              <v-icon class="pr-2">mdi-arrow-right</v-icon>
              Reservierung HIER
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

@media (max-width: 960px) {
  .container {
    flex-direction: column;
  }

  .text-header {
    order: 2;
    padding-top: 20px;
  }

  .img-container {
    order: 1;
    justify-content: center;
  }

  .text-font1 {
    font-size: 36px;
  }

  .text-font2 {
    font-size: 18px;
  }

  .v-btn {
    padding: 12px 24px !important;
  }

  .bg--image {
    max-width: 90% !important;
    max-height: auto !important;
  }
}
</style>