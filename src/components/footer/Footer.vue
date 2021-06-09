<template>
  <footer
    class="imbella-footer mt3"
    :class="{
      isBlack: $route.meta.isBlack,
    }"
    v-if="!$route.meta.isHeaderHide"
  >
    <el-row class="footer-content">
      <register-form
        v-if="$route.path == '/home' || $route.path == '/commodities'"
        class="footer-left"
      ></register-form>

      <footer-left v-else class="footer-left-auth"></footer-left>

      <footer-right class="footer-right"></footer-right>
    </el-row>
    <section class="footer-copyright">
      <i class="fa fa-copyright"></i>
      <span>Imbella Co., Ltd</span>
    </section>
  </footer>
</template>

<script>
import RegisterForm from "views/user/components/RegisterForm";
export default {
  name: "Footer",
  components: {
    RegisterForm,
  },
  data() {
    return {
      form: {
        name: "",
        type: [],
        desc: "",
        resource: "",
      },
    };
  },
  mounted() {
    // console.log(this.$router.meta);
  },
  methods: {
    onSubmit() {
      this.$router.push("/Login");
    },
  },
};
</script>

<style lang="scss">
  .isBlack {
    background: #373f41;
    color: #fff;
  }
.imbella-footer {
  .footer-content {
    min-width: 62.4375rem;
    max-width: 101.875rem;
    margin: 0 auto;
    display: flex;
    font-size: .875rem;
    .footer-left {
    }
    .footer-left-auth {
      flex: 1;
    }
    .footer-right {
      flex: 1;
    }
  }
  .footer-copyright {
    text-align: center;
    min-width: 62.4375rem;
    max-width: 101.875rem;
    font-size: 1.125rem;
    margin: 0 auto;
  }
}
@media screen and (max-width: 1870px) {
  .footer-content,
  .footer-copyright {
    width: 90rem;
  }
}
@media screen and (max-width: 1654px) {
  .footer-content,
  .footer-copyright {
    width: 80rem;
  }
}

@media screen and (max-width: 1438px) {
  .footer-content,
  .footer-copyright {
    width: 62.4375rem;
  }
}
</style>
