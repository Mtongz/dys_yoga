<template>
  <div class="home">
    <home-swiper :banner-list="bannerList"></home-swiper>
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
    HomeSwiper,
  },
  data() {
    return {
      bannerList:[]
    };
  },
  created() {
    this.getBanner();
    console.log(this.$store.state.token);
  },
  mounted() {
    // console.log(this.$store.state.token);
  },
  methods: {
    handleClick() {
      this.$router.push("/login");
    },
    getBanner() {
      this.$http.homeApi.banner().then((res) => {
        console.log(res);
        this.bannerList = res.data;
      });
    },
  },
};
</script>
