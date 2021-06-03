import service from 'network/request/request'
/*
  *使用
  *this.$http.cart.cartList(data).then(res=>{
    console.log(res)
  })
 */

function cartList(data) {
  return service.post('/api/account/auth/web_login',data)
}

export default {
  cartList
}