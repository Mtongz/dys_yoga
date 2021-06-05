<template>
  <div class="recommend-card">
    <div class="left"><slot name="left">123131</slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right">231213</slot></div>
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
  methods: {},
  mounted() {},
};
</script>
<style scoped lang="scss">
.recommend-card {
  width: 70rem;
  height: 25rem;
  background: chartreuse;
  display: flex;
  margin: 0 auto;
  border: 0.0625rem solid red;
  align-items: center;
  .left,
  .right {
    flex: 1;
  }
  .left {
    display: flex;
    justify-content: flex-end;
  }
  .center {
    width: 20rem;
    height: 100%;
    border: 1px solid blue;
    margin: 1.25rem;
    img {
      width: 100%;
    }
  }
  .right {
    // display: none;
    display: flex;
    justify-content: flex-start;
  }
}
</style>
