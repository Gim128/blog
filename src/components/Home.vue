<template>
  <div>
    <h1>Hello from Home</h1>
    <button v-on:click="hello('data')">Touch me</button>
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
        hello(item){
            // alert("Hello function called!")
            console.warn(item);
        }
    }
}
</script>

<style>

</style>