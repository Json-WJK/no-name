<template>
  <view :style="{marginTop: statusBarHeight + 'px'}" class="content">
    plaza
    <TabBar></TabBar>
  </view>
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
  },
  onLoad() {},
  methods: {}
};
</script>

<style lang="less" scoped>
</style>
