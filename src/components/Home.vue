<template>
  <div>
    <h1 id="demo">{{ name }}</h1>
    <PostComponnet />
  </div>
</template>

<script>
import PostComponnet from './PostComponent.vue';


export default {
  name: "HomeComponent",

  methods: {},

  data() {
    return {
      name: "Submit Form Data to API",
    };
  },

  components: {
    PostComponnet
},
};
</script>

<style></style>
