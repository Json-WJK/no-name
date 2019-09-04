<template>
  <div id="app">
    <router-view v-if="refresh" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      refresh: true
    };
  },
  computed: {
    APPRefresh() {
      return this.$store.state.APPRefresh;
    }
  },
  watch: {
    APPRefresh(news, olds) {
      news && this.refreshF();
    }
  },
  methods: {
    refreshF() {
      // 刷新
      this.refresh = false;
      setTimeout(() => {
        this.refresh = true;
        this.$store.commit("setAPPRefresh", false);
      }, 500);
    }
  }
};
</script>

<style lang="scss">
@import "./assets/css/reset.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
