<template>
  <div>
    <lc-title title="密码键盘"></lc-title>
    <category title="使用案例"></category>
    <lc-keyboard ref="pwd" class="align-bottom" @complete="completeHandler" @forgetClicked="forgetHandler" :showError="isErr" :showForget="isForgot" :chance="chance"></lc-keyboard>
  </div>
</template>

<style scoped>

  .align-bottom{
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }

</style>

<script>

  import LcTitle from '../../packages/_mods/title.vue';
  import Category from '../../packages/_mods/category.vue';

  export default {
    components: { LcTitle, Category },
    data: () => ({
      isErr: false,
      isForgot: true,
      chance: 3
    }),
    created () {
    },
    methods: {
      completeHandler(data){
        console.log('input complete with result: ');
        console.log(data)
        if(data.join('') !== '123456'){
          this.isErr = true;
          setTimeout(() => {
            this.isErr = false;
            this.$refs['pwd'].clear();
          }, 1500)
          this.chance--;
        }else{
          console.log('密码正确')
        }
      },
      forgetHandler(){
        console.log('忘记密码了')
      }
    }
  };
</script>
