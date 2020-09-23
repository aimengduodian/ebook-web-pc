import {
  fetchProductReportList
} from '@/api/ebook/warning'

const state = {
  warnings: null,
  productInfo: null,
  page: {
    pageSize: 6,
    pageNumber: 1
  },
  formDate: null
}

const getters = {
  //返回预警列表
  getWarningsList (state) {
    if (state.warnings == null) {
      return null
    }
    return state.warnings.pageinfo.list
  },

  //返回总页数
  productWarningTotalPages (state) {
    if (state.warnings == null) {
      return null
    }
    return state.warnings.pageinfo.pages * 10
  }
}

const actions = {
  //从服务器加载产品列表
  updateProductWarnings ({ commit, state }) {
    //请求参数的封装
    let data = {
      pageNumber: state.page.pageNumber,
      pageSize: state.page.pageSize
    }
    data = Object.assign(data, state.formDate)
    fetchProductReportList(data).then(res => {
      commit('set_product_warnings', res)
    })
  },

  //分页刷新
  changeNum ({ commit, state }, currentPage) {
    commit('change_num', currentPage)
  },

  //查询条件数据
  changeData ({ commit, state }, fdata) {
    commit('change_data', fdata)
  }
}

const mutations = {
  //请求数据列表存于state
  ['set_product_warnings'] (state, resp) {
    state.warnings = resp.page
  },

  //分页是选择的页码
  ['change_num'] (state, pageNumber) {
    state.page.pageNumber = pageNumber
  },

  //查询条件中的数据
  ['change_data'] (state, fdata) {
    state.formDate = fdata
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
