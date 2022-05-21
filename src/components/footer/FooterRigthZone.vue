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
      <div class="col-12 h-25 copy_zone pb-3">
        <span><font-awesome-icon :icon="copy_icon" />{{copy_text}}<a :href="linkedin_ref"><font-awesome-icon :icon="linkedin_icon" /></a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterRightZone",
  data() {
    return {
    /* Dynamic classes */
    footer_brands_cont : "col-4 p-0 h-100",
    footer_brands_row : "row h-100 w-100 m-0 brands ",
    footer_brands_col : "col-12 h-25 icon_cont",
    icons_cells : "me-3 icons_cell flex_cent",
    copy_icon : "fa-solid fa-copyright",
    linkedin_icon : "fa-brands fa-linkedin",
    linkedin_ref : "https://www.linkedin.com/in/alessandro-pecorilla-8a98b7196/",
    copy_text : "Created by Alessandro Pecorilla | Vue 2.0 | Linkedin Profile :",
    /* Dynamic data */
    icons_list : ["fa-brands fa-twitter", "fa-brands fa-linkedin", "fa-brands fa-facebook"]
    }
  },
};
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import "@/assets/sass/partials/footer.scss";
</style>