<template>
  <!-- 用户首次登录设置基础信息 -->
  <div class="basicSetup">
    <!-- 用户头像 -->
    <div @click="chooseImage" class="avatar">
      <image v-if="avatarPath" :src="$HTTP + avatarPath" mode="aspectFill" alt />
      <image
        v-else
        src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4034879928,1229713244&fm=26&gp=0.jpg"
        alt
      />
    </div>
    <!-- 用户名称 -->
    <div class="name">
      <div class="hint">我们应该如何称呼您</div>
      <input v-model="name" maxlength="20" type="text" placeholder="设置昵称" />
    </div>
    <!-- 继续 -->
    <button @click="submit" class="cu-btn block bg-blue margin-tb-sm lg button">继续</button>
  </div>
</template>
<script>
import { basicSetup, getUserInfo } from "@/api";
export default {
  data() {
    return {
      uid: "",
      avatarPath: "",
      name: ""
    };
  },
  onLoad(options) {
    this.uid = options.uid;
    console.log(this.uid);
  },
  methods: {
    submit() {
      // 提交用户头像与用户昵称
      if (!this.avatarPath) {
        wx.showToast({
          title: "请选择您的头像", //提示的内容,
          icon: "none", //图标,
          duration: 1500, //延迟时间,
          mask: false //显示透明蒙层，防止触摸穿透,
        });
        return;
      }
      if (!this.name) {
        wx.showToast({
          title: "请设置您的昵称", //提示的内容,
          icon: "none", //图标,
          duration: 1500, //延迟时间,
          mask: false //显示透明蒙层，防止触摸穿透,
        });
        return;
      }
      let data = {
        uid: this.uid,
        avatar: this.avatarPath,
        uname: this.name
      };
      // 基本设置
      basicSetup(data).then(res => {
        uni.setStorageSync("UID", res.msg);
        let data = {
          uid: uni.getStorageSync("UID")
        };
        // 获取用户信息
        getUserInfo(data).then(res => {
          console.log(res);
          if (res.ok) {
            uni.setStorageSync("USERINFO", res.data);
          }
        });
        if (res.ok) {
          uni.showToast({
            title: "设置成功", //提示的内容,
            icon: "none", //图标,
            duration: 1500, //延迟时间,
            mask: true //显示透明蒙层，防止触摸穿透,
          });
          setTimeout(() => {
            wx.redirectTo({ url: "/pages/plaza" });
          }, 1200);
        }
      });
    },
    chooseImage() {
      // 上传头像
      uni.chooseImage({
        success: chooseImageRes => {
          const tempFilePaths = chooseImageRes.tempFilePaths;
          uni.uploadFile({
            url: "http://localhost:1997/user/uploadFile", //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: "file",
            success: uploadFileRes => {
              console.log(uploadFileRes);
              if (uploadFileRes.statusCode == 200) {
                this.avatarPath = JSON.parse(uploadFileRes.data).filePath;
                console.log(this.avatarPath);
              }
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.basicSetup {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  .avatar {
    width: 500upx;
    height: 500upx;
    background: #eee;
    margin: 200upx auto 0;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    width: 500upx;
    margin: 30upx auto 0;
    .hint {
      color: #999;
    }
    input {
      width: 100%;
      height: 65upx;
      margin-top: 15upx;
      background: #eee;
      caret-color: #39b54a;
      box-sizing: border-box;
      padding: 0 10upx;
    }
  }
  .button {
    width: 500upx;
    margin: 50upx auto 0;
    background: #39b54a;
  }
}
</style>