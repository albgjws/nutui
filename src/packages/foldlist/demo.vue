
<template>
  <div class="demo">
      <lc-title title="折叠列表"></lc-title>
      <category title="折叠列表"></category>

      <nut-fold-list
        :title="'折叠列表测试'"
        :desc="'更多'"
        :folded="true"
        @fold="foldHandler"
        @more="moreList"
      >
        <div slot="foldContent">
          <span>hello</span>
        </div>
      </nut-fold-list>

      <nut-fold-list
        :title="'折叠列表测试2'"
        :desc="'更多2'"
        :folded="false"
        @fold="foldHandler"
      >
        <div slot="foldContent">
          <span>这是另外一个折叠列表</span>
        </div>
      </nut-fold-list>
  </div>
</template>

<script>
    import LcTitle from '../../packages/_mods/title.vue';
    import Category from '../../packages/_mods/category.vue';
    
    export default {
        components: { LcTitle, Category },
        data(){
            return {}
        },
        methods:{
            foldHandler(fold){
                console.log(fold)
            },
            moreList(){
              console.log("跳转")
            }
        }
    }
</script>
<style lang="less">

</style>
