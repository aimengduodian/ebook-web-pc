/**
 * 模块接口列表
 */
import base from './base'          // 导入接口域名列表
import axios from '../utils/http'  // 导入http中创建的axios实例
import qs from 'qs'                // 根据需求是否导入qs模块

const article = {
    // 获取列表
    testList() {
        return axios.get(`${base.sq}/book/books`)
    },

    // 获取详情数据，get提交
    testDetail(id, params) {
        return axios.get(`${base.sq}/book/getById/${id}`, {
            params: params
        })
    },

    // 登陆post提交
    login(params) {
        return axios.post(`${base.sq}/accesstoken`, qs.stringify(params))
    }

    // 其他接口…………
};

export default article
