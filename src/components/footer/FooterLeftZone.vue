<template>
  <!-- Footer left zone -->
  <div :class="footer_lz_cont">
    <!-- Row for the unordered list -->
    <div :class="footer_lz_row">
      <!-- Footer logo -->
      <div class="col-3 h-75 p-0 footer_logo">
        <img :src="footer_lz_logo" :alt="footer_lz_logo_desc"/>
      </div>
      <!-- Azienda (suo v-for su aziende) -->
      <AziendeComponent />
      <!-- Community  (suo v-for su community) -->
      <CommunityComponent />
      <!-- Link Utili (suo v-for su links) -->
      <LinksComponent />
      <!-- Information -->
      <div class="col-12 p-0 h-25 footer_terms">
        <ul>
          <li v-for="(element, index) in info" :key="index"><a href="element.ref">{{element.text}}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* Import Component lists */
import AziendeComponent from '@/components/footer/AziendeComponent.vue'
import CommunityComponent from '@/components/footer/CommunityComponent.vue'
import LinksComponent from '@/components/footer/LinksComponent.vue'


export default {
  name: "FooterRightZone",
  /* Component */
  components : {
    AziendeComponent,
    CommunityComponent,
    LinksComponent
  },
  
  /* Struttura Dati */
  data() {
    return {
    /* Classi Dinamiche */
      footer_lz_cont : "col-8 p-0 h-100",
      footer_lz_row : "row h-100 w-100 m-0 flex-wrap",
     /* Dati dinamici */
      footer_lz_logo : require("@/assets/img/h_logo.png"),
      footer_lz_logo_desc : "Spotify logo footer",
      info : [
        {
          ref : "#",
          text : "Informazioni Legali",  
        },
        {
          ref : "#",
          text : "Centro sulla privacy",  
        },
        {
          ref : "#",
          text : "Informativa sulla privacy",  
        },
        {
          ref : "#",
          text : "Impostazioni cookie",  
        },
        {
          ref : "#",
          text : "Info annunci",  
        },
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import "@/assets/sass/partials/footer.scss";
</style>
