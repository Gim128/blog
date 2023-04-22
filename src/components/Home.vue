<template>
  <div>
    <h1>{{ title }}</h1>
    <ChildComponent v-bind:users=users />
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
       users:[
        {name: 'Gimhan Praba', email:'gimhan@gmail.com'},
        {name: 'Santhush Praba', email:'santhusn@gmail.com'},
        {name: 'Jeewan Praba', email:'jeewan@gmail.com'},
        {name: 'Raveen Praba', email:'raveenn@gmail.com'},
       ]
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