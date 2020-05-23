<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <Choose /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import Choose from "@/components/Choose.vue";


export default {
  name: "Home",
  components: {
    HelloWorld
    // Choose
  }
};
</script>
