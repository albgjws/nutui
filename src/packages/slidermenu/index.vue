<template>
  <div class="cascad-menu" ref="cascadMenu">
    <scroll class="left-menu" :data="menus" ref="leftMenu" :style="{width: (menuStyles.width)+'px'}">
        <ul class="left-menu-container">
          <li
            class="left-item"
            ref="leftItem"
            :class="{'current': currentIndex === index}"
            @click="selectLeft(index, $event)"
            v-for="(menu, index) in menus"
            :key="index">
            <p class="text">{{menu.name}}</p>
          </li>
        </ul>
    </scroll>

    <scroll
      class="right-menu"
      ref="rightMenu"
      @scroll="scrollHeight"
      :listenScroll="true"
      :probeType="3">
        <ul class="right-menu-container">
          <li class="right-item" ref="rightItem" v-for="(menu, i) in menus" :key="i">
            <div class="right-title" slot="title">{{menu.name}}</div>
            <ul slot="content">
              <li v-for="(item, j) in menu.data" :key="j">
                <div class="data-wrapper">
                  <div class="data">{{item.name}}</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
    </scroll>

  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Scroll from './scroll'
export default {
  name:"nut-slider-menu",
  data() {
    return {
      rightTops: [],
      scrollY: 0,
      leftScrollY: 0
    }
  },
  props: {
    menus: {
      required: true,
      type: Array,
      default () {
        return []
      }
    },

    menuStyles: {
        type: Object,
        default: () => ({
            width: 100,
            height: 40
        })
    }
  },
  computed: {
    currentIndex () {
      const { scrollY, rightTops } = this
      let index = rightTops.findIndex((height, index) => {
        return scrollY >= rightTops[index] && scrollY < rightTops[index + 1]
      })
      if (scrollY > rightTops[index] + 50) {
        index++;
      }
      return index
    }
  },
  created() {
    this.$nextTick(() => {
      this._calculateHeight()
    })
  },
  methods: {
    selectLeft (index, event) {
      console.log(index);
      if (!event._constructed) {
        return
      }
      let rightItem = this.$refs.rightItem
      let el = rightItem[index]
      this.$refs.rightMenu.scrollToElement(el, 300)
    },
    scrollHeight (pos) {
      console.log(pos);
      this.scrollY = Math.abs(Math.round(pos.y))
    },
    _calculateHeight() {
      let lis = this.$refs.rightItem;
      console.log(lis)
      let height = 0
      this.rightTops.push(height)
      Array.prototype.slice.call(lis).forEach(li => {
        height += li.clientHeight
        this.rightTops.push(height)
      })
      console.log(this.rightTops)
    }
  },
  components: {
    Scroll
  }
}
</script>

<style scoped>
.cascad-menu{
    display:flex;
    position :absolute;
    top :100px;
    bottom :100px;
    width :100%;
    height: 100%;
    overflow: hidden;
}
.left-menu{
    background-color: #f3f5f7;
    border-bottom: 1px solid #ccc;
}

.left-item{
    display: flex;
    border-bottom: 1px solid #ccc;
    align-items: center;
    justify-content: center;
    background-color: #f3f5f7;
    height: 54px;
    width :100%; 
}
        
.current{ background-color: #fff; }
     
.right-menu{flex:1;}
.right-item{
  height: 100%;
  border-bottom: 1px solid #ccc;
}
        
.right-title{
    border-bottom: 1px solid #ccc;
    height :25px;
    line-height: 25px;
    padding-left: 15px;
}
.data-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
}        
.data{
    height: 50px;
}
            
</style>