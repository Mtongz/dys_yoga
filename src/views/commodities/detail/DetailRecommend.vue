<!--
 * @Description: 详情页的商品推荐
 * @Autor: Tong
 * @Date: 2021-06-24 10:27:27
 * @LastEditors: Tong
 * @LastEditTime: 2021-06-24 15:38:04
-->
<template>
  <div class="recommend-main">
    <section class="recommend-title">
      <div class="titleOption">You May Also Like</div>
    </section>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(o, index) in 16">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 10px;">
            <span>好吃的汉堡sdasdasdasdasdasdadasdasdasda</span>
            <div class="bottom">
              <time class="time">${{ 123 }}</time>
            </div>
          </div>
        </el-card>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "DetailRecommend",
  components: {},
  data() {
    return {
      price: new Date(),
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
        allowTouchMove: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style scoped lang="scss">
.swiper-container {
  // height: 18.75rem;
}
.recommend-main {
}
.recommend-title {
  text-align: center;
  margin: 20px 0;
  .titleOption {
    display: inline-block;
    border: 2px solid black;
    padding: 12px 70px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 10px;
    &:hover {
      background: black;
      color: white;
    }
  }
}
</style>
