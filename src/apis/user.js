import service from 'network/request/request'

function login(data) {
  return service.post('/api/account/auth/web_login',data)
}

export default {
  login
}