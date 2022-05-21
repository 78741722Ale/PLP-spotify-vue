<template>
    <div id="site_listening">
        <div :class="listening_cont">
            <!-- Listening in Everything -->
            <div :class="listening_row">
                <!-- Listening is everything specs -->
                <div :class="listening_specs_col">
                    <!-- Title Spotify Free -->
                    <h5 class="text-uppercase pb-4">{{listening_subtitle}}</h5>
                    <!-- Title Listening -->
                    <h1 class="pt-1 pb-4">{{listening_title}}</h1>
                    <!-- Listening Text -->
                    <p class="pb-4">{{listening_p}}</p>
                    <!-- Listening Button -->
                    <button>{{listening_btn}}</button>
                </div>
            </div>
        </div>
        <!-- Having no image available (but only screen) the only way to reproduce the desktop version is this -->
        <img :src="img_site_listening" :alt="img_site_listening_desc">
    </div>
</template>

<script>
export default {
    name:"SiteListening",
    /* Dynamics data */
    data() {
        return {
        /* Classi Dinamiche - Listening */
        listening_cont : "h-100 container-xl listening_row_cont",
        listening_row : "row w-50 h-75 p-0 m-0 flex_cent",
        listening_specs_col : "col-12 h-100 listening_specs",
        /* Classi Dinamiche - jumbo Image */
        img_site_listening : require("@/assets/img/listening.png"),
        img_site_listening_desc : "Listening Image",
        /* Dati dinamici */
        listening_subtitle : "Spotify Free",
        listening_title : "Listening is everything",
        listening_p : "Milioni di brani e podcast. Senza alcuna carta di credito.",
        listening_btn : "Scarica spotify Free",
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import style sheet from partials */
@import '@/assets/sass/partials/main.scss';
</style>