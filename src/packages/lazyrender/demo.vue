<template>
    <div class="lc-demo">
 
        <lc-title title="懒加载"></lc-title>
        <category title="懒加载"></category>
            
        <lc-lazy-render :time="time1">          
            <div class="lazy">
                <img src="https://s2.ax1x.com/2019/11/27/Q9OrkV.png" class="lazy" style="width:25px;height:25px;"/>
            </div>           
        </lc-lazy-render>

        <lc-lazy-render :time="time2" @loaded="onLoad" :tip="tip" :maskStyle="maskStyle" :tipStyle="tipStyle">
            <div class="lazy">
                <span class="lazy">11111</span>    
            </div>                   
        </lc-lazy-render>

    </div>
</template>

<script>
  import LcTitle from '../../packages/_mods/title.vue';
  import Category from '../../packages/_mods/category.vue';
  export default {
    components: { LcTitle, Category },    
    data(){
        return {
            time1:1000,
            time2:3000,
            tip:'加载中',
            maskStyle:{'marginTop':'15px'},
            tipStyle:{'color':'red'}
        }
    },
    methods: {
        onLoad(){
            console.log("加载了")
        }
    }
  };
</script>
<style scoped>
.lazy-load{display: flex; justify-content: center;}
.lazy{margin-top:25px;display: flex; align-items: center;}
</style>