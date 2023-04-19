<template>
  <div>
    <h1>Hello from Home</h1>
    <table border="2px">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td> 
        </tr>

        <tr v-for="user in users" :key="user.id">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email }}</td> 
        </tr>

    </table>
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
            users: [
                {id:1, name:'Peter', email:'peter@gmail.com'},
                {id:2, name:'pakaya', email:'pakaya@gmail.com'},
                {id:3, name:'hutta', email:'hutta@gmail.com'},
                {id:4, name:'Kariya', email:'kariya@gmail.com'},
                {id:5, name:'pinnaya', email:'pinnaya@gmail.com'},
            ]
        }
    },

}
</script>

<style>

</style>