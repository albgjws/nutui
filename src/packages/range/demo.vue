<template>
  <div class="range-demo demo-list">
    <lc-noticebar
      :closeMode="true"
      v-if="!isMobile"
    >此 Demo 在 PC 端浏览器与移动端浏览器体验差异较大，建议在 Android 或 iOS 设备上体验。</lc-noticebar>
    <h4>基本用法</h4>
    <div>
      <lc-cell>
        <span slot="title">
          <lc-range :rangeValues.sync="val1" :range="[-93,322]" :showLabel="true"></lc-range>
        </span>
      </lc-cell>
      <lc-cell>
        <span slot="title">{{val1[0]}},{{val1[1]}}</span>
      </lc-cell>
    </div>

    <h4>显示标签文字</h4>
    <div>
      <lc-cell class="my-range">
        <span slot="title">
          <lc-range
            :rangeValues.sync="val3"
            :range="[-10,10]"
            :showLabelAlways="true"
            :showLabel="true"
            :showRangeTxt="true"
          ></lc-range>
        </span>
      </lc-cell>
      <lc-cell>
        <span slot="title">{{val3[0]}},{{val3[1]}}</span>
      </lc-cell>
    </div>

    <h4>修改主题风格</h4>
    <div>
      <lc-cell>
        <span slot="title">
          <lc-range color="#31ccec" :rangeValues.sync="val2" :range="[0,200]" :showLabel="true"></lc-range>
        </span>
      </lc-cell>
      <lc-cell>
        <span slot="title">{{val2[0]}},{{val2[1]}}</span>
      </lc-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val1: [-52, 120],
      val2: [0, 120],
      val3: [0, 5]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.range-demo {
  .nut-cell:first-child {
    .nut-cell-title {
      padding: 0 30px;
    }
    &.my-range {
      .nut-cell-title {
        padding: 0;
      }
    }
  }
}
</style>


