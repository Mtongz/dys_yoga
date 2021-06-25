<!--
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-06-05 14:50:22
 * @LastEditors: Tong
 * @LastEditTime: 2021-06-25 09:46:27
-->
<template>
  <div class="recommend-swiper">
    <swiper :options="swiperOption" v-show="true" ref="mySwiper">
      <swiper-slide v-for="(o, index) in 20">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
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
  name: "Home",
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
        allowTouchMove: false,
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        //响应式
        // breakpoints: {
        //   1440: {
        //     //当屏幕宽度大于等于1440
        //     slidesPerView: 4,
        //     spaceBetween: 50,
        //     slidesPerGroup: 4,
        //   },
        //   1630: {
        //     //当屏幕宽度大于等于1630
        //     slidesPerView: 5,
        //     spaceBetween: 30,
        //   },
        // },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    handleClick() {
      this.$router.push("/commodities");
    },
  },
};
</script>

<style scoped lang="scss">
.recommend-swiper {
  max-width: 90rem;
  min-width: 62.4375rem;
  margin: 1.25rem auto;
}
.recommend-swiper .swiper-container {
  position: relative;
  width: 100%;
  // height: 20rem;
}
.recommend-swiper .swiper-container .swiper-slide {
  width: 100%;
  // background: yellowgreen;
  color: #000;
  font-size: 1rem;
}
</style>
