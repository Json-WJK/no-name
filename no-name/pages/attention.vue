<template>
  <div :style="{marginTop: statusBarHeight + 'px'}">
    attention
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