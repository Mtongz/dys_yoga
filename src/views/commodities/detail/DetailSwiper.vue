<template>
  <div style="height: 500px">
    <!-- swiper1 -->
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
      <div
        class="swiper-button-next"
        slot="button-next"
        @click="nextClick"
      ></div>
      <div
        class="swiper-button-prev"
        slot="button-prev"
        @click="prevClick"
      ></div>
    </swiper>
    <div class="gallery-thumbs swiper-container" ref="swiperThumbs">
      <div class="swiper-wrapper">
        <swiper-slide
          :class="[
            'slide-' + (index + 1),
            { thumbActive: currentIndex === index },
          ]"
          v-for="(o, index) in 5"
          :key="index"
          @click.native="thumbClick(index)"
        ></swiper-slide>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [],
      currentIndex: 0,
      activedIndex: 0,
      swiperOptionTop: {
        allowTouchMove: false,
        speed: 200,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChangeTransitionStart: function() {
            console.log(this.activeIndex);
            this.activedIndex = this.activeIndex//切换结束时，告诉我现在是第几个slide
            console.log(this.activedIndex);
          },
        },
        thumbs: {
          swiper: {
            el: ".gallery-thumbs",
            slidesPerView: 5,
            spaceBetween: 5,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
          },
        },
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      // const galleryTop = this.$refs.swiperTop.swiper;
      // const galleryThumbs = this.$refs.swiperThumbs.swiper;
      // swiperTop.controller.control = swiperThumbs;
      // swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {
    thumbClick(index) {
      this.currentIndex = index;
    },
    nextClick() {
      this.currentIndex = this.activedIndex;
      console.log(this.currentIndex);
      console.log(this.activedIndex);
    },
    prevClick() {
      this.currentIndex = this.activedIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  background-color: #fff;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
  &.slide-1 {
    background-image: url("~assets/img/mm.png");
  }
  &.slide-2 {
    background-image: url("~assets/img/xx.png");
  }
  &.slide-3 {
    background-image: url("~assets/img/swiper.png");
  }
  &.slide-4 {
    background-image: url("~assets/img/swiper1.png");
  }
  &.slide-5 {
    background-image: url("~assets/img/swiper2.png");
  }
}
.gallery-top {
  height: 85% !important;
  width: 100%;
}
.gallery-thumbs {
  height: 15% !important;
  box-sizing: border-box;
  padding: 5px 0;
}
.gallery-thumbs .swiper-slide {
  // width: 25%;
  height: 100%;
  opacity: 0.4;
}
.thumbActive {
  opacity: 1 !important;
}
</style>
