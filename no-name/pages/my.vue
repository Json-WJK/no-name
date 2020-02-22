<template>
  <!-- my 我的页面 -->
  <div :style="{marginTop: statusBarHeight + 'px'}" class="my">
    <!-- 个人基本信息 -->
    <div class="basicInformation">
      <div :style="{marginTop: '-' + statusBarHeight + 'px'}" class="bg">
        <img src="@/static/img/用户默认背景.jpeg" alt />
      </div>
      <!-- 顶部各种功能 -->
      <div :style="{top: statusBarHeight + 'px'}" class="function">
        <div class="addFriends">
          <span class="cuIcon-friendadd"></span>
          <span class="text">加好友</span>
        </div>
        <div class="set">设置</div>
      </div>
      <!-- 用户头像昵称等 -->
      <div class="information">
        <div class="avatar">
          <img
            src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4034879928,1229713244&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div class="name">
          <span class="text">地铁站的风!</span>
          <span class="cuIcon-write"></span>
        </div>
        <div class="record">
          <span class="time">405天，</span>
          <span class="moment">2瞬间</span>
        </div>
      </div>
    </div>
    <!-- tabbar -->
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from "@/components/TabBar";
export default {
  components: {
    TabBar
  },
  data() {
    return {
      statusBarHeight: uni.getStorageSync("statusBarHeight")
    };
  }
};
</script>
<style lang="less" scoped>
.my {
  .basicInformation {
    position: relative;
    .bg {
      position: absolute;
      left: 0;
      background: rgb(175, 221, 189);
      width: 100%;
      height: 500upx;
      z-index: -1;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .function {
      position: fixed;
      right: 0;
      display: flex;
      align-items: center;
      height: 45upx;
      box-sizing: border-box;
      padding: 0 25upx;
      .addFriends {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 20upx;
        color: #fff;
        box-sizing: border-box;
        padding: 0 10upx;
        height: 40upx;
        line-height: 40upx;
        .text {
          font-size: 20upx;
        }
      }
      .set {
        color: #fff;
        margin-left: 15upx;
        font-size: 28upx;
      }
    }
    .information {
      .avatar {
        text-align: center;
        img {
          width: 135upx;
          height: 135upx;
          border-radius: 50%;
          background: #eee;
          box-sizing: border-box;
          border: 4upx solid #fff;
          margin-top: 150upx;
        }
      }
      .name {
        text-align: center;
        margin-top: 15upx;
        color: #fff;
        .text {
          display: inline-block;
          margin-right: 5px;
        }
      }
      .record {
        text-align: center;
        margin-top: 10upx;
        color: #fff;
      }
    }
  }
}
</style>