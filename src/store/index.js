import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let profile = {};
let bank = {};
let wallet = {};

export default new Vuex.Store({
  state: {
    layout: null,
    authToken: null,
    role: null,
    user: { profile, bank, wallet }
  },
  mutations: {
    SET_LAYOUT (state, payload) {
      state.layout = payload;
    },
    SET_AUTHTOKEN (state, payload) {
      state.authToken = payload;
    },
    SET_ROLE (state, payload) {
      state.role = payload;
    },
    SET_USER_PROFILE(state, payload) {
      state.user.profile = payload;
    },
    SET_USER_BANK(state, payload) {
      state.user.bank = payload;
    },
    SET_USER_WALLET(state, payload) {
      state.user.wallet = payload;
    }
  },
  actions: {},
  modules: {}
});
