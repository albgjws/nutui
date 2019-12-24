<template>
<div>
  <div class="numberfield-input-container">
    <div class="numberfield-icon-container" v-if="showIcon">
        <span class="numberfield-icon-rmb" >￥</span>
    </div>
    <div class="numberfield-input-row">
      <input ref="input0" class="numberfield-input" type="number" v-if="!formatShow" 
      @blur="numbertBlur" @input="onInput" @focus="numberFocus" v-model="numberValue" 
      :maxlength="maxlength" :placeholder="placeholder" :autofocus="isAutoFocus" singleline="true" />

      <div v-if="formatShow">
        <span class="numberfield-input__text" @click="textFocus">{{textValue}}</span>

      </div>
      
    </div>

    <img class="numberfield-input__clear" @click="clearHandle" v-if="isClearShow" src="./close.png" />
    <slot name="action"></slot>
  </div>
</div>  
</template>

<script>
export default {
  created () {
    this.numberValue = (this.value === undefined || this.value === null) ? '' :  this.value
  },
  name: "nut-numberfield",
  props: {
    value: {
      type: [Number,String],
      default: 0
    },
    showIcon: {
      default: false
    },
    placeholder: {
      default: '请输入...'
    },
    maxlength: {
      default: 12
    }
  },
  data(){
    return {
      numberValue: '',
      formatShow: false,
      isClearShow: false,
      textValue: undefined,
      isAutoFocus: false,
    }
  },
  methods: {
    clearHandle() {
      this.numberValue = "";
      this.textValue = "0.00";
      // this.isAutoFocus = true;
    },
    numberFocus(){
      this.isClearShow = true;
    },
    /* 聚焦切换为number */
    textFocus(){
      this.formatShow = false;
      this.$nextTick(()=>{
        if(!this.formatShow){
          this.$refs.input0.focus();
        }
      })
    },
    /* 失去焦点显示为text */
    numbertBlur(){
      if(this.numberValue !== ""){
        this.textValue = this.format(this.numberValue);
      }else{
        this.textValue = "0.00";
         this.isClearShow = false;
      }
      this.formatShow = true;
      // this.isClearShow = false;
    },
    format(s){
      s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(2) + "";   
      var l = s.split(".")[0].split("").reverse(),r = s.split(".")[1];   
      var t = "";   
      for(var i = 0; i < l.length; i ++ )   {   
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
      }   
      return t.split("").reverse().join("") + "." + r;   
    },

    onInput($event) {
      this.$emit('onInput', this.numberValue, $event)
    }
  },
  watch: {
    value (val) {
      this.numberValue = val
    },
    numberValue (val) {
      if(val!== ""){
        this.isClearShow = true;
      }else{
        this.isClearShow = false;
      }
    },
    textValue (v) {
      if (v == "0.00") {
        this.isClearShow = false;
      }else{
        this.isClearShow = true;
      }
    }
  }
};
</script>

<style scoped>
  .numberfield-input-container{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 12px 0;
    border-bottom: 1px solid #e8e8e8;
  }
  .numberfield-input-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    position: relative;
    height: 36px;;
  }
  .numberfield-input__text{
    display: flex;
    width: 250px;
    height: 36px;
    align-items: center;
    font-size: 26px;
    color: #333;
  }
  .numberfield-input {
    display: flex;
    width: 250px;
    height: 36px;
    font-size: 26px;
    border: 0;
    justify-content: center;
    color: #333;
    background-color: #ffffff;
  }
  .numberfield-input__clear{
    display: flex;
    width: 16px;
    height: 16px;
    margin-left: 5px;
  }
  .numberfield-icon-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 36px;
  }
  .numberfield-icon-rmb{
    display: flex;
    width: 30px;
    background-color: #ffffff;
    font-size: 28px;
    color: #333;
  }
</style>


