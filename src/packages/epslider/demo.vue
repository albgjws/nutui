
<template>
  <div>
      <lc-title title="页签组"></lc-title>
      <category title="默认按钮组"></category>
      <div id="apps">
        <nav>
          <p
            v-for="(item,$index) in arrs" :key="$index"
            @click="toggle($index)"
            :class="{active:$index==active}"
          >{{item}}</p>
        </nav>
      </div>
      <div class="back" @touchstart.prevent="touchStart" @touchmove.prevent="touchMove" @touchend="touchEnd" ref="back" >
            <div class="back-l" ref="left"></div>
            <div class="back-m" ref="middle"></div>
            <div class="back-r" ref="right"></div>
      </div>
  </div>
</template>

<script>
    import LcTitle from '../../packages/_mods/title.vue';
    import Category from '../../packages/_mods/category.vue';

    export default {
        components: { LcTitle, Category },
        data(){
            return {
                // arrs: ["菜单1", "菜单2", "菜单3", "菜单3",'菜单5','菜单6','菜单7'],
                active: 0,
                currentPlay: "red",
                percent: 0,
                arrs: ["red", "blue", "yellow"] ,
                startX:0,
                startY:0
            }
        },
        methods:{
            toggle(index) {
                this.active = index;
                if(index==0){
                    var offsetWidth = 0;
                    this.currentPlay = "red";
                }
                else if(index==1){
                    var offsetWidth = -window.innerWidth;
                    this.currentPlay = "blue";
                }
                else if(index==2){
                    this.currentPlay = "yellow";
                    var offsetWidth = -window.innerWidth*2;
                }
                //这里的transform是针对最开始的位置而言，而不是移动过程中的位置
                this.$refs.back.style["transform"] = `translate3d(${offsetWidth}px,0,0)`;
                this.$refs.back.style["transition"] = `all 0.5s`;
            },
            touchStart(e) {
                const touch = e.touches[0];
                this.startX = touch.pageX;
                this.startY = touch.pageY	;
            },
            touchMove(e) {
                const touch = e.touches[0];
                console.log(touch)
                //横向和纵向偏离位置
                const deltaX = touch.pageX - this.startX;
                const deltaY = touch.pageY - this.startY;
                if (Math.abs(deltaY) > Math.abs(deltaX)) {
                    return;
                }
                if(this.currentPlay=='red'){
                    var left=0;
                    var offsetWidth = Math.min(
                    0,
                    Math.max(-window.innerWidth, left + deltaX)
                    );
                }
                else if(this.currentPlay=='blue'){
                    var left=-window.innerWidth;
                    if(deltaX>0){  //判断动作 是左滑还是右滑
                    var offsetWidth = Math.min(
                        0,
                        Math.max(-window.innerWidth, left + deltaX)
                        );
                    }else{
                    var offsetWidth = Math.min(
                        -window.innerWidth,
                        Math.max(-window.innerWidth*2, left + deltaX)
                        );
                    }
                }
                else{
                    var left=-window.innerWidth*2;
                    var offsetWidth = Math.min(
                    -window.innerWidth,
                    Math.max(-window.innerWidth*2, left + deltaX)
                    );
                }
                //记录滑动的距离占屏幕宽度的百分比，如果滑动太少则不切换
                this.percent = deltaX / window.innerWidth;
                //动画中滑块的移动
                this.$refs.back.style["transform"] = `translate3d(${offsetWidth}px,0,0)`;
                this.$refs.back.style["transition"] = `all 0.5s`;
                //设置动画时间
                this.$refs.back.style["transitionDuration"] = 10;
                console.log('');
            },
            touchEnd() {
                let offsetWidth;
                let percent;
                //当前为红色，滑动占比小于-0.1则切换，否则回到原位置
                if (this.currentPlay === "red") {
                    if (this.percent < -0.1) {
                    this.currentPlay = "blue";
                    this.active=1;
                    offsetWidth = -window.innerWidth;
                    } else {
                    offsetWidth = 0;
                    }
                }else if(this.currentPlay === "blue"){
                    if (this.percent > 0.1) {
                    this.active=0;
                    this.currentPlay = "red";
                    offsetWidth = 0;
                    }
                    else if (this.percent < -0.1) {
                    this.currentPlay = "yellow";
                    this.active=2;
                    offsetWidth = -window.innerWidth*2;
                    }
                    else {
                    offsetWidth = -window.innerWidth;
                    }
                }
                else {
                    //当前为黄色，滑动占比大于0.9则切换，否则回到原位置
                    if (this.percent > 0.1) {
                    this.currentPlay = "blue";
                    this.active=1;
                    offsetWidth = -window.innerWidth;
                    } else {
                    offsetWidth = -window.innerWidth*2;
                    }
                }
                //这里的transform是针对最开始的位置而言，而不是移动过程中的位置
                this.$refs.back.style["transform"] = `translate3d(${offsetWidth}px,0,0)`;
                this.$refs.back.style["transitionDuration"] = 10;
            }


        }
    }
</script>
<style scoped>
#apps{ width: 100%; overflow:hidden; } 
#apps nav{ padding: 0 10px; display: flex; align-items: middle; overflow: auto; } 
#apps p{ text-align: center; font-size: 16px; padding: 10px; margin: 5px; }
#apps p.active{ color: #ffff00; background-color: #000000; }
.back {
  position: fixed;
  width: 100%;
  height: 100px;
  white-space: nowrap;
}
  .back-l {
    position: relative;
    vertical-align: top;
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: red;
  }
   .back-m {
    position: relative;
    vertical-align: top;
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: blue;
  }

  .back-r {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: yellow;
  }


</style>
