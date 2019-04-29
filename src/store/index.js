import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        network: true,
        changeNetwork: true,
    },
    modules: {

    }
});

export default store;
