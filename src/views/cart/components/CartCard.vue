<template>
  <div class="cart-card">
    <el-card class="box-card">
      <section class="dfbc">
        <span>订单小计</span>
        <span>已选{{cartList.selectGoods}}件商品</span>
      </section>
      <el-divider></el-divider>
      <section class="">
        <div>
          <span>商品总计</span>
          <span>{{cartList.goodsTotalPrice}}</span>
        </div>
        <div>
          <span>运费</span>
          <span>{{cartList.otherPrice}}</span>
        </div>
        <div>
          <span>总计</span>
          <span>{{cartList.totalPrice}}</span>
        </div>
      </section>
      <el-divider></el-divider>
      <section class="">
        <span>说明</span>
        <div>{{cartList.desc}}</div>
      </section>
      <el-divider></el-divider>
      <section class="">
        <el-button type="info">立即结算</el-button>
        <el-button>继续购物</el-button>
      </section>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      cartList: {
        selectGoods: 1,
        goodsTotalPrice: 2300,
        otherPrice: 0,
        totalPrice: 2300,
        desc:
          "萨达大萨达官方适当给点粉红色的期权我也IQ无任何是从V型尖峰时刻富瀚微UI返回",
      },
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style scoped lang="scss">

</style>
