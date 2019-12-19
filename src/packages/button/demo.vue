<template>
    <div>
      <h4>常规按钮</h4>
      <div class="bg">
        <lc-button @click="clickHandler">去结算</lc-button>
        <lc-button disabled>去结算（disabled）</lc-button>
        <div class="gap"></div>
        <lc-button small>去结算</lc-button>
        <lc-button small disabled>去结算（disabled）</lc-button>
      </div>

      <h4>常规按钮组</h4>
      <lc-buttongroup>
        <lc-button type="light">重置</lc-button>
        <lc-button>确定</lc-button>
      </lc-buttongroup>

      <h4>通栏按钮</h4>
      <div>
        <lc-button block>登录</lc-button>
        <div class="gap"></div>
        <lc-button block shape="circle">登录</lc-button>
      </div>

      <h4>圆角按钮-常规Button</h4>
      <div class="white-bg">
        <lc-button type="red" shape="circle" small>确认收货</lc-button>
        <lc-button type="gray" shape="circle" small>查看物流</lc-button>
        <lc-button type="default" shape="circle" small>再次购买</lc-button>
        <lc-button type="light" shape="circle" small>降价通知</lc-button>
      </div>

      <h4>圆角按钮-标签Button</h4>
      <div class="white-bg">
        <lc-button type="primary" shape="circle" small>京东快递</lc-button>
        <lc-button type="lightred" shape="circle" small>好评 6.6万</lc-button>
        <lc-button type="actived" shape="circle" icon="tick" small>全部 100万</lc-button>
      </div>

      <h4>图标按钮-小</h4>
      <div class="white-bg">
        <lc-button type="actived" shape="circle" icon="tick" small></lc-button>
      </div>

      <h4>图标按钮-大</h4>
      <div class="white-bg">
        <lc-button type="actived" shape="circle" icon="tick"></lc-button>
      </div>

      <h4>圆角按钮-商品属性选择Button</h4>
      <div class="white-bg">
        <lc-button type="actived" shape="circle" small>象牙白</lc-button>
        <lc-button type="light" shape="circle" small>皓月灰</lc-button>
        <lc-button type="dashed" shape="circle" small>晶钻蓝</lc-button>
      </div> 

      <h4>自定义颜色</h4>
      <div class="white-bg">
        <lc-button type="actived" shape="circle" small color="#fff">象牙白</lc-button>
        <lc-button type="primary" shape="circle" small color="rgb(0,0,0)">象牙白</lc-button>
        <lc-button type="actived" shape="circle" icon="tick" color="rgb(0,0,0)" small></lc-button>
        <lc-button type="actived" shape="circle" icon="tick" color="rgb(0,0,0)" small>全部 100万</lc-button>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
      clickHandler() {
        alert('我点击了按钮');
      }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  margin: 0 10px;
}
.gap {
  height: 10px;
}
.white-bg {
  padding: 10px;
  background: #fff;
}
</style>
