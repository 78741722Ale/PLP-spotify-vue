<template>
  <div id="site_price">
    <!-- Container Superiore -->
    <div :class="price_cont">
      <div :class="price_row">
          <!-- Spotify premium specs -->
          <div class="col-8 bordo">A</div>
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
       hero_specs : "Jumbotron Image"
      }
  },
};
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import "@/assets/sass/partials/main.scss";
</style>