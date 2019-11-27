<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/07/28. -->

<template>
  <div>
    <div class="info-list" v-if="type=='imgleft'" v-for="(v,index) in infoList" :key="index" @click="infoClick(index)"> 
      <img :src="v.src" class="info-list-img mr30" :style="imgStyle"/>
      <div class="flex1">
          <p class="info-list-tit" :style="titleStyle">{{v.textTitle}}</p>
          <P class="info-list-info" :style="infoStyle">{{v.textInfo}}</P>
          <P v-if="v.textTime" class="info-list-time" :style="timeStyle">{{v.textTime}}</P>
      </div>
    </div>

    <div class="info-list" v-if="type=='imgright'" v-for="(v,index) in infoList" :key="index" @click="infoClick(index)">
      <div class="flex1">
          <P class="info-list-tit" :style="titleStyle">{{v.textTitle}}</P>
          <P class="info-list-info" :style="infoStyle">{{v.textInfo}}</P>
          <P v-if="v.textTime" class="info-list-time" :style="timeStyle">{{v.textTime}}</P>          
      </div>
      <img :src="v.src" class="info-list-img" :style="imgStyle"/>
    </div>

    <div class="info-list" v-if="type=='text'" v-for="(v,index) in infoList" :key="index" @click="infoClick(index)">
      <div class="flex1">
          <P :class="['info-list-tit', line==2 && 'line2']" :style="titleStyle">{{v.textTitle}}</P>
          <P class="info-list-info1" v-if="v.textInfo">{{v.textInfo}}</P>
          <P class="info-list-time" :style="timeStyle">{{v.textTime}}</P>          
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name:"nut-info-list",
    props: {
      infoList:Array,
      imgStyle:{
        default:''
      },
      titleStyle:{
        default:''
      },
      infoStyle:{
        default:''
      },
      timeStyle:{
        default:''
      },
      type:{
        type: String,
        default: 'text'
      },
      line: {
        type:  Number,
        default: 1
      }
    },
    computed: {
    },
    methods: {
      infoClick (index) {
        this.$emit('infoClick',index);
      }
    }
  }
</script>

<style scoped>
  p{margin: 0;}
  .mr30{ margin-right: 15px;}
  .ml30{ margin-left: 15px;}
  .flex1{flex:1;}
  .info-list{
      display: flex;
      flex-direction: row;
      padding: 20px 15px;
      border-bottom:1px solid #ececec;
      align-items: flex-start; /*141667 【组件库】lc-info-list修改对齐方式*/
  }
  .info-list-img{
      width: 73px;
      height: 73px;
  }
  .info-list-tit{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      font-size: 16px;
      overflow: hidden; 
      text-overflow: ellipsis; 
      -webkit-line-clamp: 1;
      color: #282d32;
  }
  .info-list-info{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      font-size: 13px;
      overflow: hidden; 
      text-overflow: ellipsis; 
      -webkit-line-clamp: 2;
      color: #909090;
      margin-top: 5px;
      line-height: 19px;
  }
  .info-list-info1{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      font-size: 13px; 
      overflow: hidden; 
      text-overflow: ellipsis; 
      -webkit-line-clamp: 1; 
      color: #9a9aa6; 
      margin-top: 10px;
  }
  .info-list-time{
      text-align: right;
      color: #b3b7b9;
      font-size: 11px;
      margin-top: 5px;
  }
  .line1{display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; -webkit-line-clamp: 1;} 
  .line2{display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; -webkit-line-clamp: 2;} 
</style>
