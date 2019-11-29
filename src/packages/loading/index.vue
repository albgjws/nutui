<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 16/10/26. -->
<!--A loading indicator. Custom text supported. -->

<template>
<!-- 150649 【TS:201907040684-经纪业委会（云纪）_宋志兴-【需求类型】	需求【需求描述】	lc】 -->
  <div :class="['loading-container',showLoading && needMask && 'loading-need-mask']"
       @click="maskClicked"
       :style="maskStyle">
    <div class="lc-loading" v-if="showLoading"> <!-- :style="{ top: topPosition +'px'}" -->
      <div :class="['loading-box',loading.class]" :aria-hidden="true">
        <img :src="loading.url"
               class="loading-trip-image"
               resize="contain"
               quality="original"/>
        <span v-if="loadingText"
              class="loading-text">{{loadingText}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
	.loading-container{
		position: relative;
	}
  .loading-need-mask {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .lc-loading {
    position: fixed;
    left: 144px;
    top: 250px;
    z-index: 9999;
  }
  .loading-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 88px;
    height: 88px;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .trip-loading {
    background-color: rgba(0, 0, 0, .2);
  }
  .loading-trip-image {
    height: 38px;
    width: 38px;
  }
  .loading-text {
    color: #ffffff;
    font-size: 12px;
    line-height: 15px;
    height: 15px;
    margin-top: 4px;
    text-overflow: ellipsis;
    width: 70px;
    text-align: center;
  }
</style>

<script>
  import { GIF, BLACK_GIF } from './type';
  export default {
    name:"nut-loading",
    props: {
      show: {
        type: Boolean,
        default: false
      },
      loadingText: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'default'
      },
      interval: {
        type: [Number, String],
        default: 0
      },
      // 150649 【TS:201907040684-经纪业委会（云纪）_宋志兴-【需求类型】	需求【需求描述】	lc】
      needMask: {
        type: Boolean,
        default: false
      },
      maskStyle: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({
      showLoading: false,
      tid: 0
    }),
    watch: {
      show () {
        this.setShow();
      }
    },
    computed: {
      loading () {
        let loading = {};
        switch (this.type) {
          case 'trip':
            loading = {
              url: GIF,
              class: 'trip-loading'
            };
            break;
          default:
            loading = {
              url: BLACK_GIF,
              class: 'default-loading'
            }
        }
        return loading;
      },
    //   topPosition () {
    //     return (Utils.env.getPageHeight() - 200) / 2;
    //   }
    },
    created () {
      this.setShow();
    },
    methods: {
      maskClicked () {
        this.needMask && (this.$emit('LcLoadingMaskClicked', {}));
      },
      setShow () {
        const { interval, show, showLoading } = this;
        const stInterval = parseInt(interval);
        clearTimeout(this.tid);
        if (show) {
          if (showLoading) {
            return;
          }
          if (stInterval === 0) {
            this.showLoading = true;
          } else {
            this.tid = setTimeout(() => {
              this.showLoading = true;
            }, stInterval);
          }
        } else {
          this.showLoading = false;
        }
      }
    }
  };
</script>