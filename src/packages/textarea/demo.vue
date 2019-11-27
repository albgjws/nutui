
<template> 
  <div class="lc-demo">
      <lc-title title="lc-textarea"></lc-title>
      <category title="七种基本用法"></category>
     
        <p class="title-text">默认</p>
        <lc-textarea placeholder="提示"></lc-textarea>
        
        <p class="title-text">自定义行数</p>
        <lc-textarea :rows="6" placeholder="提示"></lc-textarea>

        <p class="title-text">显示计数器</p>
        <lc-textarea placeholder="提示" :max="50"></lc-textarea> 

        <p class="title-text">不显示计数器</p>
        <lc-textarea placeholder="提示" :show-counter="false"></lc-textarea> 

        <p class="title-text">有标题</p>
        <lc-textarea label="标题" placeholder="提示"></lc-textarea>
        
        <p class="title-text">自动获得焦点</p>
        <lc-textarea label="标题" placeholder="提示" :autofocus="true"></lc-textarea>     

        <!-- <p class="title-text">和input一起使用</p>
        <lc-input label="标题" placeholder="提示" :has-bottom-border="false"></lc-input>
        <lc-textarea label="标题" :has-top-border="false" style="margin-bottom:20px;"></lc-textarea> -->

      
      <category title="自定义标题样式"></category>
        <p class="title-text">label-width & label-align</p>
        <lc-textarea label="标题" placeholder="提示" label-width="70px" label-align="right"></lc-textarea>
        
        <p class="title-text">label-color</p>
        <lc-textarea label="标题" placeholder="提示" label-color="#0785DB"></lc-textarea> 


      <category title="四种事件"></category>
        <p class="title-text">focus事件</p>
        <lc-textarea placeholder="提示" @onFocus="onEvent('focus')"></lc-textarea>

        <p class="title-text">blur事件</p>       
        <lc-textarea placeholder="提示" @onBlur="onEvent('blur')"></lc-textarea>

        <p class="title-text">input事件</p>
        <lc-textarea placeholder="提示" @onInput="onEvent('input')"></lc-textarea>

        <p class="title-text">change事件</p>
        <lc-textarea placeholder="提示" @onChange="onEvent('change')"></lc-textarea>
        
  </div>
</template>

<style scoped>
  .lc-demo {
    background-color: #fff;
  }
  .title-text {
    font-size: 16px;
    margin: 15px 0 8px 0;
    padding-left: 15px;
    color: #4a4a4a;
  }

</style>

<script>
  import LcTitle from '../../packages/_mods/title.vue';
  import Category from '../../packages/_mods/category.vue';
  
  export default {
    components: { LcTitle, Category },
    data: () => ({
      hasTopBorder: false
    }),
    methods: {
      onEvent (event) {
        this.$toast.text(`event:${event}`);
      }
    }
  }
</script>

