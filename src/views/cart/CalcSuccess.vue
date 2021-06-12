<template>
  <div class="calc-success">
    <div class="df aic">
      <i class="fa fa-check-circle fa-4x" aria-hidden="true"></i>
      <div class="success-content">
        <div>感谢您，(会员名)</div>
        <span
          >下单成功，您可在<el-link type="primary">个人中心</el-link
          >查看订单详情</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalcSuccess",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style scoped lang="scss">
.calc-success {
  width: 100vw;
  height: 32.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.success-content {
  margin-left: 0.625rem;
  div {
    margin-bottom: 0.625rem;
  }
}
</style>
