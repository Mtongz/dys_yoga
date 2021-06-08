import service from 'network/request/request'

/*
  *使用
  *this.$http.homeApi.banner().then(res=>{
    console.log(res)
  })
 */

function banner() {
  return service.get('base/content/banner')
}

function hot(params) {
  return service.get('product/hot',{
    params:{

    }
  })
}

export default {
  banner
}