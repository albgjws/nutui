<template>
    <div>
      <h4>常规按钮组</h4>
      <lc-buttongroup>
        <lc-button type="light">重置</lc-button>
        <lc-button>确定</lc-button>
      </lc-buttongroup>
    <h4>圆角按钮组</h4>
    <lc-buttongroup shape="circle">
      <lc-button type="light">重置</lc-button>
      <lc-button>确定</lc-button>
    </lc-buttongroup>
    <h4>页面底部功能，配合Badge使用</h4>
      <lc-buttongroup type="menu">
        <lc-button type="light" icon="action" color="#000">关于</lc-button>
        <lc-button type="light" icon="more" color="#000">更多</lc-button>
        <lc-button type="light" icon="search" color="#000">关闭</lc-button>
        <lc-badge value="2" top="0.5rem" right="2rem"><lc-button type="light" icon="trolley" color="#f00">购物车</lc-button></lc-badge>      
        <lc-button type="light" icon="tick" color="#000">成功</lc-button>
      </lc-buttongroup>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>

</style>
