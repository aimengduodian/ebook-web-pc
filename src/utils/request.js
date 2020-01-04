import axios from 'axios'
import cookie from 'vue-cookie'
import config from './BaseConfig'

const http = axios.create({
  // process.env.NODE_ENV === 'development' 来判断是否开发环境
  withCredentials: true, // 请求后端同步session
  baseURL: config.baseUrl,
  timeout: config.timeout
})

// http request 拦截器
http.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      // config.data = qs.stringify(config.data)
      const form = new FormData()
      Object.keys(config.data).forEach(key => {
        if (key === 'files') {
          try {
            const aArr = config.data[key]
            aArr.forEach(item => {
              form.append(key, item)
            })
          }
          catch (e) {
            console.log(e)
          }
        }
        else {
          form.append(key, config.data[key])
        }
      })
      config.data = form
    }
    // 判断是否存在ticket，如果存在的话，则每个http header都加上ticket
    if (cookie.get('token')) {
      // 用户每次操作，都将cookie设置成2小时
      cookie.set('token', cookie.get('token'), 1 / 12)
      cookie.set('name', cookie.get('name'), 1 / 12)
      config.headers.token = cookie.get('token')
      config.headers.name = cookie.get('name')
    }
    return config
  },
  error => {
    return Promise.reject(error.response)
  }
)

// http response 拦截器
http.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    } else {
      Promise.reject()
    }
  },
  error => {
    console.log(error)
    return Promise.reject()
  }
)

export default http
