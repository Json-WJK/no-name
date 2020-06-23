<template>
  <view class="TabBar">
    <view class="cu-bar tabbar bg-white">
      <view
        @click="skip('/pages/plaza')"
        :class="highlight == '/pages/plaza'? 'action text-green': 'action text-gray'"
      >
        <view class="cuIcon-activity"></view>广场
      </view>
      <view
        @click="skip('/pages/attention')"
        :class="highlight == '/pages/attention'? 'action text-green': 'action text-gray'"
      >
        <view class="cuIcon-favor"></view>关注
      </view>
      <view @click="skip('/pages/release')" class="action text-gray add-action">
        <button class="cu-btn cuIcon-add bg-green shadow"></button>
        发布
      </view>
      <view
        @click="skip('/pages/chat')"
        :class="highlight == '/pages/chat'? 'action text-green': 'action text-gray'"
      >
        <view class="cuIcon-message">
          <view class="cu-tag badge">99</view>
        </view>聊天
      </view>
      <view
        @click="skip('/pages/my')"
        :class="highlight == '/pages/my'? 'action text-green': 'action text-gray'"
      >
        <view class="cuIcon-my">
          <view class="cu-tag badge"></view>
        </view>我的
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      InputBottom: 0
    };
  },
  computed: {
    highlight() {
      return this.$store.state.highlight;
    }
  },
  methods: {
    skip(path) {
      if (path != "/pages/release") {
        uni.reLaunch({ url: path });
      } else {
        uni.navigateTo({ url: path });
      }
    }
  }
};
</script>

<style lang="less">
.TabBar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
