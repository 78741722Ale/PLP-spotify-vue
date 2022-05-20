<template>
    <!-- sitemain Goes Here -->
    <div id="site_footer">
        <div class="container-xl footer_cont">
            <div class="row h-75 w-100 m-0">
                <!-- Footer left zone -->
                <FooterLeftZone />
                <!-- Footer Rigth zone -->
                <FooterRigthZone />
            </div>
        </div>
    </div>
</template>

<script>
/* Import dei componenti */
import FooterLeftZone from '@/components/footer/FooterLeftZone.vue'
import FooterRigthZone from '@/components/footer/FooterRigthZone.vue'


export default {
    name: "SiteFooter",
    components : {
        FooterLeftZone,
        FooterRigthZone
    }
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/footer.scss';
</style>