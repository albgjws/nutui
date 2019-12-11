<!-- 102115 新增lc-tag-wall标签墙组件 -->
<template>
  <div class="wall-item" :style="wrapStyle" @click="onClick">
    <span class="text-title" :style="titleStyle">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: -1
    },
    title: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 36
    },
    padding: {
      type: Number,
      default: 8
    },
    borderRadius: {
      type: Number,
      default: 3
    },
    borderWidth: {
      type: Number,
      default: 1
    },
    fontSize: {
      type: Number,
      default: 12
    },
    originBorderColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.08)'
    },
    originTitleColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.6)'
    },
    originBackgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    color: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    },
    borderStyle: {
      type: String,
      default: 'solid'
    },
    lineSpacing: {
      type: Number,
      default: 12
    },
    itemSpacing: {
      type: Number,
      default: 12
    }
  },
  computed: {
    wrapStyle () {
      const { borderRadius, height, padding, borderWidth,borderStyle, originBorderColor, originBackgroundColor, backgroundColor, borderColor, color, itemSpacing, lineSpacing } = this;
      return {
        justifyContent: 'center',
        borderRadius: borderRadius + 'px',
        height: height + 'px',
        paddingLeft: padding + 'px',
        paddingRight: padding + 'px',
        borderWidth: borderWidth + 'px',
        borderStyle: borderStyle,
        backgroundColor: backgroundColor || originBackgroundColor,
        borderColor: borderColor || color || originBorderColor,
        marginRight: itemSpacing + 'px',
        marginBottom: lineSpacing + 'px'
      };
    },
    titleStyle () {
      const { fontSize, color, originTitleColor } = this;
      return {
        fontSize: fontSize + 'px',
        color: color || originTitleColor
      };
    }
  },
  methods: {
    onClick () {
      this.$emit('select', this.index);
    }
  }
};
</script>