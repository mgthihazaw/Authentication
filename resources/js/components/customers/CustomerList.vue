
<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-if="customers.length > 0">
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>
               <router-link class="btn btn-primary" :to="'/customers/'+customer.id" >Show</router-link>
                
          </td>
        </tr>
      </tbody>
      <div class="text-center" v-else>No Customer is Avaiable</div>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    customers() {
      return this.$store.getters.customers;
    }
  },
  created() {
    this.$store.dispatch("getCustomers");
  }
};
</script>
