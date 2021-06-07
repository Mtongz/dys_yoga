// const path = require('path'); //引入path模块
// function resolve(dir) {
//   return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
// }
// module.exports = {
//   lintOnSave: false, //关闭eslint文件
//   devServer: {
//     proxy: { //配置代理服务器
//       "/api": {
//         target: "102.1.1.1", //目标网址
//         changeOrigin: true,
//         pathRewrite: {
//           "^/api": '' //发请求的时候要把上面taget填写的地址参数改成/api注意改完这个配置文件一定要重启服务器
//           // 如果taget上面的是/api那么pathRewrite对象就要配置^/api属性为空字符串
//           // 如果taget上面的是/xixi那么pathRewrite对象就要配置^/xixi属性为空字符串
//         }
//       }
//     }
//   },
//   chainWebpack: (config) => {
//     console.log(config);
//     config.resolve.alias
//       .set('components', resolve('@/components'))
//       .set('views', resolve('@/views'))
//       .set('assets', resolve('@/assets'))
//       .set('common', resolve('@/common'))
//       .set('network', resolve('@/network'))
//     //set第一个参数：设置的别名，第二个参数：设置的路径
//   }
// }
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['vue', 'js', 'json'],
      alias: {
        // '@': 'src' 内部已经配置了这个
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'apis': '@/apis'
      }
    }
  },
  lintOnSave: false, //关闭eslint文件
  devServer: {
    proxy: { //配置代理服务器
      "/api": {
        // http://192.168.110.137:7000/api/account/auth/cms_login__doc
        target: "http://192.168.110.137:7000/", //目标网址
        changeOrigin: true,
        pathRewrite: {
          "^/api": '' //发请求的时候要把上面taget填写的地址参数改成/api注意改完这个配置文件一定要重启服务器
          // 如果taget上面的是/api那么pathRewrite对象就要配置^/api属性为空字符串
          // 如果taget上面的是/xixi那么pathRewrite对象就要配置^/xixi属性为空字符串
        }
      }
    }
  },
}