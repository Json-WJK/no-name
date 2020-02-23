<template>
  <div class="blankPage">
    <loading v-show="loadingShow"></loading>
  </div>
</template>
<script>
import loading from "@/components/loading";
export default {
  components: {
    loading
  },
  data() {
    return {
      loadingShow: true
    };
  },
  onLoad() {
    this.whetherTheLogin(); // 是否登录
  },
  methods: {
    whetherTheLogin() {
      // 转跳
      setTimeout(() => {
        this.loadingShow = false;
        if (uni.getStorageSync("UID") && uni.getStorageSync("USERINFO")) {
          // 已经登录直接跳转首页
          uni.reLaunch({ url: "/pages/plaza" });
        } else {
          uni.reLaunch({ url: "/pages/login" });
        }
      }, 400);
    }
  }
};
</script>
<style lang="less" scoped>
.blankPage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>