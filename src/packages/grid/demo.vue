
<template>
  <div class="demo">
      <lc-title title="网格"></lc-title>
      <category title="默认3列"></category>
      <lc-grid :list="all" @itemClicked="clickHandler1"></lc-grid>

      <category title="自定义列"></category>
      <lc-grid :cols="5" :list="text" @itemClicked="clickHandler2"></lc-grid>

      <category title="可有网格"></category>
      <lc-grid :cols="4" :list="img" :border="true" @itemClicked="clickHandler3"></lc-grid>

  </div>
</template>

<script>
    import LcTitle from '../../packages/_mods/title.vue';
    import Category from '../../packages/_mods/category.vue';

    export default {
        components: { LcTitle, Category },
        data(){
            return {
                all: [
                        {
                            label:"button",
                            icon: "https://i.loli.net/2017/12/19/5a387c4f536a1.png",
                            path: "/index/button"
                        },
                        {
                            label:"select",
                            icon: "https://i.loli.net/2017/12/19/5a387c4f536a1.png",
                            path: "/index/select"
                        },
                        {
                            label:"input",
                            icon: "https://i.loli.net/2017/12/19/5a387c4f536a1.png",
                            path: "/index/input"
                        },
                        {
                            label:"slide",
                            icon: "https://i.loli.net/2017/12/19/5a387c4f536a1.png",
                            path: "/index/slide"
                        },
                        {
                            label: "image",
                            icon: "https://i.loli.net/2017/12/19/5a387c4f536a1.png",
                            path: "/index/image"
                        },
                        {
                            label: "radio",
                            icon: "https://i.loli.net/2017/12/19/5a387c4f536a1.png",
                            path: "/index/radio"
                        }
                    ],
                text: [
                        {
                            label:"button",
                            path: "/index/button",
                        },
                        {
                            label:"select",
                            path: "/index/select",
                        },
                        {
                            label:"input",
                            path: "/index/input",
                        },
                        {
                            label:"slide",
                            path: "/index/slide",
                        },
                        {
                            label: "image",
                            path: "/index/image",
                        },
                        {
                            label: "radio",
                            path: "/index/radio",
                        }
                    ],
                img: [
                        {
                            icon: "https://i.loli.net/2017/12/19/5a387c4f536a1.png",
                            path: "/index/button",
                        },
                        {
                            icon: "https://i.loli.net/2017/12/19/5a387c4f536a1.png",
                            path: "/index/select",
                        },
                        {
                            icon: "https://i.loli.net/2017/12/19/5a387c4f536a1.png",
                            path: "/index/input",
                        },
                        {
                            icon: "https://i.loli.net/2017/12/19/5a387c4f536a1.png",
                            path: "/index/slide",
                        },
                        {
                            icon: "https://i.loli.net/2017/12/19/5a387c4f536a1.png",
                            path: "/index/image",
                        },
                        {
                            icon: "https://i.loli.net/2017/12/19/5a387c4f536a1.png",
                            path: "/index/radio",
                        }
                ]
            }
        },
        methods:{
            clickHandler1({item, index}){
                console.log(item, index)
            },
            clickHandler2({item, index}){
                console.log(item, index)
            },
            clickHandler3({item, index}){
                console.log(item, index)
            }
        }
    }
</script>
<style scoped>
.demo{padding: 0px;}
</style>
