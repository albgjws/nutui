<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/03/31. -->

<template>
  <div class="category">
    <span class="category-text">{{title}}</span>
  </div>
</template>

<style scoped>
  .category {
    display: flex;
    margin-top: 10px;
    padding-left: 12px;
    flex:1;
    /* width: 375px; */
    height: 34px;
    background-color: #0785DB;
    align-items: center;
  }

  .category-text {
    color: #fff;
    font-weight: 600;
    font-size: 15px;
  }

</style>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>
