<!--
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-06-05 09:00:11
 * @LastEditors: Tong
 * @LastEditTime: 2021-06-29 09:39:06
-->
<template>
  <div class="home-swiper">
    <swiper
      class="swiper"
      v-if="bannerList.length >= 1"
      :options="swiperOption"
      ref="homeSwiper"
    >
      <swiper-slide v-for="(item, index) in bannerList" :key="item.cover">
        <img class="swiper-img" :src="item.cover" />
      </swiper-slide>
      <!-- <swiper-slide v-for="(item, index) in imgList" :key="item.url">
        <img class="swiper-img" :src="item.url" />
      </swiper-slide> -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  props: {
    bannerList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  computed: {
    // swiper() {
    //   return this.$refs.homeSwiper.swiper;
    // },
  },
  watch: {},
  created() {},
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
    console.log(this.bannerList);
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.home-swiper {
  margin: 1.25rem 0;
}
.swiper-container {
  // height: 32.5rem;
  min-width: 80rem;
  .swiper-slide {
    width: 100%;
    // line-height: 32.5rem;
    img {
      max-width: 100%;
      max-height: 43.75rem;
      object-fit: cover;
    }
  }
}
</style>
