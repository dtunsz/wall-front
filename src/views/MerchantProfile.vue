<template>
  <div class="app merchant-ui">
      <MobileView />
      <div class="flex">
          <SideMenu />
          <div class="content">
              <TopBar />

              <!-- component to render comes here -->

              <MProfile />

          </div>
      </div>
  </div>
</template>

<script>
import MobileView from "@/components/layouts/merchant-layout/MobileView.vue";
import SideMenu from "@/components/layouts/merchant-layout/SideMenu.vue";
import TopBar from "@/components/layouts/merchant-layout/TopBar.vue";
import MProfile from "@/components/merchant/profile/MProfile.vue";


export default {
    name: "MerchantProfile",
    components: {
        MobileView,
        SideMenu,
        TopBar,
        MProfile
    }

}
</script>

<style scoped>
    @import url('../css/app.css');
</style>
