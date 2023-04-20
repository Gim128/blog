<template>
  <div>
    <h1 class="ddd">{{message}}</h1>
    <input class="sss" type="text" v-model="message" />
  </div>
</template>

<script>
export default {
    name: 'HomedataBind',

    // define a property
    data(){
        return{
            message: 'Hi',
        }
    }
}
</script>

<style scoped>
    .ddd{
        padding: 30px 30px 30px 943px;
    }
    .sss{
        padding: 30px 30px 30px 943px;
    }
</style>