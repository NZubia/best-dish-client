import dashboardApi from "../../api/dashboard.api";
import EventBus from '@/eventBus';

const state = {
  userName: "Prueba"
};
const getters = {
  getUserName: state => state.userName
};
const mutations = {
  SET_USER_NAME(state, userName){
    state.userName = userName;
  }
};
const actions = {
  getUserSession({ commit }, data) {

    dashboardApi.getUserSession({
      email: data.email
    },
        (result) => {
        commit("SET_USER_NAME", result.data.name);
    }, (error) => {
          EventBus.$emit('ERROR_GET_USER_NAME');
        // tShow(`Hubo un error al cargar el listado : ${error}`);
      });
  }
};

export default {
  namespaced: true,
  state: {
    ...state
  },
  getters: {
    ...getters
  },
  mutations,
  actions
};
