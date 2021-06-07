import service from 'network/request/request'
/*
  *使用
  *this.$http.user.login(data).then(res=>{
    console.log(res)
  })
 */
function register(data) {
  return service.post('account/register/web_register', data)
}

function login(data) {
  return service.post('account/auth/web_login', data)
}

export default {
  register,
  login
}