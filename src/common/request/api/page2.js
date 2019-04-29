/**
 * 模块接口列表
 */
import base from './base'          // 导入接口域名列表
import axios from '../utils/http'  // 导入http中创建的axios实例

const page2 = {
    // 获取列表
    testList() {
        return axios.get(`${base.eBookUrl}/electronics/books`)
    },

    // 获取详情数据，get提交
    testDetail(id, params) {
        return axios.get(`${base.eBookUrl}/electronics/getById/${id}`, {
            params: params
        })
    },

    // 登陆post提交
    login(params) {

    }

    // 其他接口…………
};

export default page2
