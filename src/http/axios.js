import axios from 'axios'
import { baseUrl } from './config'

axios.defaults.timeout = 10000 //超时取消请求
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = baseUrl

const request = function (url, params, config, method) {
  return new Promise((resolve, reject) => {
    axios[method](url, params, Object.assign({}, config)).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

const post = (url, params, config = {}) => request(url, params, config, 'post')

const get = (url, params, config = {}) => request(url, params, config, 'get')

export { post, get }