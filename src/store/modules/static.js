import {
  fetchBookType,
  fetchElectronicsType,
  fetchReportType
} from '../../api/static/index'

const state = {
  bookTypes: null,
  electronicsTypes: null,
  reportTypes: null, // 举报类型
  productTypes: [
    { id: 0, name: '未知', des: null },
    { id: 1, name: '图书', des: null },
    { id: 2, name: '电子', des: null },
    { id: 3, name: '其他', des: null },
    { id: 4, name: '辅导', des: null }
  ],
  tutoringTypes: [
    { id: 0, name: '辅导', des: null },
    { id: 1, name: '讲座', des: null }
  ],
  formDate: null
}

const getters = {
  //返回图书类型
  getBookTypes (state) {
    if (state.bookTypes == null) {
      return null
    }
    return state.bookTypes
  },
  //返回电子类型
  getElectronicTypes (state) {
    if (state.electronicsTypes == null) {
      return null
    }
    return state.electronicsTypes
  },
  //返回举报类型
  getReportTypes (state) {
    if (state.reportTypes == null) {
      return null
    }
    return state.reportTypes
  },
  //返回产品类型
  getProductTypes (state) {
    if (state.productTypes == null) {
      return null
    }
    return state.productTypes
  },
  //返回辅导类型
  getTutoringTypes (state) {
    if (state.tutoringTypes == null) {
      return null
    }
    return state.tutoringTypes
  }
}

const actions = {
  //从服务器加载图书类型
  updateBooksTypes ({ commit, state }) {
    fetchBookType().then(res => {
      commit('set_book_types', res)
    })
  },
  //从服务器加载电子类型
  updateElectronicsTypes ({ commit, state }) {
    fetchElectronicsType().then(res => {
      commit('set_electronics_types', res)
    })
  },
  //从服务器加载举报类型
  updateReportTypes ({ commit, state }) {
    fetchReportType().then(res => {
      commit('set_report_types', res)
    })
  }
}

const mutations = {
  //保存加载出来的图书类型存于store中
  ['set_book_types'] (state, resp) {
    state.bookTypes = resp.page.booktypes
  },

  //保存加载出来的电子类型存于store中
  ['set_electronics_types'] (state, resp) {
    state.electronicsTypes = resp.page.electronicsType
  },

  //保存加载出来的举报类型存于store中
  ['set_report_types'] (state, resp) {
    state.reportTypes = resp.page.pageinfo
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
