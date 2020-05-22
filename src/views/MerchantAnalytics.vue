<template>
  <div>
    <p>This is the Merchant Analytics Page</p>
    <Liner />
    <Analytics />
  </div>
</template>

<script>
// @ is an alias to /src
import Liner from "@/components/merchant/analytics/Liner.vue";
import Analytics from "@/components/merchant/analytics/Analytics.vue";

export default {
  name: "MerchantAnalytics",
  components: {
    Liner,
    Analytics
  }
};
</script>