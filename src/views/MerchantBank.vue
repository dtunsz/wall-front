<template>
  <div class="app merchant-ui">
      <MobileView />
      <div class="flex">
          <SideMenu />
          <div class="content">
              <TopBar />

              <!-- component to render comes here -->

              <MBank />

          </div>
      </div>
  </div>
</template>

<script>
import MobileView from "@/components/layouts/merchant-layout/MobileView.vue";
import SideMenu from "@/components/layouts/merchant-layout/SideMenu.vue";
import TopBar from "@/components/layouts/merchant-layout/TopBar.vue";
import MBank from "@/components/merchant/bank/MBank.vue";


export default {
    name: "MerchantBank",
    components: {
        MobileView,
        SideMenu,
        TopBar,
        MBank
    }

}
</script>

<style scoped>
    @import url('../css/app.css');
</style>
