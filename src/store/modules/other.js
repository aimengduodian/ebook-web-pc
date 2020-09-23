import {
  fetchGetOthersList
} from '@/api/ebook/others'

const state = {
  page: {
    pageSize: 6,
    pageNumber: 1
  },
  others: null,
  formDate: null
}

const getters = {
  //返回图书列表
  getOthers (state) {
    if (state.others == null) {
      return null
    }
    return state.others.pageInfo.list
  },

  //返回总页数
  othersTotalPages (state) {
    if (state.others == null) {
      return null
    }
    return state.others.pageInfo.pages * 10
  }
}

const actions = {
  //从服务器加载图书列表
  updateOthers ({ commit, state }) {
    //请求参数的封装
    let data = {
      pageNumber: state.page.pageNumber,
      pageSize: state.page.pageSize
    }
    data = Object.assign(data, state.formDate)
    fetchGetOthersList(data).then(res => {
      commit('set_others', res)
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
  ['set_others'] (state, resp) {
    state.others = resp.page
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
