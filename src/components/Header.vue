<template>
  <header>
    <div class="header-container">
      <section class="header-wrap dfbc">
        <div class="imb-logo">
          <h1>
            <a href="http://192.168.110.39:8080" title="imbella" class="logo-bd"
              >imbella</a
            >
          </h1>
        </div>
        <div class="imb-search-box" v-if="this.$route.path !== '/login'">
          <!-- 方案一：原生form -->
          <div class="imb-search">
            <form class="imb-searchForm">
              <input
                type="search"
                autocomplete="off"
                placeholder="海马，你的老婆怎么在我卡组里？"
                class="imb-search-keyword"
              />
              <div class="imb-search-btn">
                <span class="fa fa-search imb-search-submit"></span>
              </div>
            </form>
          </div>
        </div>
        <div class="imb-fastNav" v-if="this.$route.path !== '/login'">
          <div class="imb-userCenter">
            <div class="user-item">
              <a href="#">
                <span class="fa fa-gittip fa-2x mr1"></span>
                <span>My Favorites</span>
              </a>
            </div>
            <div class="user-item userLogin">
              <div class="user-info">
                <div v-if="$store.state.token" class="loginState">
                  <!-- <a href="#"
										>sadasdasdasdasd <span class="fa fa-angle-down"></span> -->
                  <el-popover
                    width="150"
                    trigger="hover"
                    placement="bottom-start"
                  >
                    <div>
                      <el-button size="mini" type="text" @click="personalCenter"
                        >账号管理</el-button
                      >
                      <el-button size="mini" type="primary" @click="loginOut"
                        >退出</el-button
                      >
                    </div>
                    <a href="#" slot="reference"
                      >sadasdasdasdasd<span class="fa fa-angle-down"></span
                    ></a>
                  </el-popover>
                  <!-- </a> -->
                </div>
                <div v-else>
                  <router-link to="/login">login</router-link>
                </div>
              </div>
            </div>
            <router-link to="/cart">
              <div class="user-item">
                <el-badge :value="2" :max="99" class="cart-sign">
                  <span class="fa fa-shopping-cart fa-2x"></span>
                </el-badge>
              </div>
            </router-link>
          </div>
        </div>
      </section>
      <nav class="header-nav clearfix">
        <ul>
          <li>NEW ARRIVALS</li>
          <li>BOTTOMS</li>
          <li>TOPS</li>
          <li>YOGA SET</li>
          <li>FUCTIONAL WEAR</li>
          <li>ACCESSORISE</li>
          <li>MEN</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  created() {
    // console.log(this.$route.path);
    console.log(this.$store.state.token);
    console.log(localStorage.getItem('token'));
  },
  methods: {
    personalCenter() {},
    loginOut() {
      this.$confirm("此操作将退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        localStorage.removeItem("token");
        this.$router.replace("/login");
      }).catch(()=>{
        console.log('quxiao');
      });

      // location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  // min-width: 999px;
  // margin: 0 auto;
  // background: coral;
  .header-container {
    min-width: 999px;
    max-width: 1630px;
    margin: 0 auto;
    transition: all 0.3s;
    // background: cornflowerblue;
    .header-wrap {
      // background: cornsilk;
      .imb-logo {
        h1 {
          .logo-bd {
            display: block;
            width: 170px;
            height: 69px;
            background: url("~assets/img/logo.png") 0 0 no-repeat;
            background-size: 170px auto;
            text-indent: -9999px;
            overflow: hidden;
          }
        }
      }
      .imb-search-box {
        margin: 0 10px;
        width: 520px;
        transition: width 0.3s;
        // background: cyan;
        .imb-search {
          position: relative;
          border: 1px solid #ddd;
          border-radius: 4px;
          .imb-searchForm {
            padding: 0 0 0 48px;
            border: 1px solid hsla(0, 0%, 100%, 0);
            border-radius: 2px;
            // background-color: #fff;
            .imb-search-keyword {
              overflow: hidden;
              width: 100%;
              height: 34px;
              border: none;
              outline: none;
              color: #999;
              font-size: 14px;
              line-height: 34px;
              transition: all 0.2s;
            }
            .imb-search-btn {
              position: absolute;
              top: 0;
              left: 0;
              width: 48px;
              height: 36px;
              cursor: pointer;
              .imb-search-submit {
                position: absolute;
                top: 8px;
                right: 16px;
                line-height: 20px;
              }
            }
          }
        }
      }
      .imb-fastNav {
        // background: pink;
        .imb-userCenter {
          display: flex;
          align-items: center;
          .user-item {
            margin: 0 12px;
            cursor: pointer;
            white-space: nowrap;
            letter-spacing: -1px;
            a {
              display: block;
              padding: 2px 4px;
              span {
                vertical-align: middle;
              }
              .cart-sign {
              }
            }
          }
        }
      }
    }
    .header-nav {
      position: relative;
      // background: crimson;
      height: 40px;
      line-height: 40px;
      > ul {
        position: absolute;
        top: 0;
        left: 6%;
        // transform: translateX(-50%);
        li {
          float: left;
          cursor: pointer;
          padding: 0 20px;
        }
      }
    }
  }
}
@media screen and (max-width: 1870px) {
  .header-container {
    width: 1440px;
    .header-wrap {
      .imb-search-box {
        width: 520px !important;
      }
    }
  }
}
@media screen and (max-width: 1654px) {
  .header-container {
    width: 1280px;
    .header-wrap {
      .imb-search-box {
        width: 480px !important;
      }
    }
  }
}

@media screen and (max-width: 1438px) {
  .header-container {
    width: 999px;
    .header-wrap {
      .imb-search-box {
        width: 360px !important;
      }
    }
  }
}
</style>
