import Home from './components/Home.vue'
import Login from './components/auth/Login.vue'
import CustomersMain from './components/customers/CustomersMain.vue'
import CustomerList from './components/customers/CustomerList.vue'
import NewCustomer from './components/customers/NewCustomer.vue'
import Customer from './components/customers/Customer.vue'

export const routes = [

    {
        path: '/',
        component: Home,
         meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login 
    },
    { 
        path: '/customers',
        component: CustomersMain,
        meta : {
            requiresAuth: true
        },
        children: [
            {
                path : '/',
                component: CustomerList
            },
            {
                path : 'new',
                component : NewCustomer
            },
            {
                path : ':id',
                component: Customer
            }
        ]
            

        
     },


]