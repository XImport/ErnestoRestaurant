<template>
  <v-container
    fluid
    class="pa-0"
    style="max-width: 70%; padding-bottom: 20px"
    data-aos="fade-in"
    data-aos-offset="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
  >
    <h1 class="text-center pb-6 font--Menu--Text">Speisekarte</h1>

    <h3 class="text-center pb-6 font--Menu--Text2">{{ Title }}</h3>

    <v-row no-gutters>
      <v-col
        v-for="(item, index) in filteredItems"
        :key="index"
        cols="12"
        sm="4"
        md="3"
        lg="4"
        class="item"
      >
        <v-img
          height="200"
          width="200"
          :src="getImageSrc(item.pic)"
          class="mx-auto"
        />
        <div class="item-details">
          <h1 class="text-h6 mb-2">{{ item.name }}</h1>
          <h3 v-show="ingredients" class="subtitle-1 mb-2 grey--text">
            {{ item.ingredients }}
          </h3>
          <h3 class="subtitle-1 mb-2 grey--text">{{ item.volume }}</h3>

          <h1
            class="font-weight-medium mb-2 red--text"
            style="font-size: large"
          >
            {{ item.price }}
          </h1>

          <!-- <v-btn depressed class="red lighten-1 white--text">Load More</v-btn> -->
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ItemList",
  methods: {
    getImageSrc(pic) {
      try {
        return require(`@/assets/Pics/Pizza/${pic}`);
      } catch (e) {
        return require("@/assets/pizza.png"); // Fallback image if the specified one is not found
      }
    },
  },
  props: {
    DATA: {
      type: Array,
      required: true,
    },
    TargetText: {
      type: String,
      required: true,
    },
    Title: {
      type: String,
      required: true,
    },
    ShowItem: {
      type: Number,
      required: true,
    },
    ingredients: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    filteredItems() {
      const category = this.TargetText;
      const filteredCategory = this.DATA.find(
        (item) => item.categorieName.toLowerCase() === category.toLowerCase()
      );
      console.log(this.ShowItem);
      return filteredCategory
        ? filteredCategory.items.slice(0, this.ShowItem)
        : [];
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.item-details {
  text-align: center;
  margin-top: 10px;
  padding-bottom: 40px;
}

.font--Menu--Text {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  color: rgb(96, 95, 95);
  /* text-decoration: underline; */
  font-style: normal;
}
.font--Menu--Text2 {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  color: rgb(183, 183, 183);
  /* text-decoration: underline; */
  font-style: normal;
}
.font-underline {
  text-decoration: underline;
}
</style>
