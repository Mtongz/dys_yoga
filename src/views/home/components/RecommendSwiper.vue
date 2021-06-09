<template>
  <div class="recommend-swiper">
    <swiper :options="swiperOption" v-show="true" ref="mySwiper">
      <swiper-slide>
        <div class="card-item">
          <el-image class="card-img" :src="require('assets/img/logo.png')"></el-image>
          <!-- <div class="card-text">
            <span class="card-title">DSFSDKLGSGLSD</span>
            <span class="card-price">$454.00</span>
          </div> -->
          <span class="card-title">DSFSDKLGSGLSD</span>
          <span class="card-price">$454.00</span>
        </div>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
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
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        //响应式
        breakpoints: {
          1440: {
            //当屏幕宽度大于等于1440
            slidesPerView: 4,
            spaceBetween: 50,
            slidesPerGroup: 4,
          },
          1630: {
            //当屏幕宽度大于等于1630
            slidesPerView: 5,
            spaceBetween: 30,
          },
        },
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
  methods: {},
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
  height: 20rem;
}
.recommend-swiper .swiper-container .swiper-slide {
  width: 100%;
  background: yellowgreen;
  color: #000;
  font-size: 1rem;
}
.card-item {
  height: 100%;
  display: flex;
  flex-direction: column;
  .card-img {
    width: 100%;
  }
  .card-text {

  }
}
</style>
