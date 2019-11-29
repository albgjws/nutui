<!--101111	新增lc-lazy-render懒加载组件-->
<template>
        
        <div class="marquee-box" :style="{height:marqueeStyle.height+'px'}">
            <ul :class="{'marquee-top':animate}" class="marquee-list" :style="{height:marqueeStyle.height+'px'}">
                <li v-for="(v,i) in marqueeList" :key="i"  @click="marqueeClick(v.link)" 
                    :style="{lineHeight:marqueeStyle.height+'px',backgroundColor:marqueeStyle.backgroundColor}">
                    <img :src="v.icon" class="marquee-img" v-if="v.icon" />
                    <span class="marquee-text" :style="{color:marqueeStyle.color}">{{v.info}}</span>
                </li>
            </ul> 
        </div>

</template>

<script scoped>
    export default {
        name:"nut-marquee",
        data () {
            return {
                animate: false,
            }
        },
        props: {
            marqueeList: Array,  
            marqueeStyle: {},
            interval: { default: 2000 },
        },
        created: function () {
            setInterval(this.showMarquee, this.interval)
        },
        methods: {
            showMarquee: function () {
                this.animate = true;
                setTimeout(()=>{
                    this.marqueeList.push(this.marqueeList[0]);
                this.marqueeList.shift();
                this.animate = false;
            },500)},

            marqueeClick(i){
                window.location.href=i 
            }
        }
    };
</script>

<style>
.marquee-box{display: block; position: relative; width: 100%; height: 30px; overflow: hidden; }
.marquee-list{position: absolute; top: 0; left: 0; width: 100%;}
.marquee-top{transition: all 0.5s; margin-top: -30px;}
.marquee-list li {display: flex; align-items: center; height: 30px; line-height: 30px; font-size: 14px; padding-left: 10px;}
.marquee-img { width: 16px; height: 16px;}
.marquee-text{ color: #000; margin-left: 10px;}
</style>