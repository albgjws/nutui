<template>
  <div class="slider-demo demo-list">
    <lc-noticebar
      :closeMode="true"
      v-if="!isMobile"
    >此 Demo 在 PC 端浏览器与移动端浏览器体验差异较大，建议在 Android 或 iOS 设备上体验。</lc-noticebar>
    <h4>基本用法</h4>
    <div>
      <lc-cell>
        <span slot="title">
          <lc-slider v-model="val1" :range="[0,10]"></lc-slider>
        </span>
      </lc-cell>
      <lc-cell>
        <span slot="title">Value： {{val1}}</span>
      </lc-cell>
    </div>
    <h4>拖动时展示标签</h4>
    <div>
      <lc-cell>
        <span slot="title">
          <lc-slider v-model="val2" :range="[0,100]" :showLabel="true"></lc-slider>
        </span>
      </lc-cell>
      <lc-cell>
        <span slot="title">Value： {{val2}}</span>
      </lc-cell>
    </div>
    <h4>一直展示标签</h4>
    <div>
      <lc-cell>
        <span slot="title">
          <lc-slider v-model="val3" :range="[0,100]" :showLabel="true" :showLabelAlways="true"></lc-slider>
        </span>
      </lc-cell>
      <lc-cell>
        <span slot="title">Value： {{val3}}</span>
      </lc-cell>
    </div>
    <h4>两端显式可选取范围</h4>
    <div>
      <lc-cell>
        <span slot="title">
          <lc-slider v-model="val4" :range="[-50,50]" :showLabel="true" :showRangeTxt="true"></lc-slider>
        </span>
      </lc-cell>
      <lc-cell>
        <span slot="title">Value： {{val4}}</span>
      </lc-cell>
    </div>
    <h4>设置分段数（stage=20）</h4>
    <div>
      <lc-cell>
        <span slot="title">
          <lc-slider
            v-model="val5"
            :range="[0,100]"
            :showLabel="true"
            :showRangeTxt="true"
            :stage="5"
          ></lc-slider>
        </span>
      </lc-cell>
      <lc-cell>
        <span slot="title">Value： {{val5}}</span>
      </lc-cell>
    </div>
    <h4>自定义Class</h4>
    <div>
      <lc-cell>
        <span slot="title">
          <lc-slider class="my-slider" v-model="val6" :range="[0,100]"></lc-slider>
        </span>
      </lc-cell>
      <lc-cell>
        <span slot="title">Value： {{val6}}</span>
      </lc-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val1: 0,
      val2: 10,
      val3: 50,
      val4: 0,
      val5: 0,
      val6: 0
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.slider-demo {
  .nut-cell:first-child {
    .nut-cell-title {
      padding: 0 30px;
    }
  }
}
.nut-slider.my-slider {
  .nut-slider-box {
    height: 6px;
    border-radius: 3px;
    background-color: #b6b6b6;
  }
  .nut-slider-Handle {
    border-width: 0;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    transition: none;
    &.nut-slider-ani {
      border-width: 0;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
