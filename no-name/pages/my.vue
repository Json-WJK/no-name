<template>
  <!-- my 我的页面 -->
  <div :style="{marginTop: statusBarHeight + 'px'}" class="my">
    <!-- 个人基本信息 -->
    <div class="basicInformation">
      <div :style="{marginTop: '-' + statusBarHeight + 'px'}" class="bg">
        <img src="@/static/img/UserDefaultBg.jpeg" alt />
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
          <image @click="avatarModel" :src="$HTTP + userInfo.avatar" mode="aspectFill" alt />
        </div>
        <div @click="nameModel" class="name">
          <span class="text">{{ userInfo.uname }}</span>
          <span class="cuIcon-write"></span>
        </div>
        <div class="record">
          <span class="time">{{ day }}天，</span>
          <span class="moment">{{ userInfo.momentQuantity }}瞬间</span>
        </div>
      </div>
    </div>
    <!-- 瞬间 动态 -->
    <div class="moment">
      <div v-for="(item, index) in momentList" :key="index" class="every">
        <!-- 时间及操作 -->
        <div class="timeAndOperation">
          <span class="time">{{ item.creationTime }}</span>
          <span class="operation">
            <text class="lg text-gray" :class="'cuIcon-moreandroid'" style="color: #333;"></text>
          </span>
        </div>
        <!-- 文字 -->
        <div class="text">{{ item.content }}</div>
        <!-- 单一图片 -->
        <div v-if="item.images.length == 1" class="imgOnly">
          <div class="img">
            <img src="@/static/img/UserDefaultBg.jpeg" alt />
          </div>
        </div>
        <!-- 多图片 -->
        <div v-if="item.images.length > 1" class="imgs">
          <div class="img">
            <img src="@/static/img/UserDefaultBg.jpeg" alt />
          </div>
          <div class="img">
            <img src="@/static/img/UserDefaultBg.jpeg" alt />
          </div>
          <div class="img">
            <img src="@/static/img/UserDefaultBg.jpeg" alt />
          </div>
          <div class="img">
            <img src="@/static/img/UserDefaultBg.jpeg" alt />
          </div>
          <div class="img">
            <img src="@/static/img/UserDefaultBg.jpeg" alt />
          </div>
        </div>
      </div>
    </div>
    <!-- 更改头像弹框 -->
    <view
      @click="avatarModel"
      :class="avatarModelShow? 'avatarModel cu-modal show': 'avatarModel cu-modal'"
    >
      <view @click.stop="stop" class="cu-dialog">
        <view class="bg-img">
          <view class="image">
            <image :src="$HTTP + userInfo.avatar" mode="aspectFill" />
          </view>
        </view>
        <view @click="chooseImage" class="cu-bar bg-white">
          <view class="action margin-0 flex-sub solid-left">更换头像</view>
        </view>
      </view>
    </view>
    <!-- 更改昵称 -->
    <view @click="nameModel" class="cu-modal" :class="nameModelShow? 'show': ''">
      <view class="cu-dialog">
        <view @click.stop="stop" class="cu-bar bg-white justify-end">
          <view class="content">修改昵称</view>
          <view class="action" @click="nameModel">
            <text class="cuIcon-close text-red"></text>
          </view>
        </view>
        <view @click.stop="stop" class="padding-xl">
          <input v-model="uname" maxlength="20" class="setName" type="text" />
        </view>
        <view @click.stop="stop" class="cu-bar bg-white justify-end">
          <view class="action">
            <button class="cu-btn bg-green margin-left" @click="setName">确定</button>
          </view>
        </view>
      </view>
    </view>
    <!-- loading -->
    <loading v-show="loadingShow"></loading>
    <!-- tabbar -->
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from "@/components/TabBar";
import loading from "@/components/loading";
import { getUserInfo, basicSetup, getUserMoment } from "@/api";
export default {
  components: {
    TabBar,
    loading
  },
  data() {
    return {
      statusBarHeight: uni.getStorageSync("statusBarHeight"), // 兼容安卓通知栏
      userInfo: {}, // 用户信息
      momentList: [],
      avatarModelShow: false, //更换用户头像弹框
      nameModelShow: false, // 更改用户昵称弹框
      loadingShow: false, // loading是否显示
      uname: "" // 修改用户昵称表单数据
    };
  },
  computed: {
    // 用户id
    userId() {
      return uni.getStorageSync("UID");
    },
    // 用户注册账号天数
    day() {
      let dateSpan, tempDate, iDays, sDate1, sDate2;
      sDate1 = new Date(uni.getStorageSync("USERINFO").creationTime);
      sDate2 = new Date();
      dateSpan = sDate2 - sDate1;
      console.log(dateSpan);
      dateSpan = Math.abs(dateSpan);
      iDays = Math.ceil(dateSpan / (24 * 3600 * 1000));
      return iDays;
    }
  },
  onLoad() {
    this.loadingShow = true;
    this.getUserInfo();
    this.getUserMoment();
  },
  methods: {
    // 更改头像
    chooseImage() {
      uni.chooseImage({
        success: chooseImageRes => {
          const tempFilePaths = chooseImageRes.tempFilePaths;
          uni.uploadFile({
            url: this.$HTTP + "/user/uploadFile", //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: "file",
            success: uploadFileRes => {
              this.loadingShow = true;
              if (uploadFileRes.statusCode == 200) {
                let data = {
                  uid: this.userInfo.uid,
                  avatar: JSON.parse(uploadFileRes.data).filePath,
                  uname: this.userInfo.uname
                };
                this.avatarModel();
                this.setUserInfo();
              }
            }
          });
        }
      });
    },
    // 修改昵称
    setName() {
      if (!this.uname) {
        uni.showToast({
          title: "请将数据填写完成", //提示的内容,
          icon: "none", //图标,
          duration: 1500 //延迟时间,
        });
        return;
      }
      let data = {
        uid: this.userInfo.uid,
        avatar: this.userInfo.avatar,
        uname: this.uname
      };
      this.loadingShow = true;
      this.setUserInfo(data);
      this.nameModel();
    },
    // 修改用户信息
    setUserInfo(data) {
      basicSetup(data).then(res => {
        uni.setStorageSync("UID", res.msg);
        data = {
          uid: uni.getStorageSync("UID")
        };
        // 获取用户信息
        getUserInfo(data).then(res => {
          console.log(res);
          if (res.ok) {
            uni.setStorageSync("USERINFO", res.data);
            this.getUserInfo();
            this.loadingShow = false;
            wx.showToast({
              title: "更改成功", //提示的内容,
              icon: "none", //图标,
              duration: 1200 //延迟时间,
            });
          }
        });
      });
    },
    // 获取用户瞬间、动态
    getUserMoment() {
      getUserMoment(this.userId).then(res => {
        console.log(res, "啦啦啦");
        if (res.ok) {
          this.momentList = res.list;
        }
      });
    },
    // 更新用户信息
    getUserInfo() {
      this.userInfo = uni.getStorageSync("USERINFO") || {};
      this.loadingShow = false;
    },
    // 更换用户头像弹框控制
    avatarModel() {
      this.avatarModelShow = !this.avatarModelShow;
    },
    // 更换用户头像弹框控制
    nameModel() {
      this.nameModelShow = !this.nameModelShow;
      this.uname = "";
    },
    // 停止冒泡函数
    stop() {
      return;
    }
  }
};
</script>
<style lang="less" scoped>
.my {
  box-sizing: border-box;
  padding-bottom: 125upx;
  .basicInformation {
    position: relative;
    width: 100%;
    height: 500upx;
    .bg {
      position: absolute;
      left: 0;
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
        image {
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
  // 更换用户头像弹框
  .avatarModel {
    z-index: 99;
    .cu-dialog {
      width: 600upx;
      .bg-img {
        width: 600upx;
        height: 600upx;
        .image {
          width: 100%;
          height: 100%;
          image {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  // 更改用户昵称
  .cu-modal {
    z-index: 99;
    .setName {
      background: #eee;
      height: 70upx;
      caret-color: #39b54a;
      box-sizing: border-box;
      padding: 0 10upx;
    }
  }
  // 瞬间 动态
  .moment {
    width: 100%;
    box-sizing: border-box;
    padding: 20upx 15upx 20upx 20upx;
    .every {
      background: #fff;
      border-radius: 10upx;
      box-sizing: border-box;
      padding: 20upx;
      box-shadow: rgb(200, 200, 200) 0rpx 0rpx 15upx;
      .timeAndOperation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .time {
          color: #999;
        }
        .operation {
          text {
            font-size: 40upx;
          }
        }
      }
      .text {
        margin-top: 10upx;
        color: #333;
        box-sizing: border-box;
        padding-right: 10upx;
      }
      .imgOnly {
        box-sizing: border-box;
        margin-top: 10upx;
        padding-right: 10upx;
        .img {
          width: 100%;
          img {
            border-radius: 20upx;
            width: 100%;
          }
        }
      }
      .imgs {
        box-sizing: border-box;
        margin-top: 10upx;
        padding-right: 10upx;
        display: flex;
        flex-wrap: wrap;
        .img {
          width: 32%;
          img {
            border-radius: 20upx;
            width: 100%;
          }
        }
        .img:not(:nth-child(3n + 1)) {
          margin-left: 10upx;
        }
      }
    }
  }
}
</style>