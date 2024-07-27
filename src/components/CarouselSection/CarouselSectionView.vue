<template>
  <div id="TargetSection">
    <div class="categories-container">
      <div v-for="(category, index) in menu" :key="index" class="category">
        <v-btn
  depressed

  :class="{
    'text-center': true,
    'text-h6': true,
    'font-underline':  category.categorieName === TargetText // Ensure category is defined before checking
  }"
  color="transparent"
  @click="ChangeTextTarget(category.categorieName, category.title)"
>
  {{  category.categorieName }}

</v-btn>
      
      </div>
    
    </div>
    <ItemView :DATA="menu" :TargetText="TargetText" :Title="title" :ShowItem="ShowItem" :ingredients="ingredients"/>
  </div>
</template>

<script>
import MenuItems from "../../DATA/Menu.js";
import ItemView from "./ItemView.vue";
export default {
  name: "App",
  props : ["ShowItem","ingredients"],
  data() {
    return {
      TargetText: "Pizza",
      title : 'Classic Italian Pizzas',
      menu: MenuItems(), // Call the function to get the menu data
    };
  },
  components: {
    ItemView,
  },

  mounted() {
    console.log(this.menu); // Access the first category's name
  },
  methods: {
    ChangeTextTarget(Target,Title) {
      this.TargetText = Target;
      this.title = Title
    },
  },
  computed: {
  shouldUnderline() {
    return this.category.categorieName === this.TargetText; // Replace 'SpecificValue' with your actual condition
  }
}
};
</script>

<style scoped>
#TargetSection {
  /* background-color: aqua; */
}

.categories-container {
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  margin: auto;
  padding-bottom: 50px;
  padding-top: 5%;
}

.category {
  /* margin-right: 20px;  */
  margin-bottom: 10px;
  text-align: center;
  display: flex;

  align-items: center;
  justify-content: space-evenly;
}

.text-center {
  text-align: center;
}
.font-underline{
  text-decoration: underline;
  color: red;
}
</style>
