<template>
  <div class="footer-left">
    <ul class="link-item">
      <li v-for="item in footerList">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterLeft",
  components: {},
  data() {
    return {
      footerList: [
        "ABOUT",
        "MY ACCOUNT",
        "CONTACT US",
        "TERMS",
        "FAQs",
        "MY ACCOUNT",
        "CONTACT US",
        "TERMS",
        "FAQs",
        "ABOUT",
        "MY ACCOUNT",
        "CONTACT US",
        "TERMS",
        "FAQs",
        "MY ACCOUNT",
        "CONTACT US",
        "TERMS",
        "FAQs",
      ],
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style scoped lang="scss">
.footer-left {
  padding: 1.25rem 0;
}
.link-item {
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-right: 1px solid #fff;
  > li {
    padding: 0.625rem;
  }
}
</style>
