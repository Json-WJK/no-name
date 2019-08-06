<template>
  <div class="LoginOrRegister">
    <div class="LoginOrRegister-mask">
      <div class="LoginOrRegister-mask-window">
        <div class="window-title">
          <span class="window-title-at">{{LoginOrRegister? '登录': '注册'}}</span>
          <span class="window-title-shut" @click="shut">x</span>
        </div>
        <div class="window-form">
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
            @click="LoginOrRegister = !LoginOrRegister;account = '';password = '';"
          >{{LoginOrRegister? '注册': '已有账号登录'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { isPoneAvailable } from "@/utils";
export default {
  data() {
    return {
      LoginOrRegister: 1, // 当前为 登录或注册  1:登录 0:注册
      account: "", // 账号
      password: "" // 密码
    };
  },
  methods: {
    LoginOrRegisterF() {
      if (!this.verify()) return;
      this.LoginOrRegister ? this.login() : this.register();
    },
    verify() {
      // 验证
      if (!isPoneAvailable(this.account)) {
        this.$notify({
          title: "错误",
          message: "请输入正确的手机号",
          type: "warning"
        });
        return false;
      } else if (this.password.length < 6 && !this.LoginOrRegister) {
        this.$notify({
          title: "错误",
          message: "密码设置不能少于6位",
          type: "warning"
        });
        return false;
      }
    },
    login() {
      // 登录
    },
    register() {
      // 注册
    },
    shut() {
      // 关闭窗口
      this.$emit("EmitLoginOrRegister");
    }
  }
};
</script>
<style lang="scss" scoped>
.LoginOrRegister {
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
      max-width: 320px;
      max-height: 300px;
      background: #fff;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      box-sizing: border-box;
      padding: 24px;
      .window-title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 23px;
        margin-bottom: 24px;
        &-at {
          font-weight: bold;
          color: #000;
          font-size: 18px;
        }
        &-shut {
          color: #aaa;
        }
      }
      .window-form {
        width: 100%;
        input {
          width: 100%;
          height: 40px;
          border: 1px solid #e9e9e9;
          border-radius: 2px;
          box-sizing: border-box;
          padding: 10px;
          margin-bottom: 10px;
        }
        button {
          width: 100%;
          height: 40px;
          font-size: 14px;
          color: #fff;
          background: #007fff;
          margin-top: 10px;
        }
      }
      .window-ify {
        height: 18px;
        width: 100%;
        font-size: 13px;
        margin-top: 10px;
        &-at {
          color: #aaa;
        }
        &-switchover {
          color: #007fff;
        }
      }
    }
  }
}
</style>
