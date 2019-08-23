<template>
  <div class="login row justify-content-center  mt-5">
      <div class="col-md-6">
          <div class="card bg-light">
              <div class="card-header"><h3>Login</h3></div>
              <div class="card-body">
                  <form class="container" @submit.prevent="authenticate">
                      <div class="form-group row">
                          <label for="email" class=" text-dark">Email</label>
                          <input type="email" id="email" class="form-control" v-model="form.email">
                      </div>
                      <div class="form-group row">
                          <label for="password" class=" text-dark">Password</label>
                          <input type="password" id="password" class="form-control" v-model="form.password">
                      </div>
                      <div class="form-group row">
                          <button type="submit" class="btn btn-block btn-success py-2">Login</button>
                      </div>
                  </form>
              </div>

          </div>
      </div>
  </div>
</template>

<script>
import {login} from '../../helper/auth.js'
export default {
    data(){
        return {
            form : {
                email : '',
                password : '',
            },
            error : ''
        }
    },
    methods: {
        authenticate(){
            this.$store.dispatch('login');

            login(this.form)
            .then(res => {
                console.log(res)
                this.$store.commit('loginSuccess',res)
                this.$router.push('/')
            })
            .catch(err => {
                this.$store.commit('loginFailed',err)
            })
        }
    }
};
</script>

<style  scoped>
</style>