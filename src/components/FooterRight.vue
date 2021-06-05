<template>
  <div class="footer-right">
    <div class="footer-infoMenu">
      <div class="footer-menuItem">
        <ul class="menuItem">
          <li>ABOUT</li>
          <li>MY ACCOUNT</li>
          <li>CONTACT US</li>
          <li>TERMS</li>
          <li>FAQs</li>
          <li>ABOUT</li>
          <li>MY ACCOUNT</li>
          <li>CONTACT US</li>
          <li>TERMS</li>
          <li>FAQs</li>
          <li>FAQs</li>
          <li>ABOUT</li>
          <li>MY ACCOUNT</li>
          <li>CONTACT US</li>
          <li>TERMS</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div class="footer-icon">
        <ul class="icon-item">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterRight",
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
.footer-right {
  position: relative;
  text-align: center;
}
.footer-infoMenu {
  padding: 1.25rem 0;
  margin-bottom: 0.625rem;
}
.footer-menuItem {
  .menuItem {
    height: 12.5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    > li {
      padding: 0.625rem;
    }
  }
}
.footer-icon {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  > ul > li {
    float: left;
    margin: 0.25rem;
  }
}
</style>
