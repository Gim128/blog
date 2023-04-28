<template>
  <div>
    <h1 id="demo">{{ name }}</h1>
    <EmployeeList /> 
  </div>
</template>

<script>
import EmployeeList from './EmployeeList.vue';

export default {
  name: "HomeComponent",

  methods: {},

  data() {
    return {
      name: "Fetch Data From API",
    };
  },

  // beforeCreate:function(){
  //   console.warn('beforeCreate', this.name);
  // },
  // created:function(){
  //   this.name = "Leo"
  //   console.warn('Created', this.name)
  // },
  // beforeMount:function(){
  //   console.warn('beforeMount', document.getElementById('demo'))
  // },
  // mounted:function(){
  //   console.warn('Mount', document.getElementById('demo'))
  // },
  // beforeDestroy() {
  //   alert("beforeDestroy method called")
  // },

  // destroyed() {
  //   alert("Destroyed method called")
  // },

  components: { EmployeeList },
};
</script>

<style></style>
