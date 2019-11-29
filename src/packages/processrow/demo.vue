<template>
  <div class="demo">
      <lc-title title="横向流程条"></lc-title>
      <category title="普通状态"></category>
      <nut-process-row :processList="processList"></nut-process-row>
      <category title="错误状态"></category>
      <nut-process-row :processList="processList1"></nut-process-row>
      <category title="取消状态"></category>
      <nut-process-row :processList="processList2"></nut-process-row>
  </div>
</template>
<script>
    import LcTitle from '../../packages/_mods/title.vue';
    import Category from '../../packages/_mods/category.vue';

    export default {
        components: { Category, LcTitle },
        data(){
            return {
                processList: [
                    {
                    name: "申请受理",
                    data: "09-20 星期一 18:00",
                    state: ""
                    },
                    {
                    name: "份额确认",
                    data: "09-22 星期三",
                    state: "success"
                    }
                ],
                processList1: [
                    {
                    name: "申请受理",
                    data: "09-20 星期一 18:00",
                    state: ""
                    },
                    {
                    name: "份额确认",
                    data: "09-22 星期三",
                    state: "error"
                    }
                ],
                processList2: [
                    {
                    name: "申请受理",
                    data: "09-20 星期一 18:00",
                    state: ""
                    },
                    {
                    name: "份额确认",
                    data: "09-22 星期三",
                    state: "cancel"
                    }
                ]
                
            }
        },
        methods:{
            
        }
    }
</script>
<style scoped>
</style>
