<!--
 * @Description: 商品详情的参数模块
 * @Autor: Tong
 * @Date: 2021-06-21 17:23:49
 * @LastEditors: Tong
 * @LastEditTime: 2021-06-24 14:11:57
-->
<template>
  <div class="option-main">
    <div class="option-title item">
      <h3>{{ detailList.title }}</h3>
    </div>
    <div class="option-price option-item">
      <span class="dt">价格</span>
      <span>{{ detailList.price | calcPrice }}</span>
    </div>
    <div class="option-color option-item df">
      <div class="dt">选择颜色</div>
      <el-radio-group
        v-model="defaultColor"
        size="mini"
        class="radio-group"
        @change="colorHandleChange"
      >
        <!-- <el-radio
          :label="item.txt"
          :style="'background: ' + item.hex"
          v-for="item in detailList.colors"
          :key="item.txt"
          border
        ></el-radio> -->
        <div
          class="color-item dfac"
          v-for="item in detailList.colors"
          :key="item.hex"
        >
          <div class="radio-circle" :style="'background: ' + item.hex"></div>
          <el-radio :label="item.txt" border></el-radio>
        </div>
      </el-radio-group>
    </div>
    <div class="option-size option-item df">
      <span class="dt">选择尺码</span>
      <el-radio-group
        v-model="defaultSize"
        size="mini"
        class="radio-group size-group"
        @change="sizeHandleChange"
      >
        <el-radio
          :label="item.txt"
          v-for="item in detailList.sizeList"
          :key="item.txt"
          border
          style="margin-right: .625rem;"
        ></el-radio>
      </el-radio-group>
    </div>
    <div class="option-number option-item">
      <el-input-number size="mini" v-model="number" :min="1" @change="numHandleChange"></el-input-number>
    </div>
    <div class="option-submit">
      <el-button style="background: #df3033;color: #fff;">Add to Cart</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailOption",
  components: {},
  data() {
    return {
      defaultColor: "",
      defaultSize: "",
      number: "1",
      detailList: {
        title: "XUELI雪梨女装 气质收腰牛仔连衣裙子女夏小个子高级感短裙送皮带",
        price: "259",
        sizeList: [
          {
            txt: "S",
          },
          {
            txt: "M",
          },
          {
            txt: "L",
          },
          {
            txt: "XL",
          },
          {
            txt: "XXL",
          },
          {
            txt: "XXXL",
          },
        ],
        colors: [
          {
            hex: "#000",
            txt: "黑色",
          },
          {
            hex: "#fff",
            txt: "白色",
          },
          {
            hex: "#e4393c",
            txt: "橘红色",
          },
          {
            hex: "#FFC0CB",
            txt: "粉红",
          },
          {
            hex: "#800080",
            txt: "紫色",
          },
          {
            hex: "#6495ED",
            txt: "矢车菊的蓝色",
          },
          {
            hex: "#EE82EE",
            txt: "紫罗兰",
          },
        ],
        recommendImg: [],
      },
    };
  },
  filters: {
    calcPrice(price) {
      // console.log(Number(price).toFixed(2));
      return "￥" + Number(price).toFixed(2);
    },
  },
  computed: {},
  methods: {
    colorHandleChange(value) {
      console.log(value);
    },
    sizeHandleChange(value) {
      console.log(value);
    },
    numHandleChange(value) {
      console.log(value);
    }
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
.dt {
  color: #999;
  font-family: simsun;
  font-size: 0.875rem;
  width: 3.75rem;
  line-height: 1.75rem;
}
.option-title {
  font: 700 1rem Arial, "microsoft yahei";
  color: #666;
  line-height: 1.75rem;
  min-height: 1.75rem;
  margin-bottom: 0.3125rem;
}
.option-item {
  margin-bottom: 20px;
}
.option-price {
  color: #e4393c;
  font-size: 1.375rem;
}
.option-size {
  .size-group {
    // margin-left: -0.5rem;
  }
}
.color-item {
  margin: 0 0.625rem 0.625rem 0;
}

.radio-group {
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  flex: 1;
}
.radio-circle {
  border: 1px solid #ccc;
  border-radius: 26px;
  width: 26px;
  height: 26px;
  margin-right: 2px;
}
/** 修改elementUI 的样式 */
.el-radio {
  margin: 0;
}
.el-radio.is-bordered + .el-radio.is-bordered {
  margin: 0;
}
/deep/ .el-radio__input {
  display: none;
}
/deep/ .el-radio__label {
  color: #606266 !important;
}
/deep/ .el-radio.is-bordered.is-checked {
  border: 0.0625rem solid red;
}
</style>
