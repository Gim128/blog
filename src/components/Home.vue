<template>
  <div>
    <h1 id="demo">{{ name }}</h1>
    <ActiveBoot />
  </div>
</template>

<script>
import ActiveBoot from './ActiveBoot.vue';


export default {
  name: "HomeComponent",

  methods: {},

  data() {
    return {
      name: "Bootstrap with Vue",
    };
  },

  components: {
    ActiveBoot
},
};
</script>

<style></style>
