<template>
  <!-- Component for "Links"  -->
  <div class="col-3 h-75 p-0 footer_azienda">
    <ul class="pt-2">
      <li class="title">{{ title }}</li>
      <li v-for="(element, index) in links" :key="index"><a :href="element.ref">{{ element.text }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterListComponent",
  data() {
    return {
      /* Data structure - Link Utili */
      title : "Link Utili",
      links : [
        {
          ref : "#",
          text : "Assistenza",
        },
        {
          ref : "#",
          text : "Sviluppatori",
        },
        {
          ref : "#",
          text : "App per cellulare gratuita",
        },
        {
          ref : "#",
          text : "Diritti del consumatore",
        },
      ], 
    };
  },
};
</script>