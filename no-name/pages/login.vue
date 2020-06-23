<template>
  <!-- 登录与注册页面 -->
  <div class="login">
    <!-- 登录 -->
    <div class="logo">登录</div>
    <input
      v-model="formData.logoPhone"
      maxlength="11"
      class="account"
      placeholder="输入手机号"
      type="text"
    />
    <input v-model="formData.logoPassword" class="password" placeholder="输入密码" type="text" />
    <div @click="login" class="submit">
      <div class="cuIcon-right"></div>
    </div>
    <div @click="registerPopUp" class="registerPopUp">用户注册</div>
    <!-- 注册弹框 -->
    <view
      @click="registerPopUp"
      :class="registerPopUpShow? 'cu-modal bottom-modal show': 'cu-modal bottom-modal'"
    >
      <view @click.stop="stop" class="cu-dialog">
        <view class="cu-bar bg-white">
          <view @click="registerPopUp" class="action text-blue">取消</view>
          <div v-if="hint" class="hint">{{ hintText }}</div>
          <view @click="register" class="action text-green">注册</view>
        </view>
        <view class="padding-xl">
          <input
            v-model="formData.registerPhone"
            maxlength="11"
            class="account"
            placeholder="输入手机号"
            type="text"
          />
          <input
            v-model="formData.registerPassword"
            class="password"
            placeholder="输入密码"
            type="text"
          />
          <input v-model="formData.PasswordAffirm" class="password" placeholder="确认密码" type="text" />
        </view>
      </view>
    </view>
  </div>
</template>
<script>
import { isPoneAvailable } from "@/utils";
import { login, register, getUserInfo } from "@/api";
export default {
  data() {
    return {
      registerPopUpShow: false, // 注册弹框是否显示
      formData: {
        logoPhone: "", // 登录手机号
        logoPassword: "", // 登录密码
        registerPhone: "", // 注册手机号
        registerPassword: "", // 注册密码
        PasswordAffirm: "" // 确认密码
      },
      hint: false, // 提醒是否显示
      hintText: ""
    };
  },
  methods: {
    login() {
      // 登录
      if (!isPoneAvailable(this.formData.logoPhone)) {
        uni.showToast({
          title: "请输入正确的手机号", //提示的内容,
          icon: "none", //图标,
          duration: 1500, //延迟时间,
          mask: false //显示透明蒙层，防止触摸穿透,
        });
        return;
      }
      if (this.formData.logoPassword == "") {
        uni.showToast({
          title: "请将信息填写完整", //提示的内容,
          icon: "none", //图标,
          duration: 1500, //延迟时间,
          mask: false //显示透明蒙层，防止触摸穿透,
        });
        return;
      }
      let data = {
        phone: this.formData.logoPhone,
        upwd: this.formData.logoPassword
      };
      login(data).then(res => {
        if (res.ok) {
          uni.showToast({
            title: "登录成功", //提示的内容,
            icon: "none", //图标,
            duration: 1500, //延迟时间,
            mask: true //显示透明蒙层，防止触摸穿透,
          });
          // 获取用户信息 -- 如果用户设置过昵称和头像直接进入
          getUserInfo({ uid: res.data.uid }).then(info => {
            console.log(info);
            setTimeout(() => {
              if (info.ok && info.data.uname && info.data.avatar) {
                uni.setStorageSync("UID", res.data.uid);
                uni.setStorageSync("USERINFO", info.data);
                uni.redirectTo({ url: "/pages/plaza" });
              } else {
                uni.redirectTo({
                  url: "/pages/basicSetup?uid=" + res.data.uid
                });
              }
            }, 1200);
          });
        } else {
          uni.showToast({
            title: res.msg, //提示的内容,
            icon: "none", //图标,
            duration: 1500, //延迟时间,
            mask: true //显示透明蒙层，防止触摸穿透,
          });
        }
        console.log(res, "登录情况");
      });
    },
    register() {
      // 注册
      if (!isPoneAvailable(this.formData.registerPhone)) {
        this.hint = true;
        this.hintText = "请输入正确的手机号";
        return;
      }
      if (this.formData.registerPassword != this.formData.PasswordAffirm) {
        this.hint = true;
        this.hintText = "两次密码输入不一致";
        return;
      }
      if (this.formData.registerPassword == "") {
        this.hint = true;
        this.hintText = "请将信息填写完整";
        return;
      }
      this.hint = false;
      let data = {
        phone: this.formData.registerPhone,
        upwd: this.formData.registerPassword
      };
      register(data).then(res => {
        if (res.ok) {
          uni.showToast({
            title: "注册成功", //提示的内容,
            icon: "none", //图标,
            duration: 1500, //延迟时间,
            mask: true //显示透明蒙层，防止触摸穿透,
          });
          setTimeout(() => {
            this.registerPopUp();
          }, 1000);
        } else {
          uni.showToast({
            title: res.msg, //提示的内容,
            icon: "none", //图标,
            duration: 1500, //延迟时间,
            mask: true //显示透明蒙层，防止触摸穿透,
          });
        }
        console.log(res, "登录情况");
      });
      console.log(this.formData, isPoneAvailable(this.formData.registerPhone));
    },
    registerPopUp() {
      // 去注册弹框控制
      this.registerPopUpShow = !this.registerPopUpShow;
      this.formData.registerPhone = "";
      this.formData.registerPassword = "";
      this.formData.PasswordAffirm = "";
      return;
    },
    stop() {
      // 停止冒泡
      return;
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  input {
    background: #eee;
    width: 80%;
    margin: 0 auto;
    border-radius: 40upx;
    height: 80upx;
    margin-top: 20upx;
    color: #333;
    caret-color: #39b54a;
    text-align: center;
  }
  .logo {
    margin-top: 250upx;
    width: 100%;
    text-align: center;
    font-size: 45upx;
    color: #39b54a;
    margin-bottom: 50upx;
  }
  .submit {
    width: 110upx;
    height: 110upx;
    background: #eee;
    border-radius: 50%;
    margin: 70upx auto 0;
    .cuIcon-right {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 110upx;
      font-size: 55upx;
      color: #39b54a;
    }
  }
  .registerPopUp {
    position: absolute;
    bottom: 50upx;
    left: 0;
    color: #999;
    width: 100%;
    text-align: center;
  }
  .cu-dialog {
    .action {
      font-size: 32upx;
      margin-left: 0;
    }
  }
  .hint {
    color: red;
  }
}
</style>