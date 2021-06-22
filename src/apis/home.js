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
  return service.get('product/recommend')
}

function homeHot() {
  return service.get('product/hot')
}

function homeNew() {
  return service.get('product/new')
}

export default {
  banner,
  homeRecommend,
  homeHot,
  homeNew
}