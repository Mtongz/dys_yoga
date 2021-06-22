<template>
  <div class="">
    <el-row :gutter="20">
      <el-col :span="6" v-for="(o, index) in 20" :key="o" class="card-item">
        <el-card :body-style="{ padding: '0' }">
          <img v-lazy="imgUrl" class="image" @click="handleClick(o)"/>
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "CommoditiesMain",
  components: {},
  data() {
    return {
      currentDate: new Date(),
      imgUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
    };
  },
  computed: {},
  methods: {
    handleClick(kw) {
      this.$router.push({
        name: 'CommoditiesDetail',
        query: {
          kw
        }
      })
    }
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
.card-item {
  margin-bottom: 4.25rem;
}
.time {
  font-size: 13px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  cursor: pointer;
}
</style>
