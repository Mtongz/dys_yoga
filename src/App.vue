<template>
  <div id="app">
    <Header v-if="!$route.meta.isHeaderHide" />
    <router-view />
    <!-- 当不是登录或者注册时就显示 -->
    <Footer v-if="!$route.meta.isFooterHide" />
  </div>
</template>

<script>
export default {
  components: {
    
  },
};
</script>

<style>
 /*滚动条样式*/
html::-webkit-scrollbar {/*滚动条整体样式*/
    width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 8px;
}
html::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
html::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}
</style>
