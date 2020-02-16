<template>
  <div class="LoginOrRegister">
    <div class="LoginOrRegister-mask">
      <div
        class="LoginOrRegister-mask-window"
        :style="{maxHeight: LoginOrRegister? '5.6rem': '6.6rem'}"
      >
        <div class="window-title">
          <span class="window-title-at">{{LoginOrRegister? '登录': '注册'}}</span>
          <span class="window-title-shut" @click="shut">x</span>
        </div>
        <div class="window-form">
          <input
            v-if="!LoginOrRegister"
            type="text"
            class="account"
            placeholder="请输入昵称"
            v-model="name"
          />
          <input type="text" class="account" placeholder="请输入手机号" v-model="account" />
          <input
            type="password"
            class="password"
            :placeholder="LoginOrRegister? '请输入密码': '请输入密码（不少于6位）'"
            v-model="password"
          />
          <button class="cursor-pointer" @click="LoginOrRegisterF">{{LoginOrRegister? '登录': '注册'}}</button>
        </div>
        <div class="window-ify">
          <span class="window-ify-at">{{LoginOrRegister? '没有账号？': ''}}</span>
          <span
            class="window-ify-switchover cursor-pointer"
            @click="switchover()"
          >{{LoginOrRegister? '注册': '已有账号登录'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { isPoneAvailable } from "@/utils";
import { register, login } from "@/api/api";
import { Toast } from "mand-mobile";
export default {
  data() {
    return {
      LoginOrRegister: 1, // 当前为 登录或注册  1:登录 0:注册
      name: "", // 昵称
      account: "", // 账号
      password: "" // 密码
    };
  },
  methods: {
    LoginOrRegisterF() {
      // 登录或注册
      if (!this.verify()) return;
      console.log(this.LoginOrRegisterF);
      this.LoginOrRegister ? this.login() : this.register();
    },
    verify() {
      // 验证
      console.log(
        this.LoginOrRegister,
        this.name,
        this.accoount,
        this.password
      );
      // return false;
      if (!this.LoginOrRegister && !this.name) {
        Toast.failed("请输入正确的昵称");
        return false;
      } else if (!isPoneAvailable(this.account)) {
        Toast.failed("请输入正确的手机号");
        return false;
      } else if (this.password.length < 6) {
        Toast.failed("密码设置不能少于6位");
        return false;
      }
      // return false
      return true;
    },
    login() {
      // 登录
      let data = {
        phone: this.account,
        upwd: this.password
      };
      login(data).then(res => {
        if (res.ok) {
          Toast.succeed(res.msg);
          this.shut();
          // 本地存储用户信息
          localStorage.setItem("loginInfo", JSON.stringify(res.data.items[0]));
          this.$store.commit("setAPPRefresh", true);
          console.log(res.data.items[0]);
        } else {
          Toast.failed(res.msg);
        }
      });
    },
    register() {
      console.log("注册");
      // 注册
      let data = {
        uname: this.name,
        phone: this.account,
        upwd: this.password
      };
      register(data).then(res => {
        if (res.ok) {
          Toast.succeed("恭喜你，注册成功!");
          this.LoginOrRegister = !this.LoginOrRegister;
          this.account = "";
          this.password = "";
        } else {
          Toast.failed(res.msg);
        }
      });
    },
    switchover() {
      // 切换登录与注册
      this.LoginOrRegister = !this.LoginOrRegister;
      this.account = "";
      this.password = "";
      this.name = "";
    },
    shut() {
      // 关闭窗口
      this.$emit("shut");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
.LoginOrRegister {
  font-size: 14 * 2px;
  &-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
    &-window {
      width: 100%;
      height: 100%;
      max-width: 320 * 2px;
      max-height: 280 * 2px;
      background: #fff;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      box-sizing: border-box;
      padding: 24 * 2px;
      .window-title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 24 * 2px;
        margin-bottom: 24 * 2px;
        &-at {
          font-weight: bold;
          color: #000;
          font-size: 18 * 2px;
        }
        &-shut {
          color: #aaa;
          font-size: 17 * 2px;
        }
      }
      .window-form {
        width: 100%;
        input {
          width: 100%;
          height: 40 * 2px;
          border: 1 * 2px solid #e9e9e9;
          border-radius: 2 * 2px;
          box-sizing: border-box;
          padding: 10 * 2px;
          margin-bottom: 10 * 2px;
          display: block;
        }
        button {
          width: 100%;
          height: 40 * 2px;
          font-size: 14 * 2px;
          color: #fff;
          background: $subjectColor;
          margin-top: 10 * 2px;
          display: block;
        }
      }
      .window-ify {
        height: 18 * 2px;
        width: 100%;
        font-size: 13 * 2px;
        margin-top: 10 * 2px;
        text-align: center;
        &-at {
          color: #aaa;
        }
        &-switchover {
          color: $subjectColor;
        }
      }
    }
  }
}
</style>
