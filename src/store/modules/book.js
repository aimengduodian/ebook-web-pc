import {
  fetchGetBooksList
} from '../../api/ebook/book'

const state = {
  page: {
    pageSize: 6,
    pageNumber: 1
  },
  books: null,
  formDate: null
}

const getters = {
  //返回图书列表
  getBooks (state) {
    if (state.books == null) {
      return null
    }
    return state.books.pageInfo.list
  },

  //返回总页数
  totalPages (state) {
    if (state.books == null) {
      return null
    }
    return state.books.pageInfo.pages * 10
  }
}

const actions = {
  //从服务器加载图书列表
  updateBooks ({ commit, state }) {
    //请求参数的封装
    let data = {
      pageNumber: state.page.pageNumber,
      pageSize: state.page.pageSize
    }
    data = Object.assign(data, state.formDate)
    fetchGetBooksList(data).then(res => {
      commit('set_books', res)
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
  ['set_books'] (state, resp) {
    state.books = resp.page
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
