<template>
    <div class="lc-demo">
 
        <lc-title title="跑马灯"></lc-title>
        <category title="跑马灯"></category>

            
        <lc-marquee 
            :marqueeList="marqueeList" 
            :marqueeStyle="marqueeStyle" 
            :interval="3000">
        </lc-marquee>

    </div>
</template>

<script>
  import LcTitle from '../../packages/_mods/title.vue';
  import Category from '../../packages/_mods/category.vue';
  export default {
    components: { LcTitle, Category },    
     data () {
        return {
            marqueeList: [
                {  info: '1广州', icon:"https://s2.ax1x.com/2019/11/27/Q9OrkV.png",link:"http://www.baidu.com" },
                {  info: '2上海', icon:"https://s2.ax1x.com/2019/11/27/Q9OrkV.png"},
                {  info: '3重庆', icon:"https://s2.ax1x.com/2019/11/27/Q9OrkV.png",link:"http://www.w3school.com.cn/js/js_array_methods.asp"},
                {  info: '4北京', icon:"https://s2.ax1x.com/2019/11/27/Q9OrkV.png"},
            ],
            marqueeStyle:{
                height:30, //高度
                color:"#fff", //文字颜色
                backgroundColor:"#ccc" //背景色
            }
        }
    },

    methods: {
    }
  };
</script>
<style scoped>

</style>