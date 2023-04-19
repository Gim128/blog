<template>
  <div>
    <p v-html="header"></p>
    <h1>Template in vuejs</h1>
    <h2 v-once>{{ name }}</h2>
    <h2>{{ name1 }}</h2>
    <button v-bind:disabled="btnDisable" v-on:click="hello">Click me</button>
    <h3>{{ ok? "yes":"no" }}</h3>
  </div>
</template>

<script>


export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "templateview",
    data(){
        return{
            name: "Mahinda",
            name1: "Rajapaksha",
            ok:true,
            header: "<h1>Insert HTML in Vuejs</h1>",
            btnDisable: true
        }
    },
    methods: {
        hello(){
            // alert("Thanks for Click")
            // this.name1="Hora" 
            this.ok=!this.ok

        }
    }
        
};
</script>

<style>

</style>