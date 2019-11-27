
<template>
  <div class="wxc-demo">
      <lc-title title="蒙层" class="title"></lc-title>
      <category title="使用案例"></category>
      <div class="button-list">
        <nut-button class="btn-margin" @click="openOverlay">点击打开动画蒙层</nut-button>
        <nut-button class="btn-margin" @click="openNoAniOverlay">点击打开无动画蒙层</nut-button>
      </div>
      
      <nut-overlay :show="show"
                   duration="1900"
                   :hasAnimation="hasAnimation"
                   @LcOverlayBodyClicked="LcOverlayBodyClicked"
                   opacity="0.6"></nut-overlay>
  </div>
</template>

<style scoped>
  .button-list {
    padding-left: 24px;
  }
  .title {
    align-self: flex-start;
  }

  .btn-margin {
    margin-top: 40px;
  }

</style>

<script>
  // import Light from 'light';
  import LcTitle from '../../packages/_mods/title.vue';
  import Category from '../../packages/_mods/category.vue';
  // import LcButton from 'lighting-ui/packages/lc-button';
  // import LcOverlay from 'lighting-ui/packages/lc-overlay';

  export default {
    components: { LcTitle, Category },
    data: () => ({
      show: false,
      hasAnimation: true,
      timingFunction: ['ease-in', 'ease-out']
    }),
    methods: {
      openOverlay () {
        this.hasAnimation = true;
        this.show = true;
      },
      openNoAniOverlay () {
        this.hasAnimation = false;
        this.show = true;
      },
      LcOverlayBodyClicked (e) {
        this.$toast.text('click overlay!', { duration:1000 });
        this.show = false;
      }
    }
  };
</script>
