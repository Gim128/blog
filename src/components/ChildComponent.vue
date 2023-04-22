<template>
    <div>
        <h1>child component</h1>  
        <h3 v-for="user in users" :key="user.email">{{ user.email}}</h3>
    </div>
</template>

<script>
    export default {
        name: 'ChildComponent',
        props: [
            'users'
        ]
       
    }
</script>

<style scoped>

</style>