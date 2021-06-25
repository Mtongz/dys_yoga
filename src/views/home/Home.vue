<!--
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-06-02 13:44:27
 * @LastEditors: Tong
 * @LastEditTime: 2021-06-25 09:50:24
-->
<template>
  <div class="home">
    <home-swiper :banner-list="homeData.bannerList"></home-swiper>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeSwiper from "./components/HomeSwiper";
import HomeRecommend from "./components/HomeRecommend";
export default {
  name: "Home",
  components: {
    HomeRecommend,
    HomeSwiper
  },
  data() {
    return {
      homeData: {
        bannerList: [],
        recommendList: [],
        hotList: [],
        newList: [],
      },
    };
  },
  created() {
    this.getHomeData();
    console.log(this.$store.state.token);
  },
  mounted() {
    // console.log(this.$store.state.token);
  },
  methods: {
    handleClick() {
      this.$router.push("/login");
    },
    getHomeData() {
      this.$http.homeApi.banner().then((res) => {
        this.homeData.bannerList = res.data;
      });
      this.$http.homeApi.homeRecommend().then((res) => {
        this.homeData.recommendList = res.data;
      });
      this.$http.homeApi.homeHot().then((res) => {
        this.homeData.hotList = res.data;
      });
      this.$http.homeApi.homeNew().then((res) => {
        console.log(res);
        this.homeData.newList = res.data;
      });
      console.log(this.homeData);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  min-width: 80rem;
}
</style>
