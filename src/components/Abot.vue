<template>
  <div class="about">
    <h1>About Us</h1>
    <Users />
    <products />
  </div>
</template>

<script>

import Users from './User.vue' 
import Products from './Products.vue'

export default {
    
    name: 'AboutComponent',
    components: {
        Users,
        Products
     },
}
</script>

<style scoped>
    .about{
        background-color: blue;
        height: 500px;
        
    }
</style>