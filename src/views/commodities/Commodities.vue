<!--
 * @Description: 产品列表页面
 * @Autor: Tong
 * @Date: 2021-06-04 09:05:15
 * @LastEditors: Tong
 * @LastEditTime: 2021-06-29 09:56:28
-->
<template>
  <div class="commodities">
    <el-container>
      <el-aside>
        <commodities-slide></commodities-slide>
      </el-aside>
      <el-main>
        <commodities-main></commodities-main>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import CommoditiesSlide from "./components/CommoditiesSlide";
import CommoditiesMain from "./components/CommoditiesMain";
export default {
  name: "Commodities",
  components: {
    CommoditiesSlide,
    CommoditiesMain,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    loadData() {
      this.$http.commoditiesApi.productList().then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {
    this.loadData()
  },
};
</script>
<style scoped lang="scss">
.commodities {
  width: 80rem;
  margin: 0 auto;
}
.el-aside {
  color: #333;
  text-align: center;
  width: 200px;
}

.el-main {
  color: #333;
  min-width: 60.5rem;
}
</style>
