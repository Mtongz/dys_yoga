import service from 'network/request/request'
/*
  *使用
  *this.$http.commoditiesApi.cartList(data).then(res=>{
    console.log(res)
  })
 */

// 产品列表
function productList(data) {
  return service.get('product/record', data)
}
// 产品详情
function productDetail(productId) {
  return service.get('product/detail', {
    params: {
      product_id: productId
    }
  })
}

export default {
  productList,
  productDetail
}