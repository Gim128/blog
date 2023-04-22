<template>
  <div>
    <ChildComponent />
  </div>
</template>

<script>

import ChildComponent from './ChildComponent.vue';

export default {
    name: 'HomeComponent',

    methods:{
      
    },

    data(){
      return{
        
      }
    },

    beforeCreate:function(){
      console.warn('beforeCreate');
    },
    created:function(){
      console.warn('Created')
    },
    beforeMount:function(){
      console.warn('beforeMount ')
    },
    mounted:function(){
      console.warn('Mount ')
    },
   
    components: {
    ChildComponent
},

    

    
}
</script>

<style>

</style>