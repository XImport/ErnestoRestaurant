<template>
  <div id="TargetSection">
    <div class="categories-container">
      <div v-for="(category, index) in menu" :key="index" class="category">
        <v-btn
          depressed
          :class="{
            'text-center': true,
            'text-h6': true,
            'font-underline': category.categorieName === TargetText
          }"
          color="transparent"
          @click="ChangeTextTarget(category.categorieName, category.title)"
        >
          {{ category.categorieName }}
        </v-btn>
      </div>
    </div>
    <ItemView
      :DATA="menu"
      :TargetText="TargetText"
      :Title="title"
      :ShowItem="ShowItem"
      :ingredients="ingredients"
    />
  </div>
</template>

<script>
import MenuItems from "../../DATA/Menu.js";
import ItemView from "./ItemView.vue";

export default {
  name: "App",
  props: ["ShowItem", "ingredients"],
  data() {
    return {
      TargetText: "Pizza",
      title: 'Classic Italian Pizzas',
      menu: MenuItems(), // Call the function to get the menu data
    };
  },
  components: {
    ItemView,
  },
  mounted() {
    console.log(this.menu);
  },
  methods: {
    ChangeTextTarget(Target, Title) {
      this.TargetText = Target;
      this.title = Title;
    },
  },
  computed: {
    shouldUnderline() {
      return this.category.categorieName === this.TargetText;
    }
  }
};
</script>

<style scoped>
.categories-container {
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  margin: auto;
  padding-bottom: 50px;
  padding-top: 5%;
  flex-wrap: wrap;
}

.category {
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.text-center {
  text-align: center;
}

.font-underline {
  text-decoration: underline;
  color: red;
}

@media (max-width: 960px) {
  .categories-container {
    width: 90%;
    padding-bottom: 30px;
    padding-top: 3%;
  }

  .category {
    flex-basis: 50%;
  }

  .v-btn {
    font-size: 14px !important;
  }
}

@media (max-width: 600px) {
  .categories-container {
    width: 100%;
    padding-bottom: 20px;
    padding-top: 2%;
  }

  .category {
    flex-basis: 100%;
  }

  .v-btn {
    font-size: 12px !important;
  }
}
</style>