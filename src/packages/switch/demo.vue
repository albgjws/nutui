<template>
    <div class="demo-list">
        <h4>基本用法</h4>
        <div>
            <lc-cell>
                <span slot="title"><lc-switch :active.sync="swActive"></lc-switch></span>
                <div slot="desc">{{swActive}}</div>
            </lc-cell>
        </div>

        <h4>自定义尺寸</h4>
        <div>
            <lc-cell>
                <span slot="title"><lc-switch :active="true" size="small"></lc-switch></span>
                <div slot="desc">small</div>
            </lc-cell>
            <lc-cell>
                <span slot="title"><lc-switch :active="true" size="base"></lc-switch></span>
                <div slot="desc">base</div>
            </lc-cell>
            <lc-cell>
                <span slot="title"><lc-switch :active="true" size="large"></lc-switch></span>
                <div slot="desc">large</div>
            </lc-cell>
        </div>
        <p>内置"small","base","large"三种规格</p>

        <h4>change事件</h4>
        <div>
            <lc-cell>
                <span slot="title"><lc-switch @change="onChange"></lc-switch></span>
            </lc-cell>
        </div>

        <h4>禁用状态</h4>
        <div>
            <lc-cell>
                <span slot="title"><lc-switch :disabled="true"></lc-switch></span>
            </lc-cell>
            <lc-cell>
                <span slot="title"><lc-switch @change="onChange" :active="true" :disabled="true"></lc-switch></span>
            </lc-cell>
        </div>
        <p>禁用状态下，change事件参数永远为初始值</p>

        <h4>自定义Class</h4>
        <div>
            <lc-cell>
                <span slot="title"><lc-switch :active="true"  class="my-switch" ></lc-switch></span>
            </lc-cell>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      swActive: true
    };
  },
  methods: {
    onChange(status) {
      alert(status);
    }
  }
};
</script>

<style lang="scss">
.my-switch.lc-switch {
  border-radius: 3px;
  border-color: #ccc;
  background-color:#ccc;
  .lc-switch-btn {
    border: 2px solid #fff;
    box-shadow: none;
    background-color: #fff;
    border-radius: 3px;
  }
  &.lc-switch-active {
    border-color: #0092e6;
    background-color:#0092e6;
    .lc-switch-btn {
      background-color: #fff;
    }
  }
}
</style>