<template>
  <div class="loginform">
    <div class="login-title">Sign in to your account</div>
    <el-form
      :model="loginForm"
      :rules="rules"
      hide-required-asterisk
      ref="loginForm"
      label-width="100px"
      label-position="top"
      class="login-form"
    >
      <!-- 用户名 -->
      <el-form-item label="Email Address" prop="username">
        <el-input
          type="text"
          autocomplete="current-password"
          class="login-username"
          v-model="loginForm.username"
        ></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item
        label="Password"
        prop="password"
      >
        <el-input
          type="password"
          autocomplete="current-password"
          class="login-password"
          v-model="loginForm.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <div class="login-forgetpwd">
          <a class="linkFont" href="#">Forgot Password?</a>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('loginForm')"
          class="login-btn"
          :loading="isLoginIng"
          >SIGN IN</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      isLoginIng: false,
    };
  },
  computed: {
    rules() {
      return {
        username: [
          {
            required: true,
            message: "请输入用户名或邮箱",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      };
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const email = this.loginForm.username;
          const password = this.loginForm.password;
          this.isLoginIng = true;
          this.$http.userApi.login({
            email,
            password
          }).then(res=>{
            console.log(res);
            localStorage.setItem('token',res.data.session_id)
            this.$store.commit("setToken", res.data.session_id)
            this.$router.push("/home");
            this.isLoginIng = false;
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
/deep/.el-form-item {
  margin-bottom: 11px;
}
/deep/.el-form-item__label {
  padding: 0;
}
.loginform {
  width: 500px;
  padding: 20px 40px;
}
.login-title {
  font-size: 18px;
  font-weight: 600;
  // text-align: center;
}
.login-form {



  .linkFont{
    text-decoration: underline;
  }
  .login-btn {
    width: 100%;
    background: #bfbfbf;
    border: none;
    font-weight: bold;
  }
}
</style>
