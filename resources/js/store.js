export const storeData = {
    state: {
        message : 'Welcome to my vue application'
    },
    getters: {
        welcome(state){
            return state.message;
        }
    },
    mutations: {
     
    },
    actions: {
      increment (context) {
        context.commit('increment')
      }
    }
  }