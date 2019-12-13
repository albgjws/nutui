<template>
  <div class="wrapper">
    <!-- <div class="g-cover"
         ref="lc-cover"
         v-if="show"
         @click="hideAction"
         :style="coverStyle"></div> -->
      <nut-overlay :show="showIn"
                  @LcOverlayBodyClicked="hideAction()"
                  :hasAnimation="hasAnimation"></nut-overlay>   
      <transition :name="hasAnimation? transition:''">
          <div ref="lc-popover"
              class="g-popover"
              v-if="showIn && buttons"
              :style="contentStyle">
            <div class="u-popover-arrow" :style="arrowStyle"></div>
            <div class="u-popover-inner">
              <div :class="['i-btn',i === buttons.length-1 ? 'i-btn-noborder' : '']"
                  v-for="(item,i) in buttons"
                  :key="i"
                  @click="lcButtonClicked(i,item.key)">
                <img :src="item.icon"
                      v-if="item.icon"
                      class="btn-icon"/>
                <span class="btn-text" :style="textStyle">{{item.text}}</span>
              </div>
            </div>
          </div>
      </transition>
    
  </div>
</template>

<script>
export default {
  name:"nut-popover",
  props: {
    buttons: {
      type: Array,
      default: () => ([])
    },
    position: {
      type: Object,
      default: () => ({
        x: 0,
        y: 0
      })
    },
    arrowPosition: {
      type: Object,
      default:  () => ({
        pos: 'top',
        x: 0,
        y: 0
      })
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
    coverColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    textStyle: Object,
    transition: {
      type: String,
      default() {
        switch (this.arrowPosition.pos) {
          case 'bottom':
            return 'nutSlideUp'
          case 'top':
            return 'nutSlideDown'
          case 'left':
            return 'nutSlideLeft'
          case 'right':
            return 'nutSlideRight'
          default:
            return 'nutSlideUp'
        }
      }
    }
  },
  data: () => ({
    show: false,
    showIn: false
  }),
  computed: {
    // coverStyle() {
    //   return this.coverColor ? { backgroundColor: this.coverColor, opacity:!this.showIn?'0':'1'} : '';
    // },
    transformOrigin() {
      let {x=0, y=0, pos='top'} = this.arrowPosition,
          _origins = [];
      switch(pos){
        case 'top':
        case 'bottom':
        _origins = [x<0?'right':'left',pos];
          break;
        case 'left':
        case 'right':
        _origins = [pos,y<0?'bottom':'top'];
          break;
      }
      return _origins.join(' ');
    },
    contentTransform() {
      let {x=0, y=0, pos='top'} = this.arrowPosition,
          _translates=['scale(0)'];
          if(x>=0 && x<22){
            x = 22;
          }else if(x<0 && x>-22){
            x =-22;
          }
          if(y>=0 && y<22){
            y = 22;
          }else if(y<0 && y>-22){
            y =-22;
          }
      switch(pos){
        case 'top':
        case 'bottom':
          _translates[1] = `translateX(${x<0?(x-15):(x+15)}px)`;
          break;
        case 'left':
        case 'right':
          _translates[1] = `translateY(${y<0?(y-15):(y+15)}px)`
          break;
      }
      return _translates.join(' ');
    },
    contentStyle() {
      let { x = 0, y = 0 } = this.position,
        style = {};
      x < 0 ? (style.right = `${-x}px`) : (style.left = `${x}px`);
      y < 0 ? (style.bottom = `${-y}px`) : (style.top = `${y}px`);
      style.opacity = !this.showIn?'0':'1';
      style.transform = !this.showIn?this.contentTransform:'scale(1)';
      style.transformOrigin = this.transformOrigin;
      return style;
    },
    arrowStyle() {
      let { pos = 'top', x = 0, y = 0 } = this.arrowPosition,
        style = {};
      switch (pos) {
        case 'top':
          style.top = '6px';
        case 'bottom':
          !style.top && (style.bottom = '6px');
          style.transform = 'scaleX(0.8) rotate(45deg)';
          if(x>=0 && x<22){
            x = 22;
          }else if(x<0 && x>-22){
            x =-22;
          }
          x < 0 ? (style.right = `${-x}px`) : (style.left = `${x}px`);
          break;
        case 'left':
          style.left = '6px';
        case 'right':
          !style.left && (style.right = '6px');
          style.transform = 'scaleY(0.8) rotate(45deg)';
          if(y>=0 && y<22){
            y = 22;
          }else if(y<0 && y>-22){
            y =-22;
          }
          y < 0 ? (style.bottom = `${-y}px`) : (style.top = `${y}px`);
          break;
        default:
          break;
      }
      return style;
    }
  },
  methods: {
    lcPopoverShow() {
      this.show = true;
      setTimeout(()=>this.showIn=true,40);
    },

    lcButtonClicked(index, key) {
      this.$emit('LcPopoverButtonClicked', { key, index });
      this.hideAction();
    },

    hideAction(){
      this.show = false;
      this.showIn = false;
    },
  }
};
</script>

<style scoped>
.wrapper{
  z-index: 999;
}
.g-cover {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}
.g-popover {
  position: fixed;
  padding:8px;
  z-index: 10;
}
.u-popover-arrow {
  position: absolute;
  border-radius: 2px;
  width:15px;
  height: 15px;
  background-color: #ffffff;
}
.u-popover-inner {
  border-radius: 5px;
  background-color: #ffffff;
}
.i-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 1px solid #dddddd;
}
.i-btn-noborder {
  border-bottom-color: #ffffff;
}
.btn-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.btn-text {
  flex: 1;
  height: 40px;
  font-size: 15px;
  line-height: 40px;
}
.text-align-center {
  text-align: center;
}
</style>
