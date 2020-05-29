<template>
  <div class="app merchant-ui">
      <MobileView />
      <div class="flex">
          <SideMenu />
          <div class="content">
              <TopBar />

              <!-- component to render comes here -->

              <MAnalytics />

          </div>
      </div>
  </div>

  <!-- <div>
    <p>This is the Merchant Analytics Page</p>
    <Liner />
    <Analytics />
  </div> -->

</template>

<script>
// @ is an alias to /src
import MobileView from "@/components/layouts/merchant-layout/MobileView.vue";
import SideMenu from "@/components/layouts/merchant-layout/SideMenu.vue";
import TopBar from "@/components/layouts/merchant-layout/TopBar.vue";
import MAnalytics from "@/components/merchant/analytics/MAnalytics.vue";


export default {
    name: "MerchantAnalytics",
    components: {
        MobileView,
        SideMenu,
        TopBar,
        MAnalytics
    }

}
</script>

<style scoped>
    @import url('../css/app.css');
</style>
