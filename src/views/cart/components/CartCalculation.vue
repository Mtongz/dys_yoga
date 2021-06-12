<template>
  <div class="cart-calc">
    <div class="calc-top df fdc">
      <span>YOU ARE CHECKING OUT AS:</span>
      <span>{{ calcList.userId }}</span>
    </div>
    <div class="calc-form">
      <span style="font-size: 1.25rem;font-weight:600;">SHIP TO</span>
      <el-form
        ref="form"
        :model="orderForm"
        label-width="80px"
        size="mini"
        class="form-content"
      >
        <div class="df">
          <el-form-item>
            <span>FIRST NAME</span>
            <el-input v-model="orderForm.firstname"></el-input>
          </el-form-item>
          <el-form-item>
            <span>LAST NAME</span>
            <el-input v-model="orderForm.lastname"></el-input>
          </el-form-item>
        </div>
        <div class="df">
          <el-form-item>
            <span>COUNTRY/REGION</span>
            <el-input v-model="orderForm.country"></el-input>
          </el-form-item>
          <el-form-item>
            <span>CITY</span>
            <el-input v-model="orderForm.city"></el-input>
          </el-form-item>
          <el-form-item>
            <span>POSTAL CODE</span>
            <el-input v-model="orderForm.code"></el-input>
          </el-form-item>
          <el-form-item>
            <span>STATE</span>
            <el-input v-model="orderForm.state"></el-input>
          </el-form-item>
        </div>
        <div class="df aic">
          <el-form-item>
            <div>MOBILE</div>
            <el-select v-model="orderForm.phoneValue" placeholder="请选择">
              <el-option
                v-for="item in mobileOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <div>PHONE</div>
            <el-input v-model="orderForm.phoneNumber"></el-input>
          </el-form-item>
        </div>
        <el-form-item>
          <span>E-mail</span>
          <el-input v-model="orderForm.email"></el-input>
        </el-form-item>
        <el-table :data="selectTableData" stripe style="width: 100%">
          <el-table-column prop="date" label="商品"> </el-table-column>
          <el-table-column prop="name"> </el-table-column>
        </el-table>
      </el-form>
      <div class="calc-goods">
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column prop="time" label="商品件数"> </el-table-column>
          <el-table-column prop="address" label="商品总价"> </el-table-column>
        </el-table>
      </div>
      <el-button @click="backCart">返回购物车</el-button>
      <el-button type="primary" @click="onSubmit">确认下单</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      calcList: {
        userId: "9157@gmail.com",
      },
      orderForm: {
        firstname: "",
        lastname: "",
        country: "",
        city: "",
        code: "",
        state: "",
        phoneValue: "",
        phoneNumber: "",
        email: "",
      },
      value: [],
      mobileOptions: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      selectTableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
        },
      ],
      tableData: [
        {
          time: "2016-05-04",
          address: "1517",
        },
      ],
    };
  },
  computed: {},
  methods: {
    onSubmit() {
      console.log("submit!");
      this.$router.replace('/calcSuccess')
    },
    backCart() {
      this.$router.push("/cart");
    },
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
.cart-calc {
}
.calc-top {
  background: #f5f5f5;
  padding: 0.625rem 0 0.625rem 1.25rem;
  span {
    margin-bottom: 0.625rem;
    font-size: 1rem;
    font-weight: 600;
    color: #a3a3a3;
  }
}
.calc-form {
  max-width: 80rem;
  min-width: 62.4375rem;
  margin: 0 auto;
  padding: 1.25rem;
  .form-content {
    margin-top: 0.625rem;
  }
  .el-form-item {
    margin-left: -5rem;
    margin-right: 1.25rem;
    span,
    div {
      font-size: 12px;
    }
  }
}
.calc-goods {
  background: pink;
  width: 18.75rem;
  margin: 1.25rem 0;
}
</style>
