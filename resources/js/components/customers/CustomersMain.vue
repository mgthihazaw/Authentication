
<template>
    <div class="container_fluid">
        <div class="justify-content-center">
            <div >
                <div class="card card-default">
                    <div class="card-header"><router-link to="/customers">Customer</router-link> <router-link class="btn btn-primary" to="/customers/new">Add New</router-link></div>
                    <div class="card-body">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
       
}
</script>