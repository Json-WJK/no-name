<template>
  <div class="center">
    我的
    <LoginOrRegister v-if="LoginOrRegister"></LoginOrRegister>
    <tabbar></tabbar>
  </div>
</template>
<script>
import LoginOrRegister from "@/components/LoginOrRegister";
import tabbar from "@/components/tabbar";
import { Toast } from "mand-mobile";
export default {
  components: {
    LoginOrRegister,
    tabbar
  },
  data() {
    return {
      LoginOrRegister: false
    }
  }
}
</script>
<style lang="scss" scope>
  
</style>