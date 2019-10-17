import dishesApi from "../../api/dishes.api";

const state = {

};
const getters = {

};
const mutations = {

};
const actions = {
    createDish({},data){
        dishesApi.createDish(data,
            (result) => {
                console.log("Exito!");
            }, (error) => {
                console.log("Fail!");
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
