<template>
  <div class="wxc-demo">

      <lc-title title="横向日历"></lc-title>

      <nut-calendar-row @current="current" @chose="choseDate"></nut-calendar-row>
      <text>当前日期：{{currentDate}}</text>
      <text>选择了：{{userChose}}</text>
  </div>
</template>

<script>

  import LcTitle from '../../packages/_mods/title.vue';

  export default {
    components: { LcTitle },
    data: function () {
      return {
          currentDate:'',
          userChose:'',
      }
    },  
    methods:{
      choseDate(chose){
          this.userChose=chose;
      },
      current(cur){
          this.currentDate=cur;
      }
    
    }
  }
</script>

<style scoped>
.wxc-demo {
    background-color: #FFFFFF;
  }
</style>
