<template>
    <!-- sitemain Goes Here -->
    <div id="site_footer">
        <div class="container-xl footer_cont">
            <div class="row h-75 w-100 m-0">
                <!-- unordered list zone -->
                <div class="col-8 p-0 h-100 bordo">
                    <!-- Row for the unordered list -->
                    <div class="row h-100 w-100 m-0 flex-wrap">
                        <!-- Footer logo -->
                        <div class="col-3 h-75 bordo">Footer logo</div>
                        <!-- Azienda -->
                        <div class="col-3 h-75 bordo">Azienda</div>
                        <!-- Community -->
                        <div class="col-3 h-75 bordo">Community</div>
                        <!-- Link Utili -->
                        <div class="col-3 h-75 bordo">Link Utili</div>
                        <!-- Information -->
                        <div class="col-12 h-25 bordo">Informazioni legali</div>
                    </div>
                </div>
                <!-- brands zone -->
                <div class="col-4 p-0 h-100">
                    <!-- Row for the brands list -->
                    <div class="row h-100 w-100 m-0 brands bordo">
                        <!-- Brands -->
                        <div class="col-12 h-25 bordo">Brands Zone</div>
                        <!-- Zone -->
                        <div class="col-12 h-25 bordo">Client Zone</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteFooter"
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/footer.scss';
</style>