<template>
  <div class="cart-calc">
    <div class="df fdc">
      <span>您正在以一下身份结账:</span>
      <span>{{calcList.userId}}</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      calcList: {
        userId: '9157@gmail.com',

      }
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style scoped lang="scss"></style>
