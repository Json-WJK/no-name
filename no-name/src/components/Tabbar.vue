<template>
  <div class="tabbar">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="fire">广场</van-tabbar-item>
      <van-tabbar-item icon="add">发布</van-tabbar-item>
      <van-tabbar-item icon="friends" info="5">聊天</van-tabbar-item>
      <van-tabbar-item icon="manager">自己</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "home"
    };
  }
};
</script>
<style lang="sass" scoped>
    
</style>