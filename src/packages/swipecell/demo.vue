<template>
    <div class="lc-demo">
 
        <lc-title title="滑动菜单"></lc-title>
            
        <category title="简单滑动菜单-手势向左边滑动,菜单按钮操作"></category>
        <nut-swipe-cell @actionClick="clickmenu"
                        @swipeleft="swipeleft"
                        @swiperight="swiperight"
                        :items="btnAry1"
                        :title="'腾讯新闻-今日头条'"></nut-swipe-cell>

        <category title="滑动菜单-高度设置"></category>                
        <nut-swipe-cell @actionClick="clickmenu"
                        :height="'75px'"
                        :items="btnAry1"
                        :title="'腾讯新闻-今日头条'"></nut-swipe-cell>

        <category title="场景1-组件扩展案例"></category>                
        <nut-swipe-cell :items="btnAry1"
                        :title="'腾讯新闻-今日头条'"
                        @wrapClick="fn">
            
                <span slot="content">--腾讯新闻-今日头条--</span>
            
        </nut-swipe-cell>

        <category title="场景2-与列表结合案例"></category>                
        <div v-for="(i, index) in items" :key="index">
            <nut-swipe-cell :index="index" :hasArrow="true" :items="btnAry" :title="i.title" @actionClick="clickmenu1"></nut-swipe-cell>
        </div>

    </div>
</template>

<script>
  import LcTitle from '../../packages/_mods/title.vue';
  import Category from '../../packages/_mods/category.vue';

  export default {
        components: { LcTitle, Category },    
        data() {
            return {
                btnAry1: [
                    {
                        'title': '取消',
                        'bgcolor' : '#c6c7c8'
                    },
                    {
                        'title': '标记',
                        'bgcolor' : '#3399ff'
                    }
                ],
                btnAry: [
                    {
                        'title': '取消',
                        'bgcolor' : '#c6c7c8'
                    },
                    {
                        'title': '删除',
                        'bgcolor' : '#fa3300'
                    },
                    {
                        'title': '标记',
                        'bgcolor' : '#3399ff'
                    }
                ],
                items: [
                    {
                        'title':'腾讯新闻'
                    },
                    {
                        'title':'网易新闻'
                    },
                    {
                        'title':'新浪微博'
                    }
                ]
            }
        },
        methods: {
            fn(){
                this.$toast.text(`点击click`);
            },
            clickmenu(e){
                if(e == 0){
                    this.$toast.text(`${this.btnAry1[e-0].title}`);
                }else if(e == 1){
                    this.$toast.text(`${this.btnAry1[e-0].title}`);
                }
            },
            clickmenu1(e,i){
                if(e == 0){
                    this.$toast.text(`${i+this.btnAry[e-0].title}`);
                }else if(e == 1){
                    this.$toast.text(`${i+this.btnAry[e-0].title}`);
                }
                else if(e == 2){
                    this.$toast.text(`${i+this.btnAry[e-0].title}`);
                }
            },
            swipeleft(){
                this.$toast.text(`左滑了`);
            },
            swiperight(){
                this.$toast.text(`右滑了`);
            }
        }
    }
</script>
<style scoped>
</style>