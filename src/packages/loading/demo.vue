
<template>
  <div class="wxc-demo">
      <lc-title title="加载"></lc-title>
      <category title="局部Loading配置"></category>
      <div class="demo1">
        <lc-part-loading :show="partShow"
                          :width="width"
                          :height="height"></lc-part-loading>
      </div>
      <lc-cell title="开启局部Loading">
        <lc-switch slot="desc" :active="true" @change="partShow= !partShow"></lc-switch>         
      </lc-cell>
      <lc-cell title="长度">
        <input class="input"
               slot="desc"
               placeholder="局部Loading长度，默认18"
               v-model="width"/>
      </lc-cell>
      <lc-cell title="高度">
        <input class="input"
               slot="desc"
               placeholder="局部Loading高度，默认18"
               v-model="height"/>
      </lc-cell>
      <div class="blank"></div>

      <category title="页面Loading配置"></category>
      <lc-cell  title="开启Loading">
        <lc-switch slot="desc" :active="true" @change="isShow= !isShow"></lc-switch>         
      </lc-cell>

      <lc-cell  title="自定义Loading">
        <lc-switch slot="desc" :opened="false" @change="type=(type === 'trip'? 'default' : 'trip')"></lc-switch>         
      </lc-cell>

      <lc-cell  title="延迟加载">
          <lc-switch slot="desc" @change="openIntervalLoading"></lc-switch>
      </lc-cell>

      <lc-cell  title="配置文案">
        <input class="input"
               slot="desc"
               placeholder="配置文案，默认无"
               v-model="loadingText"/>
      </lc-cell>

    <lc-loading :show="isShow" :needMask="maskShow" @LcLoadingMaskClicked="LcLoadingMaskClicked"
                 :type="type" :mask-style="maskStyle"
                 :loading-text="loadingText"
                 :interval="interval"></lc-loading>
  </div>
</template>

<script>
  import LcTitle from '../../packages/_mods/title.vue';
  import Category from '../../packages/_mods/category.vue';

  export default {
    components: { LcTitle, Category},
    data () {
      return {
        width: '18',
        height: '18',
        partShow: true,
        isShow: true,
        interval: 0,
        type: 'default',
        loadingText: '',
        maskShow:false,
        maskStyle:{ backgroundColor:'rgba(0, 0, 0, 0.3)'}
      };
    },
    methods: {
      LcLoadingMaskClicked(){
          console.log(1)
      },  
      openLoading () {
        this.isShow = !this.isShow;
        this.interval = 0;
      },
      openTripLoading () {
        const { type } = this;
        this.type = (type === 'trip') ? 'default' : 'trip';
      },
      openIntervalLoading () {
        this.isShow = false;
        setTimeout(() => {
          // 正常使用时候直接设置即可，不需setTimeout
          this.interval = 1000;
          this.isShow = true;
        }, 10)
      },
      openTextLoading () {
        this.interval = 0;
        this.loadingText = this.loadingText ? '' : '正在加载中';
      }
    }
  };
</script>

<style scoped>

  .wxc-demo {
    background-color: #fff;
  }
  .input {
    width: 250px;
    text-align: right;
    font-size: 14px;
  }

  .demo1 {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
    height: 40px;
    justify-content: center;
  }

  .blank {
    height: 40px;
  }
</style>