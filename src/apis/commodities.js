import service from 'network/request/request'
/*
  *使用
  *this.$http.commoditiesApi.cartList(data).then(res=>{
    console.log(res)
  })
 */

function detail(token, productId) {
  return service.get('product/detail',{
    params:{
      user: token,
      product_id: productId
    }
  })
}

export default {
  detail
}
