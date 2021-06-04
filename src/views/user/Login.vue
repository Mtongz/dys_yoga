<template>
  <div class="login">
    <div class="login-header"></div>
    <div class="login-content dfec">
      <login-form></login-form>
      <register-form></register-form>
    </div>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  components: {
    LoginForm,
    RegisterForm,
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.login {
  min-width: 1280px;
}
.login-header {
}
.login-content {
}
</style>
