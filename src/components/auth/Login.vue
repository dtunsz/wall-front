<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
        <div class="card card-primary">
          <div class="card-header">
            <h4>Login</h4>
          </div>
          <div class="card-body">
            <form @submit="doLogin" class="needs-validation" novalidate="">
              <div class="form-group">
                <label for="email">Email</label>
                <input id="email" v-model="email" type="email" class="form-control" name="email" tabindex="1" required autofocus>
                <div class="invalid-feedback">
                  Please fill in your email
                </div>
              </div>
              <div class="form-group">
                <div class="d-block">
                  <label for="password" class="control-label">Password</label>
                  <div class="float-right">
                    <a href="auth-forgot-password.html" class="text-small">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <input id="password" v-model="password" type="password" class="form-control" name="password" tabindex="2" required>
                <div class="invalid-feedback">
                  please fill in your password
                </div>
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" name="remember" class="custom-control-input" tabindex="3" id="remember-me">
                  <label class="custom-control-label" for="remember-me">Remember Me</label>
                </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4">
                  Login
                </button>
              </div>
              <p class="failed-msg">{{ loginError }}</p>
            </form>
            <div class="text-center mt-4 mb-3">
              <div class="text-job text-muted">Login With Social</div>
            </div>
            <div class="row sm-gutters">
              <div class="col-6">
                <a class="btn btn-block btn-social btn-facebook">
                  <span class="fab fa-facebook"></span> Facebook
                </a>
              </div>
              <div class="col-6">
                <a class="btn btn-block btn-social btn-twitter">
                  <span class="fab fa-twitter"></span> Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 text-muted text-center">
          Don't have an account? <a href="auth-register.html">Create One</a>
        </div>



        <!-- <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p> -->
        
        <!-- <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
          <div class="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
              <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                  Sign In
              </h2>
              <div class="intro-x mt-2 text-gray-500 xl:hidden text-center">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</div>
              <div class="intro-x mt-8">
                  <input type="text" class="intro-x login__input input input--lg border border-gray-300 block" placeholder="Email">
                  <input type="password" class="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder="Password">
              </div>
              <div class="intro-x flex text-gray-700 text-xs sm:text-sm mt-4">
                  <div class="flex items-center mr-auto">
                      <input type="checkbox" class="input border mr-2" id="remember-me">
                      <label class="cursor-pointer select-none" for="remember-me">Remember me</label>
                  </div>
                  <a href="">Forgot Password?</a> 
              </div>
              <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                  <button class="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3">Login</button>
                  <button class="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0">Sign up</button>
              </div>
              <div class="intro-x mt-10 xl:mt-24 text-gray-700 text-center xl:text-left">
                  By signin up, you agree to our 
                  <br>
                  <a class="text-theme-1" href="">Terms and Conditions</a> & <a class="text-theme-1" href="">Privacy Policy</a> 
              </div>
          </div>
      </div> -->

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data: function()  {
    return {
    error: [],
    email: null,
    password: null,
    // authToken: null,
    loginError: null,
    }
  },
  methods: {
    doLogin (e) {
      e.preventDefault();
      console.log(this.email);
      console.log(this.password);
      axios
      .post(`https://appwallx.herokuapp.com/api/user/login`, {
        email: this.email, password: this.password
      })
      .then( (res) => {
        // console.log(res);
        let data = res.data;
        if (data.data === null) {
          this.loginError = "Invalid Email or Password";
        }
          else{
          console.log(data);
          let profile = {};
          profile.email = data.data.email;
          profile.name = data.data.name;
          profile.userId = data.data.id;
          profile.profileImage = data.data.profile_image;
          profile.status = data.data.status;
          profile.nickname = data.data.nickname;
          profile.country = data.data.country_code;
          profile.mobilePrefix = data.data.country_tel_prefix;
          profile.mobile = data.data.tel_number
          profile.refreshToken = data.data.refresh_token;
          profile.currency = data.data.user_currency;


          this.$store.commit('SET_ROLE', data.data.role)
          this.$store.commit('SET_AUTHTOKEN', data.data.auth_token)
          this.$store.commit('SET_USER_BANK', data.data.bankdetails)
          this.$store.commit('SET_USER_WALLET', data.data.wallet_data)
          this.$store.commit('SET_USER_PROFILE', profile)
          //remain to set user profile
          
        
          console.log(this.$store.state.role)
          console.log(this.$store.state.authToken);
          console.log(this.$store.state.user.profile);
          console.log(this.$store.state.user.bank);
          console.log(this.$store.state.user.wallet);
          

          if (this.$store.state.authToken !== null) {
            this.$router.push({name: "MerchantAnalytics"})
          }
        // else{
        //   this.$router.push({name: "MerchantAnalytics"})
        // }
        }

      })
      .catch( (err) => {
        // console.log(err);
        this.loginError = err;
      })
    }
  }
}
</script>

<style scoped>
  .failed-msg{
    color: red !important;
    text-align: center !important;
  }
</style>



