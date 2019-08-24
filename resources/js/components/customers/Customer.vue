
<template>
    <div>
        
        <div class="user-info">
            <table class="table table-borderless">
                <tr>
                    <td rowspan="5"><img src="/pp.jpg" alt=""></td>
                    <th>ID</th>
                    <td>{{ customer.id}}</td>
                    
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{{ customer.name}}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ customer.email}}</td>
                </tr>
                <tr>
                    <th>Phone No.</th>
                    <td>{{ customer.phone}}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{{ customer.website }}</td>
                </tr>
                
            </table>
            <button class="btn btn-secondary text-primay" @click="$router.back()">back</button>
        </div>
    </div>
</template>

<script>

export default {
       data(){
            return {
                customer : ''
            }
       },
       created(){
           axios.get(`/api/customers/${this.$route.params.id}`)
           .then(res => {
               this.customer = res.data
           })
       }
}
</script>