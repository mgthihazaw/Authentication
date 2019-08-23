

require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './router'
import MainApp from './components/MainApp.vue'
import {storeData} from './store.js'

Vue.use(VueRouter);
Vue.use(Vuex)

const store = new Vuex.Store(storeData)

const router = new VueRouter({
    routes,
    mode : 'history'
});



// Vue.component('main-app', require('./components/MainApp').default);
const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        MainApp,
    }
});
