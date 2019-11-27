
<template>
  <div>
    <transition :name="hasAnimation?'fade':''">
        <div class="lc-overlay" @touchmove.prevent.stop
            v-if="show"
            @touchend.prevent="overlayClicked"
            :style="overlayStyle">
        </div>
    </transition>    
  </div>
</template>

<style scoped>
  .lc-overlay {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
</style>

<script>
  export default {
    name:'nut-overlay',
    props: {
      show: {
        type: Boolean,
        default: true
      },
      hasAnimation: {
        type: Boolean,
        default: true
      },
      opacity: {
        type: [Number, String],
        default: 0.6
      },
      canAutoClose: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      overlayStyle () {
        return {
          // opacity: this.hasAnimation ? 0 : 1,
          backgroundColor: `rgba(0, 0, 0,${this.opacity})`
        }
      }
    },
    methods: {
      overlayClicked (e) {
        //115425 lc-mask组件设置can-auto-close无效
        if(this.canAutoClose==false){
            return
        }
        this.$emit('LcOverlayBodyClicked', {})
        
        // this.canAutoClose ? this.appearOverlay(true) : this.$emit('LcOverlayBodyClicked', {});
      },
      appearOverlay (bool) {
        const { hasAnimation, timingFunction, canAutoClose } = this;
        const needEmit = !bool && canAutoClose;
        // needEmit && (this.$emit('LcOverlayBodyClicking', {}));
        needEmit && (this.$emit('LcOverlayBodyClicked', {}));
      }
    }
  };
</script>
