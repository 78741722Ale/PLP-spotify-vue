<template>
  <div class="col-3 h-75 p-0 footer_azienda">
    <ul class="pt-2">
      <li class="title">{{ title }}</li>
      <li v-for="(element, index) in community" :key="index"><a :href="element.ref">{{ element.text }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterListComponent",
  data() {
    return {
      /* Struttura dati Titolo - Community */
      title : "Community",
      /* Struttura dati v-for - Community */
      community : [
        /* Titolo Azienda */
        {
          ref : "#",
          text : "Per Artisti",
        },
        {
          ref : "#",
          text : "Sviluppatori",
        },
        {
          ref : "#",
          text : "Pubblicità",
        },
        {
          ref : "#",
          text : "Link Utili",
        },
        {
          ref : "#",
          text : "Venditori",
        },
      ],
    };
  },
};
</script>