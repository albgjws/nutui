<!-- 102115 新增lc-tag-wall标签墙组件 -->
<template>
  <div class="wall-wrap">
    <div class="title-wrap">
      <slot name="left">
        <span class="title-text" :style="{ color: titleColor }">{{ title }}</span>
      </slot>
      <slot name="right">
        <span class="title-rightBtn" :style="{ color: rightColor }" @click="btnClicked">{{ rightText }}</span>
      </slot>
    </div>
    <div class="tags-wrap">
      <item v-for="(item, index) in list"
            v-bind="Object.assign({}, customStyles, item)"
            :key="index"
            :index="index"
            @select="onSelect(index)" />
    </div>
  </div>
</template>

<style scoped>
  .wall-wrap {
    width: 100%;
  }
  .title-wrap {
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    justify-content: space-between;
  }
  .title-text {
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 13px;
  }
  .title-rightBtn {
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 13px;
  }
  .tags-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 10px;
  }
  .wall-item{display: flex; box-sizing: border-box;align-items: center;}
</style>

<script>
import Item from './item.vue';
export default {
  name: 'nut-tag-wall',
  components: { Item },
  props: {
    list: {
      type: Array,
      default: () => ([])
    },
    title: {
      type: String,
      default () {
        return 'el.common.title';
      }
    },
    titleColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    rightText: {
      type: String,
      default: ''
    },
    rightColor: {
      type: String,
      default: '#198DED'
    },
    customStyles: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    onSelect (index) {
      this.$emit('lcTagWallSelected', { title: this.list[index].title, index });
    },
    btnClicked () {
      this.$emit('lcTagWallRightBtnClicked');
    }
  }
};
</script>

