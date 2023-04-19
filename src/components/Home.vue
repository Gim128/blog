<template>
  <div>
    <h1>Hello from Home</h1>
    <button v-on:click="hello">Touch me</button>
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
        }
    }
}
</script>

<style>

</style>