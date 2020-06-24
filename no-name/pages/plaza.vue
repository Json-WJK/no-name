<template>
  <!-- 广场 -->
  <view :style="{marginTop: statusBarHeight + 'px'}" class="content">
    <!-- 瞬间 动态 -->
    <view v-for="(item,index) in momentList" :key="index" class="cu-card dynamic">
      <view class="cu-item shadow">
        <view class="cu-list menu-avatar">
          <view class="cu-item">
            <view class="cu-avatar round lg">
              <image style="width: 100%;height: 100%;" :src="$HTTP + item.userInfo.avatar" />
            </view>
            <view class="content flex-sub">
              <view>{{ item.userInfo.uname }}</view>
              <view class="text-gray text-sm flex justify-between">{{ item.creationTime }}</view>
            </view>
          </view>
        </view>
        <view v-if="item.content" class="text-content">{{ item.content }}</view>
        <!-- 单个图片 -->
        <view class="grid flex-sub padding-lr col-1">
          <view v-for="(el, i) in item.images" :key="i" class="bg-img only-img">
            <image :src="$HTTP + el" mode="aspectFill" alt />
          </view>
        </view>
        <!-- 点赞与评论数 -->
        <view class="text-gray text-sm text-right padding">
          <!-- <text class="cuIcon-attentionfill margin-lr-xs"></text>10 -->
          <text class="cuIcon-appreciatefill margin-lr-xs"></text>20
          <text class="cuIcon-messagefill margin-lr-xs"></text>30
        </view>
        <!-- 评论 -->
        <view v-if="false" class="cu-list menu-avatar comment solids-top">
          <view class="cu-item">
            <view
              class="cu-avatar round"
              style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"
            ></view>
            <view class="content">
              <view class="text-grey">莫甘娜</view>
              <view class="text-gray text-content text-df">凯尔，你被自己的光芒变的盲目。</view>
              <view class="bg-grey padding-sm radius margin-top-sm text-sm">
                <view class="flex">
                  <view>凯尔：</view>
                  <view class="flex-sub">妹妹，你在帮他们给黑暗找借口吗?</view>
                </view>
              </view>
              <view class="margin-top-sm flex justify-between">
                <view class="text-gray text-df">2018年12月4日</view>
                <view>
                  <text class="cuIcon-appreciatefill text-red"></text>
                  <text class="cuIcon-messagefill text-gray margin-left-sm"></text>
                </view>
              </view>
            </view>
          </view>

          <view class="cu-item">
            <view
              class="cu-avatar round"
              style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
            ></view>
            <view class="content">
              <view class="text-grey">凯尔</view>
              <view class="text-gray text-content text-df">妹妹，如果不是为了飞翔，我们要这翅膀有什么用?</view>
              <view class="bg-grey padding-sm radius margin-top-sm text-sm">
                <view class="flex">
                  <view>莫甘娜：</view>
                  <view class="flex-sub">如果不能立足于大地，要这双脚又有何用?</view>
                </view>
              </view>
              <view class="margin-top-sm flex justify-between">
                <view class="text-gray text-df">2018年12月4日</view>
                <view>
                  <text class="cuIcon-appreciate text-gray"></text>
                  <text class="cuIcon-messagefill text-gray margin-left-sm"></text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <TabBar></TabBar>
  </view>
</template>

<script>
import TabBar from "@/components/TabBar";
import { getUserMoment } from "@/api";
export default {
  components: {
    TabBar
  },
  data() {
    return {
      statusBarHeight: uni.getStorageSync("statusBarHeight"),
      momentList: [] // 动态列表
    };
  },
  onLoad() {
    this.getUserMoment();
  },
  methods: {
    // 获取用户瞬间、动态
    getUserMoment() {
      getUserMoment().then(res => {
        console.log(res, "啦啦啦");
        if (res.ok) {
          res.list.forEach(item => {
            item.images && (item.images = JSON.parse(item.images));
          });
          this.momentList = res.list;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
page {
  box-sizing: border-box;
  padding: 20upx 0 125upx 0;
}
.cu-list.menu-avatar > .cu-item:after,
.cu-list.menu > .cu-item:after {
  border: none;
}
// 头像
.cu-avatar {
  border-radius: 50%;
  overflow: hidden;
}
// 瞬间、动态为单个图片
.cu-card > .cu-item {
  margin-top: 0;
  margin-bottom: 20upx;
  .grid {
    .bg-img {
      // overflow: hidden;
      image {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
