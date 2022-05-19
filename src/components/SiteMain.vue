<template>
    <!-- SiteMain divided by components -->
    <div class="container-fluid p-0 m-0" id="site_main">
        <!-- /#site_price -->
        <SitePrice />
        <!-- /#site_listening -->   
        <SiteListening /> 
    </div>
</template>

<script>
/* Import dei Componenti */
import SitePrice from '@/components/SitePrice.vue'
import SiteListening from '@/components/SiteListening.vue'

export default {
    name: "SiteMain",
    components : {
        SitePrice,
        SiteListening
    }
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/main.scss';
</style>