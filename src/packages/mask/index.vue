
<template>
  <div class="container">
    <lc-overlay :show="show && hasOverlay"
                :hasAnimation="hasAnimation"
                :opacity="opacity"
                v-bind="mergeOverlayCfg"
                :can-auto-close="overlayCanClose" 
                @LcOverlayBodyClicking="LcOverlayBodyClicking"
                @LcOverlayBodyClicked="LcOverlayBodyClicked"></lc-overlay>
    <transition :name="hasAnimation?'fade':''">
        <div class="lc-mask"
            v-if="show"
            :style="maskStyle">
          <div :style="contentStyle">
            <slot></slot>
          </div>
          <div class="mask-bottom"
              :style="{ width: width + 'px' }"
              @click="closeIconClicked"
              v-if="showClose">
            <img :src="closeIcon"
                  aria-label="关闭"
                  class="mask-close-icon" />
          </div>
        </div>
    </transition>   
  </div>
</template>

<style scoped>
  .container {
    position: fixed;
    width: 100%;
    /*兼容H5异常*/
    z-index: 99999;
  }

  .lc-mask {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    height: 400px;
    z-index: 999;
  }

  .mask-bottom {
    display: flex;
    width: 50px;
    height: 50px;
    background-color: transparent;
    justify-content: center;
    align-items: center;
  }

  .mask-close-icon {
    width: 32px;
    height: 32px;
  }
</style>

<script>

  export default {
    name:"nut-mask",
    props: {
      opacity:{
        type: [Number, String],
        default: 0.6
      },
      height: {
        type: [String, Number],
        default: 400
      },
      width: {
        type: [String, Number],
        default: 300
      },
      top: {
        type: [String, Number],
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      },
      showClose: {
        type: Boolean,
        default: false
      },
      // duration: {
      //   type: [String, Number],
      //   default: 300
      // },
      hasOverlay: {
        type: Boolean,
        default: true
      },
      hasAnimation: {
        type: Boolean,
        default: true
      },
      timingFunction: {
        type: Array,
        default: () => (['ease-in', 'ease-out'])
      },
      overlayCfg: {
        type: Object,
        default: () => ({
          hasAnimation: true,
          // timingFunction: ['ease-in', 'ease-out'],
          canAutoClose: true,
          duration: 300,
          // opacity: 0.6
        })
      },
      borderRadius: {
        type: [String, Number],
        default: 0
      },
      // 115425 lc-mask组件设置can-auto-close无效
      overlayCanClose: {
        type: Boolean,
        default: true
      },
      maskBgColor: {
        type: String,
        default: '#ffffff'
      }
    },
    data: () => ({
      closeIcon: 'https://gw.alicdn.com/tfs/TB1qDJUpwMPMeJjy1XdXXasrXXa-64-64.png',
      // maskTop: 132,
      // opacity: 0
    }),
    computed: {
      mergeOverlayCfg () {
        return {
          ...this.overlayCfg,
          hasAnimation: this.hasAnimation
        }
      },
      maskStyle () {
        const { width, height, showClose, hasAnimation, opacity, top } = this;
        // 去除lighting-ui组件内在小程序运行环境中所有引入的weex环境变量
        // const { deviceHeight, deviceWidth, platform } = lg.config.env;
        // const pHeight = Utils.env.getPageHeight();
        // const navHeight = isWeb ? 0 : 130;
        // const newHeight = showClose ? height - 0 + 100 : height;
        // const _deviceHeight = deviceHeight || 1334;
        // const pageHeight = _deviceHeight / deviceWidth * 750 - navHeight; 
        //107991 lc-mask组件，当设置top为0时弹框置顶，不设置top时默认居中
        // var newTop = !/^[0-9]+$/.test(Math.abs(top))||top.trim()=='' ? (pHeight - height) / 2 : top;
        // const isWeb = typeof (window) === 'object' && platform.toLowerCase() === 'web';
        return {
          width: width + 'px',
          height: height + 'px',
          top: top + 'px',
        }
      },
      contentStyle () {
        return {
          width: this.width + 'px',
          backgroundColor: this.maskBgColor,
          height: this.height + 'px',
          borderRadius: this.borderRadius + 'px'
        }
      }
    },
    methods: {
      closeIconClicked () {
        this.appearMask(false);
      },
      LcOverlayBodyClicking () {
        if (this.hasAnimation) {
          this.appearMask(false);
          this.$emit('LcOverlayBodyClicking', {});
        }
      },
      LcOverlayBodyClicked () {
        if(this.overlayCanClose==false){
            return
        }
        this.appearMask(false);
        this.$emit('LcOverlayBodyClicked', {});
      },
      needEmit (bool = false) {
        !bool && (this.$emit('LcMaskSetHidden', {}));
      },
      appearMask (bool) {
        const { hasAnimation, timingFunction } = this;
        this.needEmit(bool);
      }
    }
  };
</script>
