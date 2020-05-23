<template>
    <div class="app merchant-ui">
        <MobileView />
        <div class="flex">
            <SideMenu />
            <div class="content">
                <TopBar />

                <!-- component to render comes here -->

                <FirstLine />

            </div>
        </div>
    </div>
</template>

<script>
import MobileView from "@/components/layouts/merchant-layout/MobileView.vue";
import SideMenu from "@/components/layouts/merchant-layout/SideMenu.vue";
import TopBar from "@/components/layouts/merchant-layout/TopBar.vue";
import FirstLine from "@/components/merchant/bank/FirstLine.vue";


export default {
    name: "MerchantBank",
    components: {
        MobileView,
        SideMenu,
        TopBar,
        FirstLine
    }

}
</script>

<style>

</style>
