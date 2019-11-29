<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 16/10/26. -->
<!--A loading indicator. Custom text supported. -->

<template>
  <div>
    <img :src="PART"
           v-if="show"
           :style="loadingStyle"
           resize="contain"
           quality="original"/>
  </div>
</template>

<script>
  import { PART } from '../loading/type';

  export default {
    name:"nut-part-loading",
    props: {
      show: {
        type: Boolean,
        default: false
      },
      width: {
        type: [Number, String],
        default: 18
      },
      height: {
        type: [Number, String],
        default: 18
      }
    },
    data: () => ({
      PART
    }),
    computed: {
      loadingStyle () {
        const { height, width } = this;
        return {
          height: `${height}px`,
          width: `${width}px`
        }
      }
    }
  };
</script>
