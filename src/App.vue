<template>
  <!-- MacroComponenti Principali -->
  <div id="app">
    <!-- Header -->
    <SiteHeader />
    <!-- Main -->
    <SiteMain />
    <!-- Footer -->
    <SiteFooter />
  </div>
</template>

<script>
/* Import dei macro componenti */
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
  }
}
</script>

<style lang="scss">
/* Foglio di stile principale racchiude ogni foglio di stile*/
@import '@/assets/sass/style.scss';
</style>
