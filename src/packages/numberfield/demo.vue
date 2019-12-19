<template>
  <div class="wxc-demo">
    <lc-title title="数字/货币输入框"></lc-title>

    <category title="普通输入"></category>
    <div class="container">
      <div class="form">
        <lc-numberfield type="number"  placeholder="最小金额10元" maxlength=10 ></lc-numberfield>
      </div>
    </div>  

    <category title="显示货币"></category>
    <div class="container">
      <div class="form">
        <lc-numberfield type="number" :showIcon="true" placeholder="最小金额10元" maxlength=10 v-model="money"></lc-numberfield>
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
      money: 200
    }),
    created () {
    },
    methods: {

    },
    watch:{
      money(newVal, oldVal){
        console.log(newVal, oldVal);
      }
    }
  };
</script>
