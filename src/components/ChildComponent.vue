<template>
    <div>
        <button v-on:click="UpdatedTitle">Update Header</button>
    </div>
</template>

<script>
    export default {
        name: 'ChildComponent',

        methods: {
            UpdatedTitle(){
                this.$emit('changeTitle', 'Props has been passed')
            }
        }
    }
</script>

<style scoped>

</style>