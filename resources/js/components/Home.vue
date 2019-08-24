
<template>
    <div class="container">
        
        Welcome to My Vue Application
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
           
       }
    }
</script>
