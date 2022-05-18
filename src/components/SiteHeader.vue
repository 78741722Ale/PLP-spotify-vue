<template>
    <!-- Header Goes Here -->
    <div id="site_header">
        <div class="container-xl p-0 bordo h-100">
            <div class="row h-100 w-100 p-0 m-0 bg_try flex_bet">
                <div class="col-2 h-100 flex_cent bg-info bordo">
                    Logo Goes Here
                </div>
                <div class="col-5 h-100 flex_cent bg-info bordo">
                    Navbar Goes Here
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteHeader"
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';
</style>