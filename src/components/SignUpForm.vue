<template>
    <div>
        <h1>Signup Form</h1>
        <input type="text" placeholder="Enter your name" v-model="signupformCompo.name"><br><br>
        <input type="password" placeholder="Enter your password" v-model="signupformCompo.password"><br><br>
        <p>Hobbies</p>
        <input type="checkbox" id="travel" value="travel" v-model="signupformCompo.hobbies">
        <Layout for="travel">Travel</Layout>
        <br><br>

        <input type="checkbox" id="gaming" v-model="signupformCompo.hobbies" value="gaming">
        <Layout for="gaming">Gaming</Layout>
        <br><br>

        <input type="checkbox" id="drifting" v-model="signupformCompo.hobbies" value="drifting">
        <Layout for="drifting">Drifting</Layout>
        <br><br>

        <p>Gender</p>
        <input type="radio" id="male" v-model="signupformCompo.gender" value="male">
        <Layout for="male">Male</Layout>
        <br><br>

        <input type="radio" id="female" v-model="signupformCompo.gender" value="female">
        <Layout for="female">Female</Layout>
        <br><br>

        <button v-on:click="signup">Sign Up</button>



    </div>
</template>

<script>
    export default {
        name: 'signupformCompo',

        data(){
            return{
                signupformCompo: {
                    name: null,
                    password: null,
                    hobbies:[],
                    gender:null,
                }
            }
        },

        methods: {
            signup(){
                console.warn(this.signupformCompo)
                // console.warn(this.signupformCompo.name, this.signupformCompo.password, this.signupformCompo.hobbies, this.signupformCompo.gender)
            }
        }
    }
</script>

<style scoped>

</style>