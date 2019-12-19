<template>
    <div>
        <lc-title title="幻灯片" class="title"></lc-title>
        <category title="使用案例"></category>

        <img class="demo-image"
               src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg"
               @click="showSwiperfull=true"/>
        <p class="image-text">点击图片弹出全屏图片</p>
        <lc-button class="btn-margin" @click="showSwiperfull=true">点击按钮弹出全屏图片</lc-button>

         <lc-swiperfull
            :width="375"
            :height="300"
            :dataImgItem="dataImgItem"
            :show="showSwiperfull"
            @swiperfullMaskClicked="maskClick">
        </lc-swiperfull>
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
                    imgSrc:'//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
                },
                {
                    imgSrc:'//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
                },
                {
                    imgSrc:'//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
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