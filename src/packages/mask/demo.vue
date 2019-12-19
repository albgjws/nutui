
<template>
  <div class="wxc-demo">
      <lc-title title="遮罩弹层" class="title"></lc-title>
      <category title="使用案例"></category>
      <div class="button-list">
        <lc-button class="btn-margin" @click="openMask">点击弹出动画面板</lc-button>
        <lc-button class="btn-margin" @click="openNoAnimationMask">点击弹出无动画面板</lc-button>
      </div>
      
      <lc-mask height="300"
                width="300"
                border-radius="10"
                opacity="0.6"
                mask-bg-color="#FFFFFF"
                :has-overlay="true"
                :show-close="true"
                :show="show"
                :overlay-can-close="canClose"
                :has-animation="hasAnimation"
                @LcMaskSetHidden="LcMaskSetHidden">
        <div class="content">
          <div class="demo-title">
            <p class="title">LightingUI帮你构建原生应用</p>
          </div>
          <p class="content-text"> 与 Web App、HTML5 App 或 hybrid App 不同，您可以使用 LightingUI 构建一个真正的原生应用。更贴心的是你的代码只需使用
            HTML、CSS、JavaScript 可以构建原生应用，上手非常简单。但实际上，应用的底层是 Objective-C 或 Java， 同时，LightingUI 提供很多 native
            组件或模块供开发人员使用。 </p>
        </div>
      </lc-mask>
  </div>
</template>

<style scoped>
 .button-list {
    padding-left: 12px;
  }
  .btn-margin {
    margin-top: 20px;
  }
  .btn {
    width: 300px;
    height: 40px;
    margin-top: 150px;
    flex-direction: row;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-radius: 3px;
    background-color: rgb(92, 184, 92);
    border-color: rgb(76, 174, 76);
  }

  .yellow {
    background-color: #FDC22D;
    border-color: #FDC22D;
  }

  .btn-txt {
    font-size: 16px;
    color: #ffffff;
  }

  .btn-margin {
    margin-top: 20px;
  }

  .content {
    padding: 15px;
  }

  .demo-title {
    align-items: center;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  .title {
    color: #333333;
    font-size: 18px;
  }

  .wxc-title {
    align-self: flex-start;
  }

  .content-text {
    color: #333333;
    font-size: 15px;
    margin-top: 10px;
  }


</style>

<script>
  import LcTitle from '../../packages/_mods/title.vue';
  import Category from '../../packages/_mods/category.vue';

  export default {
    components: { LcTitle, Category },
    data: () => ({
      show: false,
      hasAnimation: true,
      canClose: true
    }),
    methods: {
      openMask (e) {
        this.show = true;
        this.hasAnimation = true;
        this.canClose = false;
      },
      LcMaskSetHidden () {
        this.show = false;
      },
      openNoAnimationMask (e) {
        this.show = true;
        this.hasAnimation = false;
        this.canClose = true;
      }
    }
  };
</script>
