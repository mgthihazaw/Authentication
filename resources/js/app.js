

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

router.beforeEach((to, from, next)=>{
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth );
    const currentUser = store.state.currentUser;

    if(requiresAuth && !currentUser){
        next('/login');
    }else if(to.path == '/login' && currentUser){
        next('/');
    }else {
        next()
    }
})


// Vue.component('main-app', require('./components/MainApp').default);
const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        MainApp,
    }
});
