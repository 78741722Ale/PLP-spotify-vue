<template>
  <div class="col-3 h-75 p-0 footer_azienda">
    <ul class="pt-2">
      <li class="title">{{ title }}</li>
      <li v-for="(element, index) in aziende" :key="index"><a :href="element.ref">{{ element.text }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterListComponent",
  data() {
    return {
      /* Struttura dati Titolo - Azienda */
      title : "Azienda",
      /* Struttura dati v-for - Azienda */
      aziende: [
        {
          ref: "#",
          text: "Chi Siamo",
        },
        {
          ref: "#",
          text: "Opportunità di lavoro",
        },
        {
          ref: "#",
          text: "For The Record",
        },
      ],
    };
  },
};
</script>