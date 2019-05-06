import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import config from './config'

Vue.use(VueAxios, axios)

let apiCrfCod = Vue.axios.create({
    method: 'GET',
    baseURL: config.baseUrl
})

let apiCollection = Vue.axios.create({
    method: 'GET',
    baseURL: config.baseUrl
})

let apiResource = Vue.axios.create({
    method: 'POST',
    baseURL: '/'
})

let apiPost = Vue.axios.create({
    method: 'POST',
    baseURL: config.baseUrl
})

let apiGet = Vue.axios.create({
    method: 'GET',
    baseURL: config.baseUrl
})

export default {
    /**
     * 获取产品列表
     * @param url
     * @param opts
     * @returns {*}
     */
    getItemList: (url, opts) => {
        return apiPost({url: url, params: {...opts}})
    },
    /**
     * get没有参数
     * @param url
     * @returns {*}
     */
    getItemOneParameter: (url) => {
        return apiGet({url: url})
    },

    /**
     * get带有参数的
     * @param url
     * @param opts
     * @returns {*}
     */
    getItemTwoParmeter: (url, opts) => {
        return apiGet({url: url, params: {...opts}})
    },
}
