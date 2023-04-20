<template>
  <div>
    <h1 class="vueStyle">Class & Style Bindings</h1>
    <h1 v-bind:style="{color: colorName}">Style Binding</h1>
    <h1 v-bind:class="{display:show, vueStyle:show}">Class with Object</h1>
    <h1 v-bind:class="[d, v]">Class with Array</h1>
    <h1 v-bind:class="['display', 'vueStyle']">Class with Array</h1>
    <h1 v-bind:class="[checkDisplay?d:v]">Class with Array</h1>
  </div>
</template>

<script>


export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "templateview",    
    data(){
        return{
            colorName:'skyblue',
            show:true,
            // whenm you use single quote to property from here
            d:'display',
            v:'vueStyle',
            checkDisplay:true

        }
    } 
};
</script>

<style scoped>
    .vueStyle{
        color: blue;
    }
    .display{
       
        background-color: khaki;
    }
</style>