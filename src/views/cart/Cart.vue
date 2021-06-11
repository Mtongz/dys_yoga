<template>
  <div class="page">
    <div class="cart">
      <cart-table class=""></cart-table>
      <cart-action-box class="action-box"></cart-action-box>
    </div>
  </div>
</template>

<script>
import CartTable from "./components/CartTable";
import CartActionBox from "./components/CartActionBox";
export default {
  name: "Cart",
  props: {},
  components: {
    CartTable,
    CartActionBox,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.page {
  background: #f5f5f5;
  padding-bottom: 3.75rem;
}
.cart {
  max-width: 90rem;
  min-width: 70rem;
  margin: 0 auto;

  // display: flex;
  // position: relative;
}
.action-box {
  margin: 0 auto;
  max-width: 90rem;
  min-width: 70rem;
  height: 3rem;
  background: #fff;
}
</style>
