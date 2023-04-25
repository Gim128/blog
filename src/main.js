import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'

Vue.filter('uppercase', function(v){
    return v.toUpperCase()
})

createApp(App).mount('#app')
