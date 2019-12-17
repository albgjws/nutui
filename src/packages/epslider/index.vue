<template>
 <div class="align-center justify-center">  
      <div class="flex-row tabWrap" :style="{ width: tabStyles.width +'px', height: tabStyles.height +'px', borderColor:tabStyles.borderColor}">
          <div v-for="(item,index) in groups" :key="index" @click="changeTab(index)" 
          class="tabItem" :style="style(index)">
              <span :style="{ fontSize: tabStyles.fontSize+'px', color: currentIndex == index ? tabStyles.activeColor : tabStyles.titleColor}">{{item.text}}</span>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name:"nut-tab-group",
    props:{
      tabIndex:{
        type:Number,
        default:0
      },
      groups:{
        type:Array,
        default:()=>{[]}
      },
      tabStyles:{
        type: Object,
        default: () => ({
          width: 345,
          height: 30,
          fontSize:14,
          titleColor:'#333',
          activeColor:'#fff',//默认背景色 选中颜色
          borderColor:'#3580ee',//边框颜色 选中背景色
        })
      },
      
    },
    data(){
      return{
         currentIndex:this.tabIndex
      }
    },
    watch:{
        tabIndex(v){
            this.currentIndex = v;
        }
    },
    methods:{
      style(index){
        var that =this;

        if(index == 0){
          return {   
          'border-right-color':that.tabStyles.borderColor,
          'border-top-left-radius': '5px',
          'border-bottom-left-radius': '5px',
          'background-color': index == this.currentIndex? that.tabStyles.borderColor:that.tabStyles.activeColor,
          }
        }
        if(index == this.groups.length -1){
          return {
          'border-right-width': '0px',
          'border-top-right-radius': '5px',
          'border-bottom-right-radius': '5px',
          'background-color':index == this.currentIndex? that.tabStyles.borderColor:that.tabStyles.activeColor,
          }
        }
        if(index == this.currentIndex){
           return {
              'border-color': that.tabStyles.borderColor,
              'background-color': that.tabStyles.borderColor,
           }
        }
        return {
          'border-right-color': that.tabStyles.borderColor,
          'background-color': that.tabStyles.activeColor,
        }
      },
      changeTab(index) {
        this.currentIndex = index;
        this.$emit('changeTab',index)
      }
    }
  }
</script>

<style scoped>
.m-color-1{ color: #333;}
.font-14{font-size: 14px;}
.flex-row {
  display: flex;
  flex-direction: row;
}
.align-center {
  display: flex;
  align-items: center;
}
.justify-center {
  display: flex;
  justify-content: center;
}
.tabWrap{
  border-radius:5px;
  border-width:1px;
  border-style: solid;
}
.tabItem{
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-right-width:1px;
  border-right-style: solid;
}

</style>
