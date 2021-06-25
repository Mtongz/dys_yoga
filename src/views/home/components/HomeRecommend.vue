<!--
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-06-04 11:23:21
 * @LastEditors: Tong
 * @LastEditTime: 2021-06-25 10:00:26
-->
<template>
  <div class="home-recommend">
    <recommend-card>
      <div></div>
      <div></div>
    </recommend-card>
    <recommend-swiper class=""></recommend-swiper>
    <section class="titleItem">
      <div class="titleOption">Shop New Arrivals</div>
    </section>
  </div>
</template>

<script>
import RecommendCard from "./RecommendCard";
import RecommendSwiper from "./RecommendSwiper";
export default {
  name: "HomeRecommend",
  components: {
    RecommendCard,
    RecommendSwiper,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style scoped lang="scss">
.titleItem {
  text-align: center;
  // background: cyan;
  .titleOption {
    display: inline-block;
    border: 2px solid black;
    padding: 12px 70px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background: black;
      color: white;
    }
  }
}
</style>
