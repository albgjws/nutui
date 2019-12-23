<template>
  <div class="bui-list-swipe-menu">
    <div class="bui-cell-swipe-menu" :style="{'height': height}">

      

      <div @click="_click" class="bui-list-main bui-list-swipe-main" ref="swipedom"  
        @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :style="deleteSlider" >
        <div class="bui-list-main-left">
          <slot name="content">
            <span class="bui-list-title" v-if="title">{{title}}</span>
          </slot>
          <img :src="arrowIcon" class="cell-arrow-icon" v-if="hasArrow" />
        </div>
      </div>


      <div class="bui-list-swipe" ref="swipeBox">
        <slot name="action">
          <div
            class="bui-list-swipe-btn"
            :style="{'background-color': item.bgcolor,'height': height}"
            @click="_actionClick(index)"
            :key="index"
            v-for="(item, index) in items"
          >
            <span class="bui-list-swipe-btn-text">{{item.title}}</span>
          </div>
        </slot>
      </div>

    </div>
  </div>
</template>
<style scoped>
.cell-arrow-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.bui-cell-swipe-menu {
  position: relative;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #999;
}

.bui-list-main {
  display: flex;
  padding-left: 10px;
  flex: 1;
  justify-content: center;
  background-color: #ffffff;
}

.bui-list-title {
  font-size: 17px;
  color: #000;
  text-overflow: ellipsis;
}
.bui-list-swipe {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  flex-direction: row;
  justify-content: flex-end;
}
.bui-list-swipe-btn {
  display: flex;
  flex-direction: row;
  width: 60px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #c6c7c8;
}
.bui-list-swipe-btn-text {
  font-size: 15px;
  color: #fff;
}
.bui-list-swipe-main {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  transition: 0.3s;
  z-index: 10;
}
.bui-list-main-left {
  display: flex;
  justify-content: space-between;
  flex: 1;
  flex-direction: row;
  align-items: center;
}
</style>
<script>
let defaultAction = [
  {
    title: "取消",
    bgcolor: "#c6c7c8"
  },
  {
    title: "删除",
    bgcolor: "#fa3300"
  }
];
export default {
  name: "nut-swipe-cell",
  data: function() {
    return {
      startX: 0, //触摸位置
      endX: 0, //结束位置
      moveX: 0, //滑动时的位置
      disX: 0, //移动距离
      deleteSlider: "" //滑动时的效果,使用v-bind:style="deleteSlider"
    };
  },
  props: {
    items: {
      type: Array,
      default() {
        return defaultAction;
      }
    },
    height: {
      type: String,
      default: "50px"
    },
    title: {
      type: String
    },
    index: {
      type: Number
    },
    hasArrow: {
      type: Boolean,
      default: false
    },
    arrowIcon: {
      type: String,
      default:
        "data:image/png;base64,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"
    }
  },
  methods: {
    touchStart(ev) {
      ev = ev || event;
      //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
      if (ev.touches.length == 1) {
        // 记录开始位置
        this.startX = ev.touches[0].clientX;
      }
    },
    touchMove(ev) {
      ev = ev || event;
      //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
      let wd = this.$refs.swipeBox.offsetWidth;
      if (ev.touches.length == 1) {
        // 滑动时距离浏览器左侧实时距离
        this.moveX = ev.touches[0].clientX;
        //起始位置减去 实时的滑动的距离，得到手指实时偏移距离
        this.disX = this.startX - this.moveX;
        // 如果是向右滑动或者不滑动，不改变滑块的位置
        if (this.disX < 0 || this.disX == 0) {
          this.deleteSlider = "transform:translateX(0px)";
          // 大于0，表示左滑了，此时滑块开始滑动
        } else if (this.disX > 0) {
          //具体滑动距离我取的是 手指偏移距离*5。
          this.deleteSlider = "transform:translateX(-" + this.disX * 5 + "px)";
          // 最大也只能等于删除按钮宽度
          if (this.disX * 5 >= wd) {
            this.deleteSlider = "transform:translateX(-" + wd + "px)";
          }
        }
      }
    },
    touchEnd(ev) {
      ev = ev || event;
      let wd = this.$refs.swipeBox.offsetWidth;
      if (ev.changedTouches.length == 1) {
        let endX = ev.changedTouches[0].clientX;

        this.disX = this.startX - endX;
        console.log(this.disX);
        //如果距离小于删除按钮一半,强行回到起点
        if (this.disX * 5 < wd / 2) {
          this.deleteSlider = "transform:translateX(0px)";
          this.$emit("swiperight");
        } else {
          //大于一半 滑动到最大值
          this.deleteSlider = "transform:translateX(-" + wd + "px)";
          this.$emit("swipeleft");
        }
      }
    },
    //操作点击事件
    _actionClick(index) {
      this.close();
      this.$emit("actionClick", index, this.index);
    },
    
    _click() {
      this.$emit("wrapClick");
      this.close();
    },
    close(fn) {
      this.deleteSlider = "translate(0px, 0px)";
    },
  }
};
</script>