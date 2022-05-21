<template>
  <!-- Footer brands zone -->
  <div :class="footer_brands_cont">
    <!-- Row for the brands list -->
    <div :class="footer_brands_row">
      <!-- Brands -->
      <div :class="footer_brands_col">
        <!-- Ripetile tramite v-for -->
        <div v-for="(element, index) in icons_list" :key="index" :class="icons_cells">
          <font-awesome-icon class="icon_type" :icon="element" />
        </div>
      </div>
      <!-- Zone -->
      <div class="col-12 h-25 bordo">Client Zone</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterRightZone",
  data() {
    return {
    /* Classi dinamiche */
    footer_brands_cont : "col-4 p-0 h-100",
    footer_brands_row : "row h-100 w-100 m-0 brands ",
    footer_brands_col : "col-12 h-25 icon_cont",
    icons_cells : "me-3 icons_cell flex_cent",
    /* Dati dinamici  */
    icons_list : ["fa-brands fa-twitter", "fa-brands fa-twitter", "fa-brands fa-facebook"]
    }
  },
};
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import "@/assets/sass/partials/footer.scss";
</style>