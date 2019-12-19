<template>
  <div class="wxc-demo">
    <lc-title title="验证码"></lc-title>
    <category title="发送验证码"></category>


    <div class="container">

      <div class="form">
        <lc-captchafield ref="input" :time=30 @sendCaptcha="sendHandler"></lc-captchafield>
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
      sendHandler(){
        console.log('点击发送验证码');
        this.$refs['input'].countDown();
      }
    }
  };
</script>
