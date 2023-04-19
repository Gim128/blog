<template>
  <div>
    <h1 v-if="show">Hello from Home</h1>
    <h1 v-else>else side</h1>
    <!-- <button v-on:click="hello">Touch me</button> -->
    <button v-on:click="display">Toggle me!</button>
  </div>
</template>

<script>
export default {
    name: 'HomeComponent',
    props: {
        data: String,
        msg: String
    },
    methods:{
        hello(){
            alert("Hello function called!")
        },
        display(){
            this.show=!this.show
        }
    },
    data(){
        return {
            show: false
        }
    },

}
</script>

<style>

</style>