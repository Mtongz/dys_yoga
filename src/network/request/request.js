import axios from 'axios'

const service = axios.create({
// http://192.168.110.137:7000/api/account/auth/cms_login__doc
  baseURL: 'http://192.168.110.137:7000/api',
  // 延时
  timeout: 5 * 1000,
  withCredentials: true //是否允许携带凭证
})

service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['accessToken'] = token
    }
    return config
  },
  err => {
    return Promise.reject(err);
  })

service.interceptors.response.use(
  res => {
    const _data = res.data
    if (_data.success || _data.code == 200) {
      
    } else {

    }
    return _data
  },
  err => {
    return Promise.reject(err);
  }
)

export default service