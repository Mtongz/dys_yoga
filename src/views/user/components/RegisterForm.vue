<template>
  <div class="registerform">
    <div class="register-title">Create an account</div>
    <el-form
      :model="registerForm"
      :rules="rules"
      hide-required-asterisk
      ref="registerForm"
      label-width="100px"
      label-position="top"
      class="register-form"
    >
      <!-- 用户名 -->
      <el-form-item label="Email Address" prop="username">
        <el-input
          type="text"
          autocomplete="current-password"
          class="register-username"
          v-model="registerForm.username"
        ></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item label="Password" prop="password">
        <el-input
          type="password"
          autocomplete="current-password"
          class="register-password"
          v-model="registerForm.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <div class="register-forgetpwd">
          <el-checkbox v-model="registerChecked">
            Sign me up for
          </el-checkbox>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('registerForm')"
          class="register-btn"
          >CREATE ACCOUNT</el-button
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
      registerChecked: true,
      registerForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名或邮箱", trigger: "blur" },
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  computed: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const email = this.registerForm.username;
          const password = this.registerForm.password;
          console.log(this.$http);
          this.$http.userApi
            .register({
              email,
              password,
            })
            .then((res) => {
              console.log(res);
              if (res.code === 200) {
                this.$alert("注册成功！", {
                  confirmButtonText: "确定",
                });
              } else if (res.code === 600) {
                this.$message({
                  message: res.msg,
                  type: "warning",
                });
              }
            });
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
.registerform {
  width: 500px;
  padding: 20px 40px;
}
.register-title {
  font-size: 18px;
  font-weight: 600;
  // text-align: center;
}
.register-form {
  .register-btn {
    width: 100%;
    background: #bfbfbf;
    border: none;
    font-weight: bold;
  }
}
</style>
