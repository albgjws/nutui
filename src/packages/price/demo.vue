<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <p>无人民币符号，有千位分隔</p>
    <div>
      <lc-cell>
        <span slot="title">
          <lc-price :price="1010" :needSymbol="false" :thousands="true"/>
        </span>
      </lc-cell>
    </div>
    <p>带人民币符号，无千位分隔</p>
    <div>
      <lc-cell>
        <span slot="title">
          <lc-price :price="10010.01" :needSymbol="true" :thousands="false"/>
        </span>
      </lc-cell>
    </div>
    <p>带人民币符号，有千位分隔，保留小数点后三位</p>
    <div>
      <lc-cell>
        <span slot="title">
          <lc-price :price="15213.1221" :decimalDigits="3" :needSymbol="true" :thousands="true"/>
        </span>
      </lc-cell>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.demo-con {
  padding-left: 20px;
  margin-bottom: 40px;
}
</style>
