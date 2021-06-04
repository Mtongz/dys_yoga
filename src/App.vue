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

<style></style>
