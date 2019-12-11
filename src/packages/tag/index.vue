<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/07/28. -->

<template>
  <div class="lc-tag">
    <div v-if="showSolid || showHollow"
         :class="['tag-item','tag-border',showHollow && 'tag-hollow']"
         :style="tagTextStyle">
      <span class="tag-text" :style="{color:fontColor}">{{value}}</span>
    </div>
    <img v-if="showImage"
           :src="img"
           @load="onLoad"
           :aria-hidden="true"
           :style="{ width: imgWidth +'px'}"
           class="tag-image"/>
    <div class="tag-special tag-border"
         :style="{borderColor:tagColor}"
         :accessible="true"
         :aria-label="value"
         v-if="showSpecial">
      <div class="tag-left" :style="{backgroundColor:tagColor}">
        <img :src="specialIcon" class="left-image"/>
      </div>
      <span class="tag-text" :style="{color:fontColor}">{{value}}</span>
    </div>
  </div>
</template>


<script>
  export default {
    name:"nut-tag",
    props: {
      type: {
        type: String,
        default: 'solid'
      },
      value: {
        type: [String, Number],
        default: '测试测试'
      },
      tagColor: {
        type: String,
        default: '#399DE2'
      },
      fontColor: {
        type: String,
        default: '#333'
      },
      specialIcon: {
        type: String,
        default: ''
      },
      img: {
        type: String,
        default: ''
      }
    },
    computed: {
      showSolid () {
        const { type, value } = this;
        return type === 'solid' && value !== '';
      },
      showHollow () {
        const { type, value } = this;
        return type === 'hollow' && value !== '';
      },
      showSpecial () {
        const { type, value, specialIcon } = this;
        return type === 'special' && value !== '' && specialIcon !== '';
      },
      showImage () {
        const { type, img } = this;
        return type === 'image' && img !== ''
      },
      tagTextStyle () {
        const { tagColor, showSolid } = this;
        return showSolid ? { backgroundColor: tagColor } : { borderColor: tagColor }
      }
    },
    data: () => ({
      imgWidth: 45
    }),
    methods: {
      onLoad (e) {
        if (e.success && e.size && e.size.naturalWidth > 0) {
          const width = e.size.naturalWidth;
          const height = e.size.naturalHeight;
          this.imgWidth = width * (12 / height);
        }
      }
    }
  }
</script>


<style scoped>

  .lc-tag {
    display: flex;
    align-items: flex-start;
  }

  .tag-item {
    display: flex;
    height: 12px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    /* hack高度不居中问题，后续版本升级去掉 */
    padding-bottom: 2px;
  }

  .tag-border {
    border-radius: 2px;
  }

  .tag-hollow {
    border-width: 1px;
    border-style: solid;
  }

  .tag-image {
    height: 12px;
  }

  .tag-special {
    display: flex;
    border-width: 1px;
    border-style: solid;
    flex-direction: row;
  }

  .left-image {
    width: 10px;
    height: 10px;
  }

  .tag-left {
    display: flex;
    width: 12px;
    height: 12px;
    align-items: center;
    justify-content: center;
  }

  .tag-text {
    font-size: 10px;
    height: 11px;
    line-height: 11px;
    padding-left: 3px;
    padding-right: 3px;
  }
</style>
