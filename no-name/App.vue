<script>
export default {
  onLaunch: function() {
    console.log("App Launch");
    this.$store.commit("setUserInfo", uni.getStorageSync("USERINFO"));
    this.getSystemInfoSync(); // 获取手机信息
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
  methods: {
    getSystemInfoSync() {
      // 获取手机信息
      try {
        const res = uni.getSystemInfoSync();
        console.log(res.statusBarHeight);
        uni.setStorageSync("statusBarHeight", res.statusBarHeight);
      } catch (e) {
        // error
        console.log("获取手机信息错误");
      }
    }
  }
};
</script>

<style>
/* colorui样式引入 */
@import "/colorui/main.css";
@import "/colorui/icon.css";
@import "/colorui/animation.css";
@import "/styles/index.css";
@import "./uni.scss";
html,
body {
  font-size: 26upx;
}
/* colorui样式引入 */
/*每个页面公共css */
</style>
