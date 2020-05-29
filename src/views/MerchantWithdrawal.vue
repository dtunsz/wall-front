<template>
    <div class="app merchant-ui">
        <MobileView />
        <div class="flex">
            <SideMenu />
            <div class="content">
                <TopBar />

                <!-- component to render comes here -->

                <MWithdrawal v-bind:wallet="wallet" />

            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
import MobileView from "@/components/layouts/merchant-layout/MobileView.vue";
import SideMenu from "@/components/layouts/merchant-layout/SideMenu.vue";
import TopBar from "@/components/layouts/merchant-layout/TopBar.vue";
import MWithdrawal from "@/components/merchant/withdrawal/MWithdrawal.vue";

export default {
    name: "MerchantWithdrawal",
    components: {
        MobileView,
        SideMenu,
        TopBar,
        MWithdrawal
    },
    // mounted() {
    //     axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (
    //     //   this.info = response
    //         console.log(response)
    //       ))
    // },
    computed: {
        wallet() {
            return this.$store.state.user.wallet
        }
    }


}
</script>

<style scoped>
    @import url('../css/app.css');
</style>
