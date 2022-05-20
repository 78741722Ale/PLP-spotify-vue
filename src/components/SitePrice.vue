<template>
  <div id="site_price">
    <!-- Container Superiore -->
    <div :class="price_cont">
      <div :class="price_row">
          <!-- Spotify premium specs -->
          <div :class="premium_cont">
            <!-- Titolo premium -->
            <h5 class="text-uppercase pb-4">{{premium_h5}}</h5>
            <!-- Hero Title -->
            <h1 class="pt-1 pb-4">{{premium_h1}}</h1>
            <!-- Hero Text -->
            <p class="pb-3">{{premium_p}}</p>
            <!-- Hero Button -->
            <button>{{premium_btn}}</button>
            <!-- Hero Subtitle (anche se subtitle dovrebbe essere un ancor) -->
            <span class="pt-5">
              Solo con il piano Individual. Dopo, solo €9,99 al mese.
              <span class="subtitle">Si applicano termini e condizioni.</span> 
              Disponibile solo per gli utenti che non hanno ancora provato Premium. 
              L'offerta termina in 19 maggio 2022
            </span>
          </div>
          <!-- Hero Image -->
          <div :class="price_hero">
              <img class="hero_img" :src="hero_img" :alt="hero_specs">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SitePrice",
  /* Data */
  data() {
      return {
       /* Classi Dinamiche */
       price_cont : "h-100 container-xl w-100 p-0",   
       price_row : "row h-100 flex_cent w-100 p-0 m-0",
       price_specs : "",
       /* Image Data and class */
       price_hero : "col-4 h-75 flex_cent",
       hero_img : require("@/assets/img/jumbo.jpg"),
       hero_specs : "Jumbotron Image",
       /* Spotify premium specs */
       premium_cont : "col-8 h-75 p-0 premium_specs",
       premium_h5 : "Spotify premium",
       premium_h1 : "L'offerta scade a breve: 3 mesi di Premium gratis",
       premium_p : "Non perderti musica senza pubblicità, riproduzione in modalità offline e molto altro ancora. Annulla quando vuoi.",
       premium_btn : "Approfitta di 3 mesi gratis",
      }
  },
};
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import "@/assets/sass/partials/main.scss";
</style>