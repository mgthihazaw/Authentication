
<template>
    <div class="login row justify-content-center  ">
      <div class="col-md-6">
                  <h3 class=" text-primary">New Customer</h3>
                  <form class="container" @submit.prevent="create">
                      <div class="form-group row">
                          <label for="name" class=" text-dark">Name</label>
                          <input type="text" id="name" class="form-control" v-model="form.name">
                      </div>
                      <div class="form-group row">
                          <label for="email" class=" text-dark">Email</label>
                          <input type="email" id="email" class="form-control" v-model="form.email">
                      </div>
                      <div class="form-group row">
                          <label for="phone" class=" text-dark">Phone</label>
                          <input type="text" id="phone" class="form-control" v-model="form.phone">
                      </div>
                      <div class="form-group row">
                          <label for="website" class=" text-dark">Website</label>
                          <input type="text" id="email" class="form-control" v-model="form.website">
                      </div>
                      <p class="text-danger my-3">{{error}}</p>
                      <div class="form-group row">
                          <button type="submit" class="btn btn-block btn-success py-2">Create</button>
                      </div>
                  </form>
              
      </div>
  </div>
</template>

<script>

export default {
    data(){
        return {
            form : {
                name : '',
                email : '',
                phone : '',
                website : ''
            },
            error : ''
        }
        
    },
    methods: {
            create(){
                axios.post('/api/customers',this.form)
            .then(response => {
                this.$router.push('/customers')
                
            })
            }
        }
}
</script>