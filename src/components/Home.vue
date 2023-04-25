<template>
  <div>
    <h1 id="demo">{{ name }}</h1>
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

    // beforeCreate:function(){
    //   console.warn('beforeCreate', this.name);
    // },
    // created:function(){
    //   this.name = "Leo"
    //   console.warn('Created', this.name)
    // },
    beforeMount:function(){
      console.warn('beforeMount', document.getElementById('demo'))
    },
    mounted:function(){
      console.warn('Mount', document.getElementById('demo'))
    },
   
    components: {

    },

    

    
}
</script>

<style>

</style>