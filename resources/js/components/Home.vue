
<template>
    <div class="container">
        
        <login></login>
    </div>
</template>

<script>
import Login from './auth/Login.vue';

    export default {
       name : 'home',
       components: {
           Login
       },
       computed: {
           welcome(){
               return this.$store.getters.welcome
           }
       }
    }
</script>
