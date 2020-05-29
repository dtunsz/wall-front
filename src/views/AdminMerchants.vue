<template>
    <div class="light light-sidebar theme-white">
        <!-- <h1>Admin</h1> -->
        <!-- <div class="loader"></div> -->
        <div id="app">
            <div class="main-wrapper main-wrapper-1">
            <TopView />
            <!-- Main Content -->
            <Merchant v-bind:merchants="merchants" />
            <!-- <Merchant />
            {{merchants}} -->
            <AdminFooter />
            </div>
        </div>
    </div>
</template>

<script>
import TopView from "@/components/layouts/admin-layout/TopView.vue"
import AdminFooter from "@/components/layouts/admin-layout/AdminFooter.vue"
import Merchant from "@/components/admin/merchants/Merchant.vue"
import axios from "axios"

export default {
    name: "AdminMerchants",
    components: {
        TopView,
        AdminFooter,
        Merchant
    },
    data() {
        return {
        merchants: [],
        }
    },
    mounted() {
        axios
      .get(`https://appwallx.herokuapp.com/api/merchant`)
      .then(response => {
        //   this.info = response
            // console.log(response)
            // console.log(response.data.data)
            // let all = response.json();
            // console.log(all);
            this.merchants = response.data.data;
            console.log(this.merchants)
        })
        .catch( err => {
            console.log(err)
        })
    },
}
</script>

<style>
    @import url("../css/app.min.css");
    @import url("../css/style.css");
    @import url("../css/components.css");
</style>
