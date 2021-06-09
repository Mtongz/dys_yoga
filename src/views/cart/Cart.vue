<template>
  <div class="cart">
    <router-view></router-view>
    <cart-card class="cart-card"></cart-card>
  </div>
</template>

<script>
import CartCard from "./components/CartCard";
export default {
  name: "Cart",
  props: {},
  components: {
    CartCard
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
.cart {
  width: 90rem;
  margin: 0 auto;
  // display: flex;
  // position: relative;
}
.cart-card {
  position: fixed;
  top: 50%;
  right: 2.5rem;
  transform: translateY(-50%);
  width: 20rem;
  z-index: 1;
}
</style>
