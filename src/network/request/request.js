import axios from 'axios'

const service = axios.create({

  baseURL: 'http://152.136.185.210:7878/api/m5',
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
      return _data
    } else {

    }
  },
  err => {
    return Promise.reject(err);
  }
)

export default service