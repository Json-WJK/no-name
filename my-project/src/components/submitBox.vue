<template>
  <div class="submitBox">
    <div class="submitBox-mask">
      <div class="submitBox-mask-box">
        <div class="title">{{ title }}</div>
        <div class="input">
          <input type="text" :maxlength="maxLength"/>
        </div>
        <div class="cancel-or-affirm">
          <span @click="cancelF">{{ cancel }}</span>
          <span @click="affirmF">{{ affirm }}</span>
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
    },
    maxLength: {
      type: String || Number,
      default: 30
    }
  },
  methods: {
    cancelF() { // 取消

    },
    affirmF() { // 确定

    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
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
      box-sizing: border-box;
      padding: 25px;
      width: 75%;
      height: 300px;
      background: #fff;
      border-radius: 5px;
      .title {
        font-size: 30px;
        color: $titleColor;
        font-weight: 600;
      }
      .input {
        margin-top: 30px;
        height: 60px;
        border-bottom: 4px $subjectColor solid;
        input {
          height: 100%;
        }
      }
      .cancel-or-affirm {
        width: 100%;
        box-sizing: border-box;
        padding: 0 5px;
        margin-top: 70px;
        display: flex;
        justify-content: flex-end;
        color: $subjectColor;
        span {
          margin-left: 50px;
        }
      }
    }
  }
}
</style>