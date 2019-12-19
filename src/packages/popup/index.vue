<template>
  <div>
    <lc-overlay :show="show&&haveOverlay"
                  ref="overlay"
                  v-bind="overlayCfg"
                  @LcOverlayBodyClicked="LcOverlayBodyClicked"></lc-overlay>
    <transition :name="transition">
      <div ref="lc-popup" @scroll.prevent
          v-if="show"
          :height="_height"
          @click="()=>{}"
          :class="['lc-popup', pos]"
          :style="padStyle">
        <slot></slot>
      </div>
    </transition>  
  </div>
</template>

<style scoped>
@import "../../styles/animation/slide-up";
@import "../../styles/animation/slide-right";
@import "../../styles/animation/slide-down";
@import "../../styles/animation/slide-left";
  .lc-popup {
    position: fixed;
    width: 100%;
    overflow:auto;
    z-index: 999;
    background: #fff;
  }

  .top {
    left: 0;
    right: 0;
  }

  .bottom {
    left: 0;
    right: 0;
  }

  .left {
    bottom: 0;
    top: 0;
  }

  .right {
    bottom: 0;
    top: 0;
  }

  /* 当前蒙层显示时生效 */
  .noScroll {
    overflow-y: hidden;
  }
  
</style>

<script>

  export default {
    name:"nut-popup",
    props: {
      overlayCanClose: {
        type: Boolean,
        default: true
      },
      show: {
        type: Boolean,
        default: false
      },
      pos: {
        type: String,
        default: 'bottom'
      },
      popupColor: {
        type: String,
        default: '#FFFFFF'
      },
      overlayCfg: {
        type: Object,
        default: () => ({
          hasAnimation: true,
          timingFunction: ['ease-in', 'ease-out'],
          duration: 300,
          opacity: 0.6
        })
      },
      height: {
        type: [Number, String],
        default: 420
      },
      width: {
        type: [Number, String],
        default: 375
      },
      transition: {
        type: String,
        default() {
          switch (this.pos) {
            case 'bottom':
              return 'nutSlideUp'
            /* istanbul ignore next */
            case 'top':
              return 'nutSlideDown'
            /* istanbul ignore next */
            case 'left':
              return 'nutSlideLeft'
            /* istanbul ignore next */
            case 'right':
              return 'nutSlideRight'
            default:
              return 'nutSlideUp' // fade/fade-bounce/fade-slide/fade-zoom
          }
        },
      },
      
    },
    data: () => ({
      haveOverlay: true,
      // isOverShow: true,
    }),
    watch: {
      show(val) {
            if (val == true) {
              document.getElementsByTagName('body')[0].setAttribute("style","overflow-y: hidden;")
            } else {
              document.getElementsByTagName('body')[0].setAttribute("style","overflow-y: auto;")
            }
            // 下面需要这两行代码，兼容不同浏览器
            document.body.scrollTop = this.pageScrollYoffset;
            window.scroll(0, this.pageScrollYoffset);
      }
    },
    computed: {
      _height () {
        // this.appearPopup(this.show, 150);
        return this.height;
      },
      padStyle () {
        const { pos, width, height, popupColor } = this;
        let style = {
          width: `${width}px`,
          backgroundColor: popupColor
        };
        pos === 'top' && (style = {
          ...style,
          top: `0`,
          height: `${height}px`
        });
        pos === 'bottom' && (style = {
          ...style,
          bottom: `0`,
          height: `${height}px`
        });
        pos === 'left' && (style = {
          ...style,
          left: `0`
        });
        pos === 'right' && (style = {
          ...style,
          right: `0`
        });
        return style;
      }
    },
    methods: {
      hide () {
        // this.appearPopup(false);
        this.$refs.overlay.appearOverlay(false);
      },
      LcOverlayBodyClicked () {
        // this.isShow && this.appearPopup(false);
        this.$emit('LcPopupOverlayClicked', { pos: this.pos });
      },
      // appearPopup (bool) {
      //   this.isShow = bool;
      //   this.$emit('LcPopupOverlayClicked', { pos: this.pos });
      // }
    },
    mounted(){
    }
  }
</script>
