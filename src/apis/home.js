/*
 * @Description: home api
 * @Autor: Tong
 * @Date: 2021-06-07 16:33:17
 * @LastEditors: Tong
 * @LastEditTime: 2021-06-29 09:43:42
 */
import service from 'network/request/request'

/*
  *使用
  *this.$http.homeApi.banner().then(res=>{
    console.log(res)
  })
 */

function banner() {
  return service.get('base/product/banner/records')
}

function homeRecommend() {
  return service.get('base/recommend/banner/records')
}

function homeHot() {
  return service.get('base/hot/banner/records')
}

function homeNew() {
  return service.get('base/new/banner/records')
}

export default {
  banner,
  homeRecommend,
  homeHot,
  homeNew
}