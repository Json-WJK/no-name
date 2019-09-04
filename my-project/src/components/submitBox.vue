<template>
  <div class="submitBox">
    <div class="submitBox-mask">
      <div class="submitBox-mask-box">
        <div class="title">title</div>
        <div class="input">
          <input type="text" />
        </div>
        <div class="cancel-or-affirm">
          <span>{{ cancel }}</span>
          <span>{{ affirm }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "标题"
    },
    cancel: {
      type: String,
      default: ""
    },
    affirm: {
      type: String,
      default: "确定"
    }
  }
};
</script>
<style lang="scss" scoped>
.submitBox {
  &-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
    &-box {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 75%;
      height: 300px;
      background: #fff;
      border-radius: 5px;
      .title {
        font-size: 30px;
        // color: 
      }
    }
  }
}
</style>