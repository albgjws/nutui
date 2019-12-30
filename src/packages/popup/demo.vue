
<template>
  <div class="wxc-demo">
      <lc-title title="弹出层" class="title"></lc-title>
      <category title="使用案例"></category>
      <div class="button-list">
        <lc-button class="btn-margin" @click="isLeftShow=true">点击弹出左侧面板</lc-button>
        <lc-button class="btn-margin" @click="isRightShow=true">点击弹出右侧面板</lc-button>
        <lc-button class="btn-margin" @click="isBottomShow=true">点击弹出底部面板</lc-button>
        <lc-button class="btn-margin" @click="isTopShow=true">点击弹出顶部面板</lc-button>
      </div>
      
      <lc-popup width="200"
                 :show="isLeftShow"
                 @LcPopupOverlayClicked="hide"
                 pos="left">
      </lc-popup>

      <lc-popup width="300"
                 :show="isRightShow"
                 @LcPopupOverlayClicked="hide"
                 pos="right">
            <lc-button class="btn-margin" @click="isRightShow=false">点击隐藏</lc-button>
      </lc-popup>

      <lc-popup height="300"
                 :show="isBottomShow"
                 @LcPopupOverlayClicked="hide"
                 pos="bottom">
      </lc-popup>

      <lc-popup height="300"
                 :show="isTopShow"
                 @LcPopupOverlayClicked="hide"
                 pos="top">
      </lc-popup>
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
      isLeftShow: false,
      isRightShow: false,
      isBottomShow: false,
      isTopShow: false,
    }),
    methods: {
      hide(){
        this.isLeftShow=false;
        this.isRightShow=false;
        this.isBottomShow=false;
        this.isTopShow=false;
      }
    }
  };
</script>
