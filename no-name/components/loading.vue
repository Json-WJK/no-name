<template>
  <div class="loading">
    <view class="cu-load load-modal" v-if="loadModal">
      <!-- <view class="cuIcon-emojifill text-orange"></view> -->
      <image class="loadingImg" src="/static/img/loading.jpg" mode="aspectFit" />
      <view class="gray-text">加载中...</view>
    </view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loadModal: true
    };
  }
};
</script>
<style lang="less" scoped>
.loading {
  .cu-load,
  .load-modal {
    border-radius: 50%;
  }
  .loadingImg {
    width: 100upx;
    height: 100upx;
  }
}
</style>
