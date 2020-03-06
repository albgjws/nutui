
<template>
  <div class="grid">
    <div class="grid-item" @click="itemClicked(item, index)" :style="style" v-for="(item, index) in list" :key="index">
        <img v-if="item.icon" :src="item.icon" alt="" class="item-icon" />
        <span v-if="item.label" class="item-label">{{item.label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"nut-grid",
  props: {
    cols: {
      type: Number,
      default: 3
    },
    list: {
      type: Array
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style() {
      const styles = {};
      // 去除lighting-ui组件内在小程序运行环境中所有引入的weex环境变量
      // const screenWidth = Utils.env.getScreenWidth();
      styles.width = `${window.screen.width / this.cols}px`;
      if(this.border){
        styles['border-right'] = '1px solid #D9D9D9';
        styles['border-bottom'] = '1px solid #D9D9D9';
      }
      return styles
    }
  },
  methods: {
    itemClicked(item, index){
      this.$emit('itemClicked', {item, index});
    }
  }
};
</script>
<style scoped>
.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.grid-border {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: 1px solid #D9D9D9;
}
.grid-item{
  display: flex;
  box-sizing: border-box;
  height: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: #D9D9D9;
  border: 0;
}

.grid-item-border{
  display: flex;
  height: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
}

.item-icon{
  width: 30px;
  height: 30px;
}
.item-label{
  font-size: 15px;
  color: #7A7A7A;
  letter-spacing: 0.22px;
}
</style>
