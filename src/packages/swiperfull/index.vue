
<template>
  <div class="container">
      <lc-mask :width="width"
                :height="height"
                border-radius="10"
                opacity="0.6"
                mask-bg-color="#FFFFFF"
                :has-overlay="true"
                :show-close="false"
                :show="show"
                @LcMaskSetHidden="LcMaskSetHidden">
            <lc-swiper
                    :paginationVisibile="true"
                    ref="nutSwiper"
                    :loop="loop"
                    :height="height"
                    :speed="speed"
                    :autoPlay="autoPlay"
                    :initPage="initPage"
                    :lazyLoad="lazyLoad"
                    :lazyLoadUrl="lazyLoadUrl"
                    :canDragging="canDragging"
                    :paginationClickable="paginationClickable"
                    :paginationVisible="paginationVisible">
                <div v-for="(item,index) in dataImgItem" :key="index" class="nut-swiper-slide" :style="{ height: height  + 'px'}" >
                    <img :src="item.imgSrc" :style="{ height: height + 'px', width: width  + 'px'}" /> 
                </div>
            </lc-swiper>
      </lc-mask>
     

  </div>
</template>

<style scoped>
.nut-swiper-slide{
    display: flex;       
    font-size:12px;
    justify-content: center;
    align-items: center;
}  
</style>

<script>

  export default {
    name:"nut-swiperfull",
    props: {
        dataImgItem: Array,
        width: {
            type: [Number, String],
            default: window.screen.width
        },
        height: {
            type: [Number, String],
            default: 200
        },
        paginationVisible:{
            type:Boolean,
            default:true
        },
        paginationClickable:{
            type:Boolean,
            default:false
        },
        loop:{
            type:Boolean,
            default:true
        },
        speed:{
            type:Number,
            default:500
        },
        canDragging:{ 
            type:Boolean,
            default:true
        },
        autoPlay:{
            type:Number,
            default:0
        },
        initPage:{
            type:Number,
            default:1
        },
        lazyLoad:{
            type:Boolean,
            default:false
        },
        lazyLoadUrl:{
            type:String,
            default:'//img10.360buyimg.com/n1/s375x375_jfs/t1/811/7/9399/13031/5bab45c8E2614735e/a4e343007567442c.png'
        },
        show:{
            type:Boolean,
            default:false
        }
    },
    data: () => ({
    }),
    computed: {
    },
    methods: {
        LcMaskSetHidden () {
            this.$emit('swiperfullMaskClicked', {});
        },
    },
    mounted() {
    },
  };
</script>
