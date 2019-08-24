
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Home</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              
              <span class="sr-only">(current)</span>
            </a>
          </li>
         <li class="nav-item">
            <router-link class="nav-link" to="/customers">Customer</router-link>
          </li>
        </ul>
        <div class=" dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ><span v-if="currentUser">{{ currentUser.name }}</span><span v-else>Customer</span></a>
            <div class="dropdown-menu mr-3" aria-labelledby="navbarDropdown">
              
              <div v-if="!currentUser">
                <router-link class="dropdown-item" to="/register">register</router-link>
                <router-link class="dropdown-item" to="/login">login</router-link>
              </div>
              <a class="dropdown-item"  @click.prevent="logout" v-else>logout</a>
            </div> 
          </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
 methods: {
    logout(){
      this.$store.commit('logout');
      this.$router.push('/login')
    }
 },
 computed : {
   
   currentUser(){
     return this.$store.getters.currentUser
   }
 }
};
</script>
