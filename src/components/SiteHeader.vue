<template>
    <!-- Header Goes Here -->
    <div id="site_header">
        <div :class="head_cont">
            <div :class="head_row">
                <!-- Logo image -->
                <div :class="logo_classes">
                    <img :src="logo_img" :alt="logo_desc">
                </div>
                <!-- Navbar Features -->
                <div :class="nav_cont">
                    <ul :class="list_cont">
                        <li v-for="(element, index) in nav_comp" :key="index" class="p-0"><a :href="element.ref">{{element.desc}}</a></li>
                    </ul>                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteHeader",
    data() {
        return {
        /* Classi Dinamiche */
        head_cont : "container-xl p-0 h-100",
        head_row : "row h-100 w-100 p-0 m-0 flex_bet",
        /* Logo Class */
        logo_classes : "col-2 h-100 d-flex justify-content-start align-items-center",
        logo_img: require("@/assets/img/h_logo.png"),
        logo_desc : "Logo Spotify",
        /* Navbar Classes */
        nav_cont : "col-5 p-0 h-100 flex_cent",
        list_cont : "flex_cent flex-row gap-5 m-0 p-0",
        nav_comp : [   
            {
                ref : "#",
                desc : "Premium"
            },
            {
                ref : "#",
                desc : "Assistenza"
            },
            {
                ref : "#",
                desc : "Scarica"
            },
            {
                ref : "#",
                desc : "Iscriviti"
            },
            {
                ref : "#",
                desc : "Accedi"
            },            
        ]
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';
</style>