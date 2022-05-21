<template>
  <!-- Main macro components -->
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
/* Import of macro components */
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
/* Import style sheets */
@import '@/assets/sass/partials/app.scss';
@import '@/assets/sass/style.scss';
</style>
