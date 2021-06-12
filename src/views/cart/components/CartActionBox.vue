<template>
  <div>
    <div class="submit">
      <el-row>
        <el-col :span="8" class="submitBar">
          <span>继续购物</span>
          <span>
            共 <strong>{{ 1 }}</strong> 件商品, 已选择
            <strong>{{ 1 }}</strong> 件
          </span>
        </el-col>
        <el-col :span="8" class="totalPrice">合计价格：{{ 4000 }}</el-col>
        <el-col :span="8" class="action-btn">
          <el-button type="primary" @click="handleNext"
            >去结算</el-button
          >
          <el-button
            type="danger"
            @click="handleCancer"
            :disabled="false"
            >返回</el-button
          >
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleNext() {
      this.$router.push('/cartCalculation')
    },
    handleCancer() {
      this.$router.back()
    },
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
.submit {
  // margin: 1.25rem;
  line-height: 3rem;
}
.submitBar {
  // color: #757575;
  padding-left: .625rem;
  strong {
    color: #3498db;
    margin: 0 5px;
  }

  span {
    // display: flex;
    // align-items: center;
    &:first-child {
      cursor: pointer;
      &:hover {
        color: #3498db;
      }
      &::after {
        display: inline-block;
        content: "";
        width: 1px;
        height: 12px;
        background: #ccc;
        margin: 0 10px;
      }
    }
  }
}
.totalPrice {
  text-align: center;
}
.action-btn {
  text-align: right;
}
</style>
