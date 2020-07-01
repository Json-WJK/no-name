<template>
  <!-- 广场 -->
  <div :style="{marginTop: statusBarHeight + 'px'}" class="content">
    <!-- 瞬间 动态 -->
    <div v-for="(item,index) in momentList" :key="index" class="cu-card dynamic">
      <div class="cu-item shadow">
        <div class="cu-list menu-avatar">
          <div class="cu-item">
            <div class="cu-avatar round lg">
              <img style="width: 100%;height: 100%;" :src="$HTTP + item.userInfo.avatar" />
            </div>
            <div class="content flex-sub">
              <div>{{ item.userInfo.uname }}</div>
              <div class="text-gray text-sm flex justify-between">{{ item.creationTime }}</div>
            </div>
          </div>
        </div>
        <div v-if="item.content" class="text-content">{{ item.content }}</div>
        <!-- 单个图片 -->
        <div v-if="item.images.length <= 1" class="grid flex-sub padding-lr col-1">
          <div v-for="(el, i) in item.images" :key="i" class="bg-img only-img">
            <image @click="previewImage(item.images, i)" :src="$HTTP + el" mode="aspectFill" alt />
          </div>
        </div>
        <!-- 多个图片 -->
        <div v-else class="grid flex-sub padding-lr col-1 flex-box">
          <div v-for="(el, i) in item.images" :key="i" class="bg-imgs only-imgs">
            <image
              @click="previewImage(item.images, i)"
              :src="$HTTP + el"
              mode="aspectFill"
              alt
              class="images"
            />
          </div>
        </div>
        <!-- 点赞与评论数 -->
        <div class="text-gray text-sm text-right padding">
          <!-- <span class="cuIcon-attentionfill margin-lr-xs"></span>10 -->
          <!-- <span class="cuIcon-appreciatefill margin-lr-xs"></span>20
          <span class="cuIcon-messagefill margin-lr-xs"></span>30 -->
        </div>
        <!-- 评论 -->
        <div v-if="false" class="cu-list menu-avatar comment solids-top">
          <div class="cu-item">
            <div
              class="cu-avatar round"
              style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"
            ></div>
            <div class="content">
              <div class="text-grey">莫甘娜</div>
              <div class="text-gray text-content text-df">凯尔，你被自己的光芒变的盲目。</div>
              <div class="bg-grey padding-sm radius margin-top-sm text-sm">
                <div class="flex">
                  <div>凯尔：</div>
                  <div class="flex-sub">妹妹，你在帮他们给黑暗找借口吗?</div>
                </div>
              </div>
              <div class="margin-top-sm flex justify-between">
                <div class="text-gray text-df">2018年12月4日</div>
                <div>
                  <span class="cuIcon-appreciatefill text-red"></span>
                  <span class="cuIcon-messagefill text-gray margin-left-sm"></span>
                </div>
              </div>
            </div>
          </div>

          <div class="cu-item">
            <div
              class="cu-avatar round"
              style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
            ></div>
            <div class="content">
              <div class="text-grey">凯尔</div>
              <div class="text-gray text-content text-df">妹妹，如果不是为了飞翔，我们要这翅膀有什么用?</div>
              <div class="bg-grey padding-sm radius margin-top-sm text-sm">
                <div class="flex">
                  <div>莫甘娜：</div>
                  <div class="flex-sub">如果不能立足于大地，要这双脚又有何用?</div>
                </div>
              </div>
              <div class="margin-top-sm flex justify-between">
                <div class="text-gray text-df">2018年12月4日</div>
                <div>
                  <span class="cuIcon-appreciate text-gray"></span>
                  <span class="cuIcon-messagefill text-gray margin-left-sm"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar";
import { getUserMoment } from "@/api";
import { previewImage } from "@/utils";
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
    },
    // 图片预览
    previewImage(urls, index) {
      previewImage(urls, index, true);
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
// 动态为多个图片时的样式
.flex-box {
  display: flex;
  .only-imgs {
    width: 189rpx !important;
    height: 189rpx !important;
    margin: 10rpx 0 0 20rpx;
    .images {
      width: 100%;
      height: 100%;
    }
  }
  .only-imgs:nth-child(3n + 1) {
    margin: 10rpx 0 0 0;
  }
}
</style>
