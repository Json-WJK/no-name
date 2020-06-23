<template>
  <!-- 发布 -->
  <div class="release">
    <!-- 文字内容 -->
    <div class="text">
      <textarea v-model="form.content" placeholder="这一刻的想法..."></textarea>
    </div>
    <!-- 图片内容 -->
    <div class="imgs">
      <div class="block">
        <div v-for="(url, index) in form.images" :key="index" class="every img">
          <image :src="$HTTP + url" mode="aspectFill" alt />
          <i @click="cancelImg(index)" class="iconfont">&#xe7a4;</i>
        </div>
        <div @click="chooseImage" class="every upload">
          <i class="iconfont">&#xe6a8;</i>
        </div>
      </div>
    </div>
    <!-- 发布操作栏 -->
    <div class="actionBar">
      <button
        :disabled="!form.content && !form.images.length"
        @click="release"
        class="cu-btn round bg-green shadow"
      >
        <span class="cuIcon-upload"></span>发布
      </button>
    </div>
  </div>
</template>

<script>
import { releaseMoment } from "@/api";
export default {
  components: {},
  data() {
    return {
      form: {
        content: "",
        images: []
      }
    };
  },
  computed: {
    uid() {
      return this.$store.state.uid;
    }
  },
  mounted() {},
  methods: {
    // 发布
    release() {
      let data = {
        ...this.form,
        uid: this.uid
      };
      console.log("走了");
      releaseMoment(data).then(res => {
        console.log(res, "发布瞬间返回结果");
        uni.showToast({
          title: res.msg, //提示的内容,
          icon: "none", //图标,
          duration: 1500, //延迟时间,
          mask: true //显示透明蒙层，防止触摸穿透
        });
        if (res.ok) {
          setTimeout(() => {
            uni.redirectTo({ url: "/pages/plaza" });
          }, 1500);
        }
      });
    },
    // 删除某一个已选择图片
    cancelImg(index) {
      this.form.images.splice(index, 1);
    },
    // 上传图片
    chooseImage() {
      uni.chooseImage({
        success: chooseImageRes => {
          const tempFilePaths = chooseImageRes.tempFilePaths;
          uni.uploadFile({
            url: this.$HTTP + "/user/uploadFile",
            filePath: tempFilePaths[0],
            name: "file",
            success: uploadFileRes => {
              console.log(uploadFileRes);
              if (uploadFileRes.statusCode == 200) {
                let imgPath = JSON.parse(uploadFileRes.data).filePath;
                this.form.images.push(imgPath);
              }
            }
          });
        }
      });
    }
  }
};
</script>
<style lang='less'>
page {
  background: #fff;
}
.release {
  .text {
    box-sizing: border-box;
    padding: 20upx;
    textarea {
      width: 100%;
    }
  }
  .imgs {
    box-sizing: border-box;
    padding: 20upx;
    .block {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .every {
        margin: 20upx 0 0 30upx;
        width: 200upx;
        height: 200upx;
        display: flex;
        justify-content: center;
        align-items: center;
        image {
          width: 100%;
          height: 100%;
        }
      }
      .upload {
        i {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2upx solid #999;
          font-size: 100upx;
        }
      }
      .img {
        position: relative;
        i {
          position: absolute;
          top: -25upx;
          right: -25upx;
          font-size: 50upx;
          color: red;
        }
      }
    }
  }
  .actionBar {
    text-align: center;
    margin: 40upx 0 20upx 0;
    button {
      width: 300upx;
    }
  }
}
</style>