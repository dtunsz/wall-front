<template>
  <div class="light light-sidebar theme-white">
    <Login />
    <!-- <p>Welcome to WallX</p>
    <div>
      <h5>Already Have an account</h5>
      <Login />
    </div>
    <br />
    <hr />
    <div>
      <h5>Create an account with WallX</h5>
      <Register />
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/auth/Login.vue";
// import Register from "@/components/auth/Register.vue";

export default {
  name: "Auth",
  components: {
    Login,
    // Register
  }
};
</script>

<style scoped>
  /* @import url("../css/app.css"); */
  @import url("../css/app.min.css");
  @import url("../css/style.css");
  @import url("../css/components.css");


  /* .theme-white .card.card-primary {
    border-top: 2px solid #6777ef;
}
.card .card-header {
    border-bottom-color: #f9f9f9;
    line-height: 30px;
    -ms-grid-row-align: center;
    -ms-flex-item-align: center;
    align-self: center;
    width: 100%;
    padding: 10px 25px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.card .card-header, .card .card-body, .card .card-footer {
    background-color: transparent;
    padding: 20px 25px;
}

.card .card-body {
    padding-top: 20px;
    padding-bottom: 20px;
}
.card .card-header, .card .card-body, .card .card-footer {
    background-color: transparent;
    padding: 20px 25px;
}

.form-group .control-label, .form-group > label {
    font-weight: 600;
    color: #34395e;
    font-size: 12px;
    letter-spacing: 0.5px;
}
.input-group-text, select.form-control:not([size]):not([multiple]), .form-control:not(.form-control-sm):not(.form-control-lg) {
    font-size: 14px;
    padding: 10px 15px;
    height: 42px;
}
.text-small {
    font-size: 12px;
    line-height: 20px;
}
.theme-white .btn-primary {
    background-color: #6777ef;
    border-color: transparent !important;
    color: #fff;
}
.btn.btn-lg {
    padding: 0.55rem 1.5rem;
    font-size: 12px;
} */
body{
  background-color:#5b4f96 !important;

    /* background: #5b4f96; */

}
.it{
  background-color:#5b4f96 !important;

}
</style>