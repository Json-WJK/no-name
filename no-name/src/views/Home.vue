<template>
  <div class="home">
    <LoginOrRegister></LoginOrRegister>
  </div>
</template>

<script>
import LoginOrRegister from '@/components/LoginOrRegister'
export default {
  components: {
    LoginOrRegister
  }
};
</script>
<style lang="scss" scoped>
  div {
    position: fixed;
    width: 100%;
    height: 100%;
  }
</style>
