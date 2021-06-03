import service from 'network/request/request'
/*
  *使用
  *this.$http.user.login(data).then(res=>{
    console.log(res)
  })
 */

function login(data) {
  return service.post('/api/account/auth/web_login',data)
}

export default {
  login
}
