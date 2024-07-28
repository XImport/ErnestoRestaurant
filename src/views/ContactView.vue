<template>
  <div>
    <NavigationBar />
    <ModelView />
    <div class="container">
      <div class="text-header">
        <h1
          class="text-font1"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          Überspringen Sie das Warten und sichern Sie sich Ihre Reservierung vor
          den anderen
        </h1>
        <h2
          class="text-font2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          Machen Sie sich bereit für ein köstliches Pizza-Erlebnis
        </h2>
        <v-btn
          class="mt-6 white--text pl-12 pr-12 pt-6 pb-6"
          color="red"
          @click="ChangeDialogView()"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <v-icon class="pr-2" right dark> mdi-arrow-right </v-icon>
          RESERVIERUNG HIER!!
        </v-btn>
      </div>
      <div
        class="img-container"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <v-img
          max-height="750"
          max-width="700"
          class="bg--image"
          src="@/assets/contact.png"
        />
      </div>
    </div>
    <div class="text-center pb-2">
      <v-btn class="mx-2" fab large @click="scrollToSection">
        <v-icon>mdi-arrow-down</v-icon>
      </v-btn>
    </div>
    <div id="OpeningSection"></div>
    <div class="opening-time-section mt-12 pt-12">
      <h1 class="text-center mb-6 font--Menu--Text">Öffnungszeiten</h1>
      <v-container id="OpeningSection">
        <v-row justify="center">
          <v-col
            v-for="(open, index) in OpeningTime"
            :key="index"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card class="mx-auto" max-width="300" outlined>
              <v-card-text class="text-center">
                <h2 class="text-h5 mb-2">{{ open.day }}</h2>
                <p
                  :class="`text-subtitle-1 ${open.state}--text font-weight-bold`"
                >
                  {{ open.Time }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container class="px-0" fluid>
      <v-row align="center" justify="center" no-gutters>
        <v-col
          cols="12"
          md="6"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div class="text-content pa-4 mm--pos">
            <h1 class="text-center mb-6 font--Menu--Text">
              Erhalten Sie spezielle Angebote und Rabatte für reservierte Gäste
            </h1>
            <h3 class="text-center mb-6 font--Menu--Text">
              Craving that perfect slice? Click below to reserve your spot now
              and make tonight a pizza night to remember!
            </h3>
            <div class="text-center mt-6">
              <v-btn class="red white--text pa-4" @click="ChangeDialogView()">
                <v-icon class="pr-2">mdi-arrow-right</v-icon>
                Buchen Sie jetzt Ihre eigene Reservierung!!
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div
            class="img-container"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <v-img
              src="@/assets/callus.png"
              contain
              max-height="500"
              class="bg--image"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div></div>

    <FooterView />
  </div>
</template>

<script>
import NavigationBar from "../components/Navigation/NavigationBar";
import FooterView from "../components/Footer/FooterView";
import ModelView from "../components/Model/ModelView";
export default {
  data() {
    return {
      OpeningTime: [
        { day: "Montag", Time: "9:00 AM - 11:00 PM", state: "green" },
        { day: "Dienstag", Time: "9:00 AM - 11:00 PM", state: "green" },
        { day: "Mittwoch", Time: "9:00 AM - 11:00 PM", state: "green" },
        { day: "Donnerstag", Time: "9:00 AM - 11:00 PM", state: "green" },
        { day: "Freitag", Time: "9:00 AM - 11:00 PM", state: "green" },
        { day: "Samstag", Time: "9:00 AM - 11:00 PM", state: "green" },
        { day: "Sonntag", Time: "Closed", state: "red" },
      ],
    };
  },
  components: {
    NavigationBar,
    FooterView,
    ModelView,
  },
  methods: {
    scrollToSection() {
      let targetSection = document.getElementById("OpeningSection");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    ChangeDialogView() {
      this.$store.commit("ChangeModelState");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;700&display=swap");

.v-btn {
  box-shadow: none !important;
}

.container {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: auto;
  padding-left: 10%;
}

.text-header {
  text-align: center;
  padding-top: 60px; /* Increased top padding */
  margin: auto;
  max-width: 800px; /* Limit width for better readability on large screens */
}

.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.bg--image {
  width: 100%;
  height: auto;
  max-width: 700px;
}
.mm--pos {
  margin-left: 20%;
}

@media (max-width: 960px) {
  .container {
    flex-direction: column;
    margin-top: 10%;
  }
  .mm--pos {
    margin-left: 0%;
  }

  .text-header {
    padding-top: 30px;
  }

  .text-font1 {
    font-size: 32px;
  }

  .text-font2 {
    font-size: 18px;
  }

  .img-container {
    margin-top: 20px;
  }

  .bg--image {
    max-width: 90%;
  }
}

@media (max-width: 600px) {
  .text-header {
    padding-top: 20px;
  }

  .text-font1 {
    font-size: 24px;
  }

  .text-font2 {
    font-size: 16px;
  }

  .text-content h1 {
    font-size: 20px;
  }

  .text-content h3 {
    font-size: 16px;
  }

  .v-btn {
    padding: 8px 16px !important;
    font-size: 12px !important;
  }
}
</style>
