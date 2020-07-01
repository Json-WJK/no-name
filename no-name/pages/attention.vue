<template>
  <!-- 关注 -->
  <div :style="{marginTop: statusBarHeight + 'px'}">
    敬请期待
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