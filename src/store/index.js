import Vue from "vue";
import Vuex from "vuex";

import actions from "@/store/actions";
import store from "@/store/store";
import mutations from "@/store/mutations";

import dishes from "@/store/modules/dishes.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dishes:dishes
  },
  store: store,
  mutations: mutations,
  actions: actions
});