<template>
  <div>
    <div class="input-container">
      <div v-for="(item, index) in pwdArray" :key="index" :class="['pwdBlock', index==0?'pwdBlock-first':'', showError?'pwdBlock-error':'']">
        <div class="dot" v-if="item!==undefined"></div>
      </div>
    </div>
    <div class="input-tip">
      <div>
        <span class="span-error" v-if="showError">交易密码不正确，还剩{{chance}}次机会</span>
      </div>
      <div>
        <span class="span-forget" v-if="showForget" @click="forgetHandle">忘记密码？</span>
      </div>
    </div>
    <div class="keyboard" :style="{'margin-top':marginTop+'px'}">
      <div class="row">
        <div @click="input(1)" class="num block">
          <span class="span-num">1</span>
        </div>
        <div @click="input(2)" class="num block line">
          <span class="span-num">2</span>
        </div>
        <div @click="input(3)" class="num block">
          <span class="span-num">3</span>
        </div>
      </div>
      <div class="row">
        <div @click="input(4)" class="num block">
          <span class="span-num">4</span>
        </div>
        <div @click="input(5)" class="num block line">
          <span class="span-num">5</span>
        </div>
        <div @click="input(6)" class="num block">
          <span class="span-num">6</span>
        </div>
      </div>
      <div class="row">
        <div @click="input(7)" class="num block">
          <span class="span-num">7</span>
        </div>
        <div @click="input(8)" class="num block line">
          <span class="span-num">8</span>
        </div>
        <div @click="input(9)" class="num block">
          <span class="span-num">9</span>
        </div>
      </div>
       <div class="row">
        <div class="action block">
        </div>
        <div @click="input(0)" class="num block line">
          <span class="span-num">0</span>
        </div>
        <div @click="del()" class="action block">
          <img src="./close.png" class="icon-del"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'nut-keyboard',
  props: {
    length:{
      default: 6
    },
    showError:{
      default: false
    },
    showForget:{
      default: false
    },
    marginTop:{
      default: 30
    },
    chance:{
      default:3
    }
  },
  data () {
    return {
      pwdArray: new Array(this.length),
    }
  },
  methods:{
    input(value){
      if(this.showError){
        return;
      }
      for (let index = 0; index < this.pwdArray.length; index++) {
        let element = this.pwdArray[index];
        if(element==undefined){
          this.pwdArray.splice(index,1,value);
          if(index==(this.pwdArray.length-1)){
            this.$emit('complete',this.pwdArray);
          }
          return;
        }
      }
    },
    del(){
      if(this.showError){
        return;
      }
      for (let index = this.pwdArray.length - 1; index >= 0; index--) {
        let element = this.pwdArray[index];
        if(element!=undefined){
          this.pwdArray.splice(index,1,undefined);
          return;
        }
      }
    },
    forgetHandle(){
      this.$emit('forgetClicked');
    },
    clear(){
      this.pwdArray = new Array(this.length);
    }
  }
};
</script>
<style scoped>
  .input-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .pwdBlock{
    display: flex;
    width: 50px;
    height: 50px;
    border:1px solid #e8e8e8;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
  .pwdBlock-first{
    border-left-width: 1px;
  }
  .pwdBlock-error{
    border-color: #f0384f;
  }
  .dot{
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: #333;
  }
  .input-tip{
    display: flex;
    padding-left: 38px;
    padding-right: 38px;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .span-error{
    color: #f0384f;
    font-size: 12px;
  }
  .span-forget{
    color: #3c94fe;
    font-size: 14px;
  }
  .keyboard{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .row{
    display: flex;
    flex-direction: row;
    border-top:1px solid #e8e8e8;
  }
  .block{
    display: flex;
    flex: 1;
    height: 60px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .block:active{
    background-color: #e8e8e8;
  }
  .num{
    background-color: #ffffff;
  }
  .action{
    background-color: #f0f0f5;
  }
  .span-num{
    font-size: 34px;
    color: #333;
  }
  .line{
    border-left: 1px solid;
    border-right: 1px solid;
    border-color: #e8e8e8;
  }
  .icon-del{
    width: 15px;
    height: 15px;
  }
</style>

