<template>
  <div id="appi">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/admin/analytics">Admin</router-link> | -->
      <router-link to="/auth">Auth</router-link> |
      <router-link to="/merchant/bank">Merchant</router-link>
    
    </div>
    <router-view />
  </div>
  <!-- <div>
    <div>
      <component v-bind:is="layout"></component>
    </div>
    <router-view />
  </div> -->
</template>

<script>
// import AdminUi from '@/layouts/AdminUi.vue'
// import MerchantUi from '@/layouts/MerchantUi.vue'

// export default {
//   computed: {
//     layout () {
//       return this.$store.state.layout
//     }
//   },
//   components: {
//     'admin' : AdminUi,
//     'merchant' : MerchantUi
//   }
// }
</script>


<style lang="scss">
#appi {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  color: rgb(209, 196, 196);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    // color: #2c3e50;
      color: rgb(209, 196, 196);


    &.router-link-exact-active {
      color: #42b983;
      color: sandybrown;
    }
  }
}
</style>
