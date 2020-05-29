<template>
  <div class="app merchant-ui">
        <MobileView />
        <div class="flex">
            <SideMenu />
            <div class="content">
                <TopBar />

                <!-- component to render comes here -->

                <MSupervisor />

            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import MobileView from "@/components/layouts/merchant-layout/MobileView.vue";
import SideMenu from "@/components/layouts/merchant-layout/SideMenu.vue";
import TopBar from "@/components/layouts/merchant-layout/TopBar.vue";
import MSupervisor from "@/components/merchant/supervisor/MSupervisor.vue";

export default {
    name: "MerchantSupervisor",
    components: {
        MobileView,
        SideMenu,
        TopBar,
        MSupervisor
    },
    mounted() {
    //   let data = {
    //     email: "dtunsz@gmail.com",
    //     password: "dtunsz22"
    //   }
      axios
      .post(`https://appwallx.herokuapp.com/api/user/login`, {
        //   ...data
        email: "devcenterinnovationltd@gmail.com",
        password: "123asdf+++"
      })
      .then(response => (
        //   this.info = response
            console.log(response)
          ))
    }
}
</script>

<style scoped>
    @import url('../css/app.css');
</style>
