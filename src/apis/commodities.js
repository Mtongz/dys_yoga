/*
 * @Description: 产品页 api
 * @Autor: Tong
 * @Date: 2021-06-08 09:10:47
 * @LastEditors: Tong
 * @LastEditTime: 2021-06-29 09:56:52
 */
import service from 'network/request/request'
/*
  *使用
  *this.$http.commoditiesApi.cartList(data).then(res=>{
    console.log(res)
  })
 */

// 产品列表
function productList() {
  return service.get('product/records')
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