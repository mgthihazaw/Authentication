
<template>
    <div class="container">
        {{ welcome }}
    </div>
</template>

<script>
    export default {
       name : 'home',
       computed: {
           welcome(){
               return this.$store.getters.welcome
           }
       }
    }
</script>
