<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>



export default {
    name: 'HomeComponent',

    methods:{
      
    },

    data(){
      return{
        name: "Gimhan pabasara"
      }
    },

    beforeCreate:function(){
      console.warn('beforeCreate', this.name);
    },
    created:function(){
      this.name = "Leo"
      console.warn('Created', this.name)
    },
    // beforeMount:function(){
    //   console.warn('beforeMount ')
    // },
    // mounted:function(){
    //   console.warn('Mount ')
    // },
   
    components: {

    },

    

    
}
</script>

<style>

</style>