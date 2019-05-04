// import * as types from '../mutation-types'
import api from '../../../src/common/api/index'

// 定义属性（数据）
const state = {
    allNumber: 0,
    crfcode: '',    // csrf token
    collection: ''  // 公钥
}

// 定义 getters
const getters = {
    //需要传个形参，用来获取 state 属性
    allNumber: state => state.allNumber,
    crfcode: state => state.crfcode,
    collection: state => state.collection
}

//actions 定义方法（动作）
//可以是异步的发送请求。
const actions = {
    getAllNum: ({commit}, data) => commit('getAllNum', data),
    // 登录函数
    getLogin({commit}, data) {
        api.getDistrict(data).then(json => {
            console.log(json)
        })
    },
    // 获取token
    AgetCrf({commit}, inner) {
        api.getCsrf().then(json => {
            commit('getCrf', json.data.result)
        })
    },
    // 获取公钥
    AgetCollection({commit}, inner) {
        api.getColle().then(json => {
            commit('getCollection', json.data.result)
        })
    }
}

// 处理状态（数据） 的改变
const mutations = {
    getAllNum(state, inner) {
        console.log(inner);
    },
    getCrf(state, inner) {
        state.crfcode = ''
        state.crfcode = inner
        console.log(inner)
    },
    getPasWord(state, inner) {
        return inner
    },
    getCollection(state, inner) {
        state.collection = ''
        state.collection = inner
        console.log(inner)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
