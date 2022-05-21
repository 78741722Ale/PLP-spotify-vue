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
/* Import of Components */
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
/* Import style sheet from partials */
@import '@/assets/sass/partials/main.scss';
</style>