<template>
  <footer class="imbella-footer mt3" v-if="!$route.meta.isHeaderHide">
    <el-row class="footer-content">
      <el-col :lg="12" :md="12" class="footer-leftForm df jcc">
        <el-form ref="form" :model="form" label-width="10px">
          <h3 class="fontl mb1">Join The Team</h3>
          <h4 class="fontm mb3">
            Sign up to join imbella for early access to new products and order
          </h4>
          <div class="df">
            <el-form-item prop="email">
              <el-input
                v-model="form.email"
                size="mini"
                placeholder="E-mail"
              ></el-input>
            </el-form-item>
            <el-form-item prop="name">
              <el-input
                v-model="form.name"
                size="mini"
                placeholder="Name"
              ></el-input>
            </el-form-item>
          </div>
          <el-form-item>
            <span class="formRidio">Email preference:</span>
            <el-radio-group class="df fdc" v-model="form.resource">
              <el-radio label="Women"></el-radio>
              <el-radio label="Men"></el-radio>
              <el-radio label="Both"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="info" round @click="onSubmit"
              >Sign Up Now</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :lg="12" :md="12" class="footer-rightInfo">
        <div class="footer-infoMenu dfac">
          <div class="footer-menuItem">
            <ul>
              <li>ABOUT</li>
              <li>MY ACCOUNT</li>
              <li>CONTACT US</li>
              <li>TERMS</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div class="footer-menuItem" style="visibility: hidden">
            <ul>
              <li>ABOUT</li>
              <li>MY ACCOUNT</li>
              <li>CONTACT US</li>
              <li>TERMS</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <div class="footer-icon">
          <ul class="df jcc">
            <li>
              <i class="fa fa-twitter-square fa-2x"></i>
            </li>
            <li>
              <i class="fa fa-facebook-square fa-2x"></i>
            </li>
            <li>
              <i class="fa fa-instagram fa-2x"></i>
            </li>
            <li class="fa fa-linkedin-square fa-2x"></li>
            <li>
              <i class="fa fa-wechat fa-2x"></i>
            </li>
            <li>
              <i class="fa fa-phone-square fa-2x"></i>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <section class="footer-copyright">
      <i class="fa fa-copyright"></i>
      <span>Imbella Co., Ltd</span>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
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
    console.log(this.$router.meta);
  },
  methods: {
    onSubmit() {
      this.$router.push("/Login");
    },
  },
};
</script>

<style lang="scss">
.imbella-footer {
  // width: 100vw;
  // min-width: 999px;
  // background: pink;
  .footer-content {
    max-width: 1630px;
    min-width: 999px;
    // margin: 0 auto;
    transition: all 0.3s;
    // background: peru;
    .footer-leftForm {
      // float: left;
      // background: red;
      .formRidio {
        font-size: 20px;
      }
    }
    .footer-rightInfo {
      // float: right;
      // background: blue;
      .footer-infoMenu {
        letter-spacing: -1px;
        .footer-menuItem {
          > ul > li {
            margin-top: 32px;
          }
        }
      }
      .footer-icon {
        > ul > li {
          margin: 20px;
        }
      }
    }
  }
  .footer-copyright {
    text-align: center;
    min-width: 999px;
    // background: cornflowerblue;
  }
}
@media screen and (max-width: 1870px) {
  .footer-content {
    width: 1440px;
  }
}
@media screen and (max-width: 1654px) {
  .footer-content {
    width: 1280px;
  }
}

@media screen and (max-width: 1438px) {
  .footer-content {
    width: 999px;
  }
}
</style>
