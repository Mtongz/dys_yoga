<!--
 * @Description: 商品详情
 * @Autor: Tong
 * @Date: 2021-06-04 09:05:15
 * @LastEditors: Tong
 * @LastEditTime: 2021-06-23 13:54:47
-->
<template>
  <div class="commodities-detail">
    <div class="df">
      <detail-swiper class="detail-swiper"></detail-swiper>
      <detail-option class="detail-option"></detail-option>
    </div>
  </div>
</template>

<script>
import DetailSwiper from "./DetailSwiper";
import DetailOption from "./DetailOption";
export default {
  name: "CommoditiesDetail",
  components: {
    DetailSwiper,
    DetailOption,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {
    console.log(this.$route.query.kw);
  },
};
</script>
<style scoped lang="scss">
.commodities-detail {
  width: 74.375rem; //1190px
  margin: 0 auto;
  padding: 0.3125rem;
}
.detail-swiper {
  width: 25rem; // 400px
}
.detail-option {
  width: 37.5rem; //600px
  margin-left: 3.125rem; //50px
}
</style>
