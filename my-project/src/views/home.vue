<template>
  <div class="home">
    <LoginOrRegister v-if="LoginOrRegister" @shut="LoginOrRegisterF"></LoginOrRegister>
    <div class="home-seek">
      <div class="home-seek-input">搜索感兴趣的内容</div>
    </div>
    <div class="home-title">
      <div class="home-title-scroll">
        <span
          v-for="(item,index) in titleItems"
          :key="index"
          @click="ifyTitle(index)"
          :class="titleIndex == index? 'home-title-scroll-select': ''"
        >{{ item }}</span>
      </div>
    </div>
    <div class="home-content">
      <div v-for="(item,index) in contents[titleIndex]" :key="index" @click="LoginOrRegisterF" class="home-content-every">
        <div class="home-content-every-box">
          <div v-if="!item.coverImg" class="home-content-every-article">
            <div class="home-content-every-article-title">{{ item.title }}</div>
            <div class="home-content-every-article-content">{{ item.content }}</div>
          </div>
          <div
            v-if="item.coverImg"
            class="home-content-every-article home-content-every-articleAndImg"
          >
            <div class="home-content-every-article-title">{{ item.title }}</div>
            <div class="home-content-every-article-content">{{ item.content }}</div>
          </div>
          <img v-if="item.coverImg" :src="item.coverImg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginOrRegister from "@/components/LoginOrRegister";
import { Toast } from "mand-mobile";
export default {
  components: {
    LoginOrRegister
  },
  data() {
    return {
      LoginOrRegister: false,
      titleItems: ["推荐", "关注"],
      titleIndex: 0, //当前选中标题下标
      contents: [
        [
          {
            title: "DOM属性总结",
            content:
              "跟PC开发不同，移动端的UI应该具备友好的移动端交互，例如上拉下拉、手指滑屏、按下滑动等等。我们在这些方面做了充分的考虑，每个组件都是针对移动端精心打造，追求原生级别的操作体验。",
            coverImg: ""
          },
          {
            title: "DOM属性总结",
            content:
              "跟PC开发不同，移动端的UI应该具备友好的移动端交互，例如上拉下拉、手指滑屏、按下滑动等等。我们在这些方面做了充分的考虑，每个组件都是针对移动端精心打造，追求原生级别的操作体验。",
            coverImg:
              "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=489343535,3713603063&fm=58"
          },
          {
            title: "DOM属性总结",
            content:
              "跟PC开发不同，移动端的UI应该具备友好的移动端交互，例如上拉下拉、手指滑屏、按下滑动等等。我们在这些方面做了充分的考虑，每个组件都是针对移动端精心打造，追求原生级别的操作体验。",
            coverImg: ""
          },
          {
            title: "DOM属性总结",
            content:
              "跟PC开发不同，移动端的UI应该具备友好的移动端交互，例如上拉下拉、手指滑屏、按下滑动等等。我们在这些方面做了充分的考虑，每个组件都是针对移动端精心打造，追求原生级别的操作体验。",
            coverImg:
              "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=489343535,3713603063&fm=58"
          },
          {
            title: "DOM属性总结",
            content:
              "跟PC开发不同，移动端的UI应该具备友好的移动端交互，例如上拉下拉、手指滑屏、按下滑动等等。我们在这些方面做了充分的考虑，每个组件都是针对移动端精心打造，追求原生级别的操作体验。",
            coverImg: ""
          },
          {
            title: "DOM属性总结",
            content:
              "跟PC开发不同，移动端的UI应该具备友好的移动端交互，例如上拉下拉、手指滑屏、按下滑动等等。我们在这些方面做了充分的考虑，每个组件都是针对移动端精心打造，追求原生级别的操作体验。",
            coverImg:
              "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=489343535,3713603063&fm=58"
          },
          {
            title: "DOM属性总结",
            content:
              "跟PC开发不同，移动端的UI应该具备友好的移动端交互，例如上拉下拉、手指滑屏、按下滑动等等。我们在这些方面做了充分的考虑，每个组件都是针对移动端精心打造，追求原生级别的操作体验。",
            coverImg:
              "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=489343535,3713603063&fm=58"
          },
          {
            title: "DOM属性总结",
            content:
              "跟PC开发不同，移动端的UI应该具备友好的移动端交互，例如上拉下拉、手指滑屏、按下滑动等等。我们在这些方面做了充分的考虑，每个组件都是针对移动端精心打造，追求原生级别的操作体验。",
            coverImg: ""
          },
          {
            title: "DOM属性总结",
            content:
              "跟PC开发不同，移动端的UI应该具备友好的移动端交互，例如上拉下拉、手指滑屏、按下滑动等等。我们在这些方面做了充分的考虑，每个组件都是针对移动端精心打造，追求原生级别的操作体验。",
            coverImg: ""
          }
        ],
        []
      ]
    };
  },
  mounted() {},
  methods: {
    LoginOrRegisterF() {
      this.LoginOrRegister = !this.LoginOrRegister
    },
    ifyTitle(index) {
      // 标题切换
      this.titleIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  @import "@/assets/scss/mixin.scss";
  text-align: left;
  padding-top: 150px;
  &-seek {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    &-input {
      width: 95%;
      margin: 10px auto 0;
      text-align: center;
      background: #eee;
      height: 60px;
      line-height: 60px;
      border-radius: 25px;
      color: $auxiliaryColor;
    }
  }
  &-title {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background: #fff;
    border-bottom: 1px #eee solid;
    &-scroll {
      width: 95%;
      margin: 0 auto;
      span {
        display: inline-block;
        box-sizing: border-box;
        padding: 0 20px;
        height: 80px;
        line-height: 80px;
      }
      &-select {
        border-bottom: 3px $subjectColor solid;
      }
    }
  }
  &-content {
    width: 100%;
    background: #eee;
    &-every {
      width: 100%;
      margin: 0 auto 15px;
      background: #fff;
      box-sizing: border-box;
      padding: 20px 0;
      &-box {
        width: 95%;
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: space-between;
      }
      &-article {
        width: 100%;
        &-title {
          color: $titleColor;
          font-weight: 800;
          margin-bottom: 5px;
          font-size: 26px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: break-word;
          white-space: normal !important;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        &-content {
          color: $contentColor;
          font-size: 12px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: break-word;
          white-space: normal !important;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
      &-articleAndImg {
        width: 75%;
      }
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>
