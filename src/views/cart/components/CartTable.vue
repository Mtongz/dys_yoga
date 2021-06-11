<template>
  <div class="cart-table">
    <el-table
      element-loading-text="正在为您拼命加载中..."
      :row-key="getRowKeys"
      :data="tableData"
      ref="multipleTable"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :header-cell-style="{ background: '#f8f8f8', color: '#999' }"
    >
      <el-table-column
        type="selection"
        :reserve-selection="true"
        width="40"
        align="center"
      />
      <el-table-column prop="shopImg" align="center" width="90" label="商品">
        <template slot-scope="scope">
          <img :src="scope.row.shopImg" class="shopImg" alt="" />
        </template>
      </el-table-column>
      <el-table-column prop="shop" align="center">
        <template slot-scope="scope">
          <span class="shop">{{ scope.row.shop }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="单价" align="center">
        <template slot-scope="scope">
          <span class="price">¥{{ scope.row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="number" label="数量" align="center">
        <template slot-scope="scope">
          <el-input
            v-model.number="scope.row.number"
            oninput="value=value.replace(/[^\d]/g,'')"
            autocomplete="off"
            style="width: 140px"
            size="mini"
            @change="handleInput(scope.row)"
          >
            <el-button size="mini" slot="prepend" @click="del(scope.row)"
              ><i class="el-icon-minus"></i
            ></el-button>
            <el-button slot="append" size="mini" @click="add(scope.row)"
              ><i class="el-icon-plus"></i
            ></el-button>
          </el-input>
        </template>
      </el-table-column>
      <el-table-column prop="count" label="小计" align="center">
        <template slot-scope="scope">
          <span class="count">¥{{ scope.row.goodTotal }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="80">
        <template slot-scope="scope">
          <i
            class="el-icon-delete"
            style="font-size: 18px; cursor: pointer"
            @click="handleDelete(scope.$index, scope.row)"
          ></i>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      tableData: [
        {
          id: 1,
          shopImg:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1606288963.72951431.jpg",
          shop: "小米巨能写 黑色 10支装",
          price: 30,
          number: 1,
          goodTotal: 30,
        },
        {
          id: 2,
          shopImg:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1606288963.72951431.jpg",
          shop: "小米巨能写 黑色 10支装小米巨能写 黑色 10支装小米巨能写 黑色 10支装小米巨能写 黑色 10支装小米巨能写 黑色 10支装",
          price: 30,
          number: 1,
          goodTotal: 30,
        },
        {
          id: 3,
          shopImg:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1606288963.72951431.jpg",
          shop: "小米巨能写 黑色 10支装",
          price: 300,
          number: 1,
          goodTotal: 300,
        },
        {
          id: 4,
          shopImg:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1606288963.72951431.jpg",
          shop: "小米10",
          price: 40000,
          number: 1,
          goodTotal: 40000,
        },
        {
          id: 5,
          shopImg:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1606288963.72951431.jpg",
          shop: "小米10",
          price: 4000,
          number: 1,
          goodTotal: 4000,
        },
        {
          id: 6,
          shopImg:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1606288963.72951431.jpg",
          shop: "小米10",
          price: 4000,
          number: 1,
          goodTotal: 4000,
        },
        {
          id: 7,
          shopImg:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1606288963.72951431.jpg",
          shop: "小米10",
          price: 4000,
          number: 1,
          goodTotal: 4000,
        },
        {
          id: 8,
          shopImg:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1606288963.72951431.jpg",
          shop: "小米10",
          price: 4000,
          number: 1,
          goodTotal: 4000,
        },
        {
          id: 9,
          shopImg:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1606288963.72951431.jpg",
          shop: "小米10",
          price: 4000,
          number: 1,
          goodTotal: 4000,
        },
        {
          id: 10,
          shopImg:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1606288963.72951431.jpg",
          shop: "小米10",
          price: 4000,
          number: 1,
          goodTotal: 4000,
        },
        {
          id: 11,
          shopImg:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1606288963.72951431.jpg",
          shop: "小米10",
          price: 4000,
          number: 1,
          goodTotal: 4000,
        },
        {
          id: 12,
          shopImg:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1606288963.72951431.jpg",
          shop: "小米10",
          price: 4000,
          number: 1,
          goodTotal: 4000,
        },
        {
          id: 13,
          shopImg:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1606288963.72951431.jpg",
          shop: "小米10",
          price: 4000,
          number: 1,
          goodTotal: 4000,
        },
        {
          id: 14,
          shopImg:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1606288963.72951431.jpg",
          shop: "小米10",
          price: 4000,
          number: 1,
          goodTotal: 4000,
        },
        {
          id: 15,
          shopImg:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1606288963.72951431.jpg",
          shop: "小米10",
          price: 4000,
          number: 1,
          goodTotal: 4000,
        },
      ],
      totalPrice: 0,
      multipleSelection: [],
      selectionId: [], //表格select复选框选中的id
    };
  },
  computed: {},
  methods: {
    // 删除单个商品
    handleDelete(index, row) {
      this.$confirm("确定删除该商品？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //删除数组中指定的元素
          this.tableData.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 数量变化触发
    handleInput(value) {
      console.log(value);
      if (null == value.number || value.number == "" || value.number == 0) {
        value.number = 1;
      }
      value.goodTotal = (value.number * value.price).toFixed(2); //保留两位小数
      //增加商品数量也需要重新计算商品总价
      this.handleSelectionChange(this.multipleSelection);
    },
    add(addGood) {
      //输入框输入值变化时会变为字符串格式返回到js
      //此处要用v-model，实现双向数据绑定
      if (typeof addGood.number == "string") {
        addGood.number = parseInt(addGood.number);
      }
      addGood.number += 1;
      addGood.goodTotal = (addGood.number * addGood.price).toFixed(2); //保留两位小数
      this.handleSelectionChange(this.multipleSelection);
    },
    del(delGood) {
      if (typeof delGood.number == "string") {
        delGood.number = parseInt(delGood.number);
      }
      if (delGood.number > 1) {
        delGood.number -= 1;
        delGood.goodTotal = (delGood.number * delGood.price).toFixed(2); //保留两位小数
        this.handleSelectionChange(this.multipleSelection);
      }
    },
    handleSelectionChange(selection) {
      this.multipleSelection = selection;
      this.totalPrice = 0;
      console.log(this.multipleSelection);
      // 此处不支持forEach循环，只能用原始方法了
      for (var i = 0; i < selection.length; i++) {
        //判断返回的值是否是字符串
        if (typeof selection[i].goodTotal == "string") {
          selection[i].goodTotal = parseInt(selection[i].goodTotal);
        }
        this.totalPrice += selection[i].goodTotal;
      }
    },

    getRowKeys(row) {
      // console.log(row);
      //记录每行的key值
      return row.id; //id 自己查看 row 里的数据
    },
    handleNext() {
      console.log(this.multipleSelection);
      if (this.active > 1) return;
      if (this.stepActive < 2) this.stepActive++;
    },
    handlePrev() {
      console.log(this.multipleSelection);
      if (this.stepActive < 1) return;
      if (this.stepActive > 0) this.stepActive--;
    },
    handleSubmit() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      loading.close();
      this.stepActive++;
    },
    handleOk() {
      this.stepActive = 0;
    },
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
.cart-table {
  // min-width: 62.4375rem;
  margin: 3.125rem 0 0.625rem 0;
  position: relative;
  ::v-deep .el-input__inner {
    text-align: center;
  }
  ::v-deep .el-input-group__append {
    padding: 0 15px;
  }
  ::v-deep .el-input-group__prepend {
    padding: 0 15px;
  }
  .shopImg {
    width: 100%;
  }
  .price,
  .shop {
    color: #000733;
  }
  .count {
    color: #3498db;
  }
  ::v-deep .el-checkbox__inner {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #3498db;
    border-color: #3498db;
  }
  ::v-deep .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #3498db;
    border-color: #3498db;
  }
  ::v-deep .el-checkbox__inner::after {
    left: 7px;
    top: 3px;
  }
  ::v-deep .el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
    top: 7px;
  }
  .cart-submit {
    // position: absolute;
    // right: 0;
    // left: 0;
    margin: 20px;
    .submitBar {
      color: #757575;
      display: flex;
      align-items: center;
      strong {
        color: #3498db;
        margin: 0 5px;
      }
      span {
        display: flex;
        align-items: center;
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
  }
}
</style>
