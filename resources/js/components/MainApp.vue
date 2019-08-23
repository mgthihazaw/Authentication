<template>
    <div >
        <header-component></header-component>
        <div class="content">
           <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderComponent from './layouts/HeaderComponent.vue'
    export default {
       components: {
           HeaderComponent
       }
    }
</script>
