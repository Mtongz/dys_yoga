<template>
  <div class="home">
    <el-button type="primary" @click="handleClick">el-button</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    handleClick() {
      this.$router.push('/login')
    },
  },
};
</script>
