<template>
  <div class="commodities-detail">
    <detail-swiper class="detail-swiper"></detail-swiper>
  </div>
</template>

<script>
import DetailSwiper from './DetailSwiper'
export default {
  name: "CommoditiesDetail",
  components: {
    DetailSwiper
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
  padding: .3125rem;
}
.detail-swiper {
  width: 25rem;
}
</style>
