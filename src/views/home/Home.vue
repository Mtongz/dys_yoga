<template>
  <div class="home">
    <el-button type="primary" @click="handleClick">el-button</el-button>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeRecommend from './components/HomeRecommend'
export default {
  name: "Home",
  components: {
    HomeRecommend
  },
  methods: {
    handleClick() {
      this.$router.push('/login')
    },
  },
};
</script>
