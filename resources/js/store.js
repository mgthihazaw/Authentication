
import {getLocalUser} from './helper/auth';

const user=getLocalUser();
export const storeData = {
    state: {
        currentUser : user,
        isLoggedIn : !!user,
        loading: false,
        auth_error: '',
        customers: []
    },
    getters: {
        isLoading(state){
            return state.loading;
        },
        isLoggedIn(state){
            return state.isLoggedIn;
        },
        currentUser(state){
            return state.currentUser
        },
        authError(state){
            return state.auth_error;
        },
        customers(state){
            return state.customers
        }
    },
    mutations: {
        login(state) {
            state.loading = true;
            state.auth_error = '';
        },
        loginSuccess(state, payload){
    
            state.auth_error = '';
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = {...payload.user,...{token : payload.access_token}}
            console.log(payload)
            localStorage.setItem("user",JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload){
            state.loading = false;
            state.auth_error = payload.error;

        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.currentUser = ''
        },
        updateCustomers(state,payload){
            state.customers = payload
        }

     
    },
    actions: {
        login(context) {
            context.commit("login");
        },
        getCustomers(context){
            axios.get('/api/customers')
            .then(response => {
                context.commit('updateCustomers',response.data.customers)
            })

        },
        newCustomer(context,data){
            axios.post('/api/customers',data)
            .then(response => {
                console.log(response)
                
            })
        }
      
    }
  }