<template>
  <!-- Footer left zone -->
  <div class="col-8 p-0 h-100 bordo">
    <!-- Row for the unordered list -->
    <div class="row h-100 w-100 m-0 flex-wrap">
      <!-- Footer logo -->
      <div class="col-3 h-75 p-0 footer_logo">
        <img src="@/assets/img/h_logo.png" alt="Logo nel footer" srcset="" />
      </div>
      <!-- Queste liste qua sotto sono un unico componente 
      che si ripete più volte grazie a props, ma cambiando il ciclo del suo array/oggetto -->
      <!-- Azienda -->
      <div class="col-3 h-75 p-0 footer_azienda">
        <ul>
          <li class="title"><a href="#">Azienda</a></li>
          <li><a href="#">Chi Siamo</a></li>
          <li><a href="#">Opportunità di lavoro</a></li>
          <li><a href="#">For The Record</a></li>
        </ul>
      </div>
      <!-- Community -->
      <div class="col-3 h-75 p-0 footer_azienda">
        <ul>
          <li class="title"><a href="#">Community</a></li>
          <li><a href="#">Per Artisti</a></li>
          <li><a href="#">Sviluppatori</a></li>
          <li><a href="#">Pubblicità</a></li>
          <li><a href="#">Link Utili</a></li>
          <li><a href="#">Venditori</a></li>
        </ul>
      </div>
      <!-- Link Utili -->
      <div class="col-3 h-75 p-0 footer_azienda">
        <ul>
          <li class="title"><a href="#">Link Utili</a></li>
          <li><a href="#">Assistenza</a></li>
          <li><a href="#">Sviluppatori</a></li>
          <li><a href="#">App per cellulare gratuita</a></li>
          <li><a href="#">Diritti del consumatore</a></li>
        </ul>
      </div>
      <!-- Information -->
      <div class="col-12 h-25 bordo">Informazioni legali</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterRightZone",
};
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import "@/assets/sass/partials/footer.scss";
</style>
