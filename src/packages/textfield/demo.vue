<template>
  <div class="wxc-demo">
    <lc-title title="普通输入框"></lc-title>

    <category title="普通输入"></category>
    <div class="container">
      <div class="form">
        <nut-textfield type="number"></nut-textfield>
      </div>
    </div>  

    <category title="输入值监听"></category>
    <div class="container">
      <div class="form">
        <nut-textfield v-model="value1"></nut-textfield>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .wxc-demo {
    background-color: #FFFFFF;
  }
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form{
    width: 300px;
  }
</style>

<script>
  import LcTitle from '../../packages/_mods/title.vue';
  import Category from '../../packages/_mods/category.vue';

  export default {
    components: { LcTitle, Category },
    data: () => ({
      value1: '12312',
    }),
    watch:{
      value1(newVal, oldVal){
        console.log(newVal, oldVal);
      }
    }
  };
</script>
