<template>
  <div class="wxc-demo">
    <lc-title title="密码输入框"></lc-title>
      
      
    <category title="密码输入域(默认不显示密码)"></category>
    <div class="container">
      <div class="form">
        <nut-passwordfield type="password" :autofocus="true"></nut-passwordfield>
      </div>
    </div>  

    <category title="密码输入域(显示密码)"></category>
    <div class="container">
      <div class="form">
        <nut-passwordfield type="password" :pwdShow="true" ></nut-passwordfield>
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
    }),
    created () {
    },
    methods: {
    }
  };
</script>
