<template>
    <div>
        <form @submit="PostData" method="post"> 
            <input type="text" name="author" placeholder="Author" v-model="posts.author"> <br> <br>
            <input type="text" name="Title" placeholder="Title" v-model="posts.title"> <br> <br>
            <button type="submit">POST</button>
        </form>
    </div>
</template>

<script>

import axios from 'axios';

    export default {
        name: "PostComponent",

        data(){
            return{
                posts: {
                    title: null,
                    author: null,
                }
            }
        },

        methods: {
            // PostData(e){
            //     axios.get("http://localhost:3000/posts/", this.posts)
            //     .then((result) => {
            //         console.warn(result);
            //     })
            //     e.preventDefault();
                
            // }
        },

        mounted(e) {
                axios.get("http://localhost:3000/posts/", this.posts)
                .then((result) => {
                    console.warn(result);
                })
                e.preventDefault();  
        },

    }

    


</script>

<style scoped>

</style>