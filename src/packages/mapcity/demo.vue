<template>
  <div class="wxc-demo">
    <lc-title title="nut-map-city"></lc-title>

    <category title="地图组件"></category>
    <div class="map-wrap">
      <div class="func-btn" style="background-color:#f66;" @click="relocate">
        <span class="func-btn-text">重新定位</span>
      </div>
      <div class="func-btn" style="background-color:#6d6;" @click="getLocation">
        <span class="func-btn-text">获取位置接口</span>
      </div>
    </div>
    <div class="searchWrap">
        <input type="text" placeholder="搜索" class="input" v-model="searchValue" />
        <span class="confirm" @click="searchLocation">确定</span>
    </div>
    <nut-map-city ref="map" :mapHeight="300" 
        @getAddInfo="getAddInfo" 
        @getNearby="getNearby" 
        @locatedStatus="locatedStatus" 
        :searchRadius="800" 
        :intervalTime="10000">
    </nut-map-city>  

    <div class="result-wrap">
      <div v-for="(v,i) in result" :key="i">
        <span class="text">{{v}}</span>
      </div>
    </div>
    

  </div>
</template>

<style scoped>
  .wxc-demo {
    background-color: #FFFFFF;
  }
  .map-wrap{display:flex;flex-direction:row; width:100%; margin-top:5px; align-items: center;}
  .func-btn {
    display: flex;
		flex: 1;
		height: 40px;
    justify-content: center;
    align-items: center;
	}

	.func-btn-text {
		font-size: 16px;
		color: aliceblue;
		text-align: center;
	}
  .text{ text-align: left; margin-top: 5px;}
  .searchWrap{ display: flex; flex-direction: row; margin: 5px 0; margin-left: 10px; margin-right: 10px;}
  .input{display: flex; flex:1; border-width: 1px; border-color: #999; padding-left: 10px;}
  .confirm{ width: 50px; height: 25px; background-color: #ffd000; color: #FFFFFF; margin-left: 10px; text-align: center;}
  .result-wrap{ overflow-y: scroll; height: 200px;}
</style>

<script>
  import LcTitle from '../../packages/_mods/title.vue';
  import Category from '../../packages/_mods/category.vue';
  export default {
    components: { LcTitle, Category },
    data: () => ({
        result:'',
        searchValue:''
    }),
    created () {
    },
    methods: {
      // 定位当前位置
      relocate() {
          this.$refs.map.relocate();                    		  	
      },
      // 逆地址批量查询
      getLocation() {
          this.$refs.map.getLocation();                            
      },
      //搜索
      searchLocation(){
          if(this.searchValue==""){
            this.result = '';
            this.$toast.text(`搜索内容为空`);
          }
          this.$refs.map.searchLocation(this.searchValue)
      },

      oninput(event){
          this.searchValue = event.value;
      },

      getAddInfo(inf){
          this.result = '';
          this.result = inf;                  
      },
      getNearby(nb){
          this.result = '';
          this.result = nb;     
      },
      locatedStatus(val){
          if(val=='success'){
              console.log("success")
          }else if(val=='failed'){
              console.log("failed")
          }
      }
    },
    mounted() {
    },
  };
</script>
