<template>
    <div>
        <lc-title title="幻灯片" class="title"></lc-title>
        <category title="使用案例"></category>

        <img class="demo-image"
               src="./banner1.jpg"
               @click="showSwiperfull=true"/>
        <p class="image-text">点击图片弹出全屏图片</p>
        <nut-button class="btn-margin" @click="showSwiperfull=true">点击按钮弹出全屏图片</nut-button>

         <nut-swiperfull
            :width="375"
            :height="300"
            :dataImgItem="dataImgItem"
            :show="showSwiperfull"
            @swiperfullMaskClicked="maskClick">
        </nut-swiperfull>
    </div>

</template>
<script>
    import LcTitle from '../../packages/_mods/title.vue';
    import Category from '../../packages/_mods/category.vue';
    export default{
        components: { LcTitle, Category },
        data(){
            return{
                showSwiperfull:false,
                dataImgItem:[]
            }
        },
        mounted(){
            this.dataImgItem = [
                {
                    imgSrc:'https://s2.ax1x.com/2019/11/02/KOpr01.jpg'
                },
                {
                    imgSrc:'https://s2.ax1x.com/2019/11/02/KOp6k6.jpg'
                },
                {
                    imgSrc:'https://s2.ax1x.com/2019/11/02/KOpsTx.jpg'
                }
            ]
        },
        methods:{
            maskClick(){
                this.showSwiperfull=false;
            }
        }
    }
</script>
<style scoped>
.demo-image {
    display: flex;
    width: 150px;
    height: 150px;
    margin: 20px auto;
}
.image-text {
    display: flex;
    font-size: 13px;
    color: #9B7B56;
    justify-content: center;
}
.btn-margin{display: flex; margin: 40px auto;}
</style>