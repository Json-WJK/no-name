<template>
  <div class="member">
    <LoginOrRegister v-if="LoginOrRegister"></LoginOrRegister>
    <tabbar></tabbar>
    <div class="impression"></div>
    <div class="user-info">
      <div class="avatar">
        <div v-if="loginInfo">
          <img v-if="loginInfo.avatar" :src="loginInfo.avatar" alt="">
          <i v-else class="iconfont photo" @click="LoginOrRegisterF">&#xe748;</i>
        </div>
        <div v-else>
          <i class="iconfont photo" @click="LoginOrRegisterF">&#xe748;</i>
          <span class="LoginOrRegister" @click="LoginOrRegisterF">登录/注册</span>
        </div>
        <div v-if="loginInfo" class="signIn">
          <span>
            <i class="iconfont">&#xe658;</i>
          </span>
          <span>签到</span>
        </div>
      </div>
      <div class="nameAndSignature" v-if="loginInfo">
        <div>
          <div class="name">{{ loginInfo.uname }}</div>
          <div class="signature">{{ loginInfo.signature || '这个人很酷，但他从来不说'}}</div>
        </div>
        <div>
          <span>
            <i class="iconfont compile">&#xe63c;</i>
          </span>
        </div>
      </div>
    </div>
    <submitBox></submitBox>
    <LoginOrRegister v-show="LoginOrRegister" @shut="LoginOrRegisterF"></LoginOrRegister>
  </div>
</template>
<script>
import LoginOrRegister from "@/components/LoginOrRegister";
import tabbar from "@/components/tabbar";
import submitBox from '@/components/submitBox'
import { Toast } from "mand-mobile";
export default {
  components: {
    LoginOrRegister,
    tabbar,
    submitBox
  },
  data() {
    return {
      loginInfo: null, // 用户信息
      LoginOrRegister: false
    };
  },
  mounted() {
    this.loginInfo = localStorage.getItem('loginInfo') && JSON.parse(localStorage.getItem('loginInfo'))
  },
  methods: {
    LoginOrRegisterF() {
      this.LoginOrRegister = !this.LoginOrRegister
    }
  }
};
</script>
<style lang="scss" scope>
@import "@/assets/scss/mixin.scss";
.member {
  text-align: left;
  .impression {
    position: absolute;
    top: 0;
    left: 0;
    height: 200px;
    border-right: 750px solid $subjectColor;
    border-bottom: 100px solid transparent;
    z-index: -1;
  }
  .user-info {
    .avatar {
      width: 95%;
      margin: 0 auto;
      margin-top: 150px;
      height: 130px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .photo {
        display: inline-block;
        width: 130px;
        height: 130px;
        font-size: 128px;
        box-sizing: border-box;
        border: 1px solid #fff;
        border-radius: 50%;
        margin-left: 20px;
        vertical-align: middle;
      }
      .LoginOrRegister {
        height: 100%;
        line-height: 130px;
        font-size: 30px;
        color: $titleColor;
        font-weight: 400;
        margin-left: 20px;
      }
      .signIn {
        background: #ffb820;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 12px;
        width: 120px;
        height: 50px;
        line-height: 50px;
        border-radius: 30px;
        color: #fff;
      }
    }
    .nameAndSignature {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 120px;
      width: 95%;
      margin: 0 auto;
      .name {
        font-size: 30px;
        font-weight: 600;
        color: $titleColor;
        margin-bottom: 5px;
      }
      .signature {
        color: $auxiliaryColor;
      }
      span {
        display: inline-block;
        background: $subjectColor;
        box-shadow: $subjectColor 0px 0px 5px;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-radius: 50%;
        .compile {
          color: #fff;
        }
      }
    }
  }
}
</style>