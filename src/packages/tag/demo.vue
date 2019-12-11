<template>
  <div class="wxc-demo">
      <lc-title title="标签"></lc-title>
      <category title="默认使用"></category>
      <div class="tag-list">
        <nut-tag v-for="(item,index) in demoData"
                :key="index"
                v-bind="item"></nut-tag>
      </div>

      <category title="文字标签配置"></category>
      <div class="sub-demo">
        <nut-cell title="是否为实心">
            <nut-switch slot="desc" @change="type= type==='solid' ?'hollow' : 'solid'"></nut-switch>         
        </nut-cell>

        <nut-cell title="标签颜色">
            <input class="input" slot="desc"
                    placeholder="请输入标签色值"
                    v-model="tagColor" />
        </nut-cell>
        <nut-cell title="文字颜色">
            <input class="input" slot="desc"
                    placeholder="请输入文字色值"
                    v-model="fontColor" />
            </nut-cell>
        <nut-cell title="标签内容">
            <input class="input" slot="desc"
                    placeholder="请输入tag文字内容"
                    v-model="value" />
        </nut-cell>
        <div class="demo1">
            <nut-tag :type="type" 
                :tag-color="tagColor"
                :font-color="fontColor"
                v-model="value"></nut-tag>
        </div>
      </div>

      <category title="特殊标签配置"></category>
      <div class="sub-demo">
        <nut-cell title="图片地址">
            <input class="input" slot="desc"
                    placeholder="请输入tag图片地址"
                    v-model="specialIcon" />
        </nut-cell>
        <nut-cell title="标签颜色">
            <input class="input" slot="desc"
                    placeholder="请输入标签色值"
                    v-model="tagColor1" />
        </nut-cell>
        <nut-cell title="文字颜色">
            <input class="input" slot="desc"
                    placeholder="请输入文字色值"
                    v-model="fontColor1" />
        </nut-cell>
        <nut-cell title="标签内容">
            <input class="input" slot="desc"
                    placeholder="请输入tag文字内容"
                    v-model="value1" />
        </nut-cell>
        <div class="demo1">
            <nut-tag type="special"
                    :specialIcon="specialIcon"
                    :tag-color="tagColor1"
                    :font-color="fontColor1"
                    v-model="value1"></nut-tag>
        </div>
      </div>

      <category title="图片标签配置"></category>
      <div class="sub-demo">
        <nut-cell title="标签内容">
            <input class="input" slot="desc"
                    placeholder="请输入tag图片链接"
                    v-model="img" />
        </nut-cell>
        <div class="demo1">
            <nut-tag type="image" :img="img"></nut-tag>
        </div>
      </div>
  </div>
</template>

<style scoped>
  .tag-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 12px 30px 12px;
  }
  .wxc-demo {
    background-color: #fff;
  }

  .scroller {
    display: flex;
    flex: 1;
  }
  .input {
    width: 150px;
    height: 32px;
    text-align: right;
  }

  .demo1 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin-bottom: 10px;
  }


</style>

<script>
  import Data from './tag-data'
  import LcTitle from '../../packages/_mods/title.vue';
  import Category from '../../packages/_mods/category.vue';
  import nutTag from '../../packages/tag/index.vue';

  export default {
    components: { LcTitle, Category, nutTag },
    data: () => ({
      demoData:Data,
      type: 'solid',
      tagColor: '#399DE2',
      fontColor: '#ffffff',
      value: '实心标签',
      img: 'https://s2.ax1x.com/2019/12/10/Q077AP.png',
      specialIcon: 'https://s2.ax1x.com/2019/12/10/Q07Htf.png',
      tagColor1: '#399DE2',
      fontColor1: '#399DE2',
      value1: '实心标签'
    })
  }
</script>
