<template>
  <v-container style="max-width: 60%; border-radius: 50%">
    <v-row>
      <v-col
        v-for="(review, index) in Reviews"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="mx-auto bg--global" max-width="350" elevation="0">
          <v-card-text class="text-center">
            <v-avatar size="100" class="mb-4">
              <v-img :src="review.profilePic" alt="Client Photo"></v-img>
            </v-avatar>

            <h3 class="text-h5 mb-2">{{ review.name }}</h3>

            <v-rating
              v-model="review.rating"
              :model-value="4.5"
              background-color="grey-lighten-1"
              color="amber"
              density="comfortable"
              half-increments
              readonly
            ></v-rating>

            <p class="text-body-2 mb-4">
              {{ review.description }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ClientReviewCard',
  data(){
    return {
      rating : 4.50,
      Reviews: [
  {
    profilePic: 'https://lh3.googleusercontent.com/a-/ALV-UjXyElQZoUJLOrblfDBNQb9WFMGgo1QJKmbZ4P-eoWY6HwNwmyPgEg=w36-h36-p-rp-mo-br100',
    name: 'Robin Dittmair',
    rating: 5.00,
    description: 'Eine der besten Pizzen, die ich in meinem Leben je gegessen habe. Und das Dessert mit Pistazien und Nutella war auch hervorragend.'
  },
  {
    profilePic: 'https://lh3.googleusercontent.com/a/ACg8ocLLZD4C0loAV_OCDQ_SIhqv0pPLfdjeyaIG4XEdIBQxqqTzTQ=w36-h36-p-rp-mo-br100',
    name: 'Anouk Constantin',
    rating: 5,
    description: "Ein sehr netter Kellner, besonders gegenüber Kindern und Jugendlichen. Großartiges Essen mit kurzer Wartezeit (15 Minuten) ..."
  },
  {
    profilePic: 'https://lh3.googleusercontent.com/a/ACg8ocLNb6xt3fc4KsN-OWV9zt2hp-Y4tZCgmWGGVjfQLeYGhycQrg=w36-h36-p-rp-mo-br100',
    name: 'Fatema Mahmood',
    rating: 4,
    description: 'Ernesto ist eine Pizzeria, die Sie unbedingt besuchen sollten. Die Kombination aus ausgezeichnetem Essen ist unschlagbar. Weiter so 👏 …'
  }
]
    }
  }
  // Add any necessary component logic here
}
</script>

<style scoped>
.bg--global {
  background-color: #ffffff;
  border-radius: 10% !important;
}
</style>
