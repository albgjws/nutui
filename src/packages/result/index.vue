

<template>
  <div class="wrap" :style="wrapStyle" @click="onClick">
    <div class="lc-result" :style="{paddingTop: setPaddingTop }">
      <img class="result-image"
             :aria-hidden="true"
             :src="icon"/>
      <div class="result-content">
        <p class="content-title">{{title}}</p>
        <p class="content-desc">{{desc}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .lc-result {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    align-items: center;
    background-color: #f2f3f4;
  }

  .result-image {
    width: 92px;
    height: 92px;
  }

  .result-content {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    align-items: center;
  }

  .content-title {
    height: 21px;
    line-height: 21px;
    text-align: center;
    font-size: 17px;
    color: #4A4A4A;
  }

  .content-desc {
    margin-top: 16px;
    color: #787878;
    font-size: 13px;
  }
</style>

<script>

  export default {
    name:"nut-result",
    props: {
      icon: {
        type: String,
      },
      title: {
        type: String,
      },
      desc:{
        type:String
      },
      wrapStyle: Object,
      paddingTop: {
        type: [Number, String],
        default: 116
      }
    },
    computed: {
      setPaddingTop () {
        const paddingTop = this.paddingTop;
        return `${paddingTop}px`
      }
    },
    methods: {
      onClick () {
        const { title, desc } = this;
        this.$emit('onResultClick', {title,desc})
      }
    }
  };
</script>
