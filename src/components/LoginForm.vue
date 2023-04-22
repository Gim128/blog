<template>
    <div>
        <input type="text" v-model="LoginForm.username" placeholder="Enter User name" /> <br><br>
        <input type="text" v-model="LoginForm.password" placeholder="Enter Password" /><br><br>
        <button v-on:click="loginbtn">Login</button>
    </div>
</template>

<script>
    export default {
        name:'LoginformComponent',

        data(){
            return{
                LoginForm: {
                    username: null,
                    password: null
                }
            }
        },

        methods:{
            loginbtn(){
                console.log("login btn called", this.LoginForm.username, this.LoginForm.password)
            }
            
        }
    }
</script>

<style scoped>

</style>