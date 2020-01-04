import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters.js'
import statics from './modules/static.js'
import book from './modules/book.js'
import electronics from './modules/electronics.js'
import other from './modules/other.js'
import tutoring from './modules/tutoring.js'
import productwarning from './modules/productwarning.js'
import userswarning from './modules/userswarning.js'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    statics,
    book,
    electronics,
    other,
    tutoring,
    productwarning,
    userswarning
  }
})
