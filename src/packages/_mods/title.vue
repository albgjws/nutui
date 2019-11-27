<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/07/28. -->

<template>
  <div class="wxc-title" :aria-hidden="true">
    <img class="logo" src="./logo.png"/>
    <span class="text">{{title}}</span>
  </div>
</template>

<style scoped>
  .wxc-title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .logo {
    width: 50px;
    height: 50px;
  }

  .text {
    font-size: 15px;
    font-weight: 600;
    color: #000;
  }

</style>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>
