<template>

<v-container>
<div>
    <h1 class="text-center pb-6 font--Menu--Text">Clients Reviews</h1>
    <ClientsReviews />
</div>
<div>

</div>
</v-container>

</template>

<script>
import ClientsReviews from "./ClientsReview";

export default {
  name: "HomeView",
  components: {
    ClientsReviews,
  
  }
};


</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.font--ppoing {
    font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
}


.font--Menu--Text{
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  color: rgb(96, 95, 95);
  /* text-decoration: underline; */
  font-style: normal;
}
</style>