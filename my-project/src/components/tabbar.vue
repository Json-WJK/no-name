<template>
  <div class="tabbar">
    <div v-for="(item,index) in list" :key="index" @click="switchSelect(index)" class="tabbar-item">
      <div class>
        <i class="iconfont" v-html="item.icon" :style="{color: select == index? '#02b2b5': '#999'}"></i>
      </div>
      <div :style="{color: select == index? '#02b2b5': '#999'}">{{ item.text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { router: "/home", text: "首页", icon: "&#xe642;" },
        { router: "/member", text: "我的", icon: "&#xe601;" }
      ],
      select: 0
    };
  },
  mounted() {
    this.monitor()
  },
  methods: {
    switchSelect(index) {
      this.monitor()
      this.$router.replace(this.list[index].router)
    },
    monitor() {
      this.list.map((item,index)=> {
        item.router == this.$route.path && (this.select = index)
      })
    }
  }
};
</script>
<style lang="scss" scope>
@import "@/assets/scss/mixin.scss";
.tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  box-shadow: #eee 0px 0px 10px;
  height: 96px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  &-item {
    height: 100%;
    width: 150px;
    box-sizing: border-box;
    padding: 5px;
  }
  .iconfont {
    font-size: 40px;
    color: $auxiliaryColor;
  }
}
</style>