<template>
  <div>
    <h1>{{ title }}</h1>
    <ChildComponent v-on:changeTitle="updateTitleText($event)" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
    name: 'HomeComponent',
   
    components: {
    ChildComponent
},

    data(){
      return {
        title: 'Child to Parent Data',
      }
    },

    methods: {
      updateTitleText(title) {
        this.title = title
      }

    }
}
</script>

<style>

</style>