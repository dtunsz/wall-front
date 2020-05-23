<template>
  <div>
    <p>Welcome to WallX</p>
    <div>
      <h5>Already Have an account</h5>
      <Login />
    </div>
    <br />
    <hr />
    <div>
      <h5>Create an account with WallX</h5>
      <Register />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";

export default {
  name: "Auth",
  components: {
    Login,
    Register
  }
};
</script>