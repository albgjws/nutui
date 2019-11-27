<template>
  <div class="wrap">
      <lc-title title="信息列表"></lc-title>
      <category title="图文结合"></category>
      
      <nut-info-list 
        type="imgleft"
        :infoList="infoList"
        @infoClick="infoClick"
      ></nut-info-list>

      <nut-info-list 
        type="imgright"
        :infoList="infoList"
        :timeStyle='timeStyle'
        @infoClick="infoClick"
      ></nut-info-list>

      <category title="纯文本"></category>
      <nut-info-list 
        type="text"
        :infoList="infoList1"
        @infoClick="infoClick"
      ></nut-info-list>

      <nut-info-list 
        type="text"
        :line="2"
        :infoList="infoList1"
        @infoClick="infoClick"
      ></nut-info-list>
  </div>
</template>

<script>
  import LcTitle from '../../packages/_mods/title.vue';
  import Category from '../../packages/_mods/category.vue';

  export default {
    data(){
      return {
        timeStyle:{textAlign:'left'},
        infoList:[
          {
              textTitle:'金点子提醒：京东开始全面升级到电子发票，让电子发票引领未来',
              textInfo:'今年以来，虽然A股上涨了6.1（截止发稿前），但是境外资金持续走弱但是境外资金持续走弱但是境外资金持续走弱',
              src:'https://s2.ax1x.com/2019/11/27/Q9KY01.png',
              textTime:'2018-02-09'             
          }
        ],
        infoList1:[
          {
              textTitle:'金点子提醒：京东开始全面升级到电子发票，让电子发票引领未来金点子提醒：京东开始全面升级到电子发票，让电子发票引领未来',
              textTime:'2017-12-18 15:01:23',
              textInfo:'今年以来，虽然A股上涨了6.1（截止发稿前），但是境外资金持续走弱但是境外资金持续走弱但是境外资金持续走弱'              
          }
        ]       
      }
    },
    components: { LcTitle, Category},
    methods:{
      infoClick(index) {
        console.log("clicked" + index);
      }
    }
  }
</script>

<style scoped>
  .wrap{ background: #fff;}
</style>
