
<template>
<div class="textfiled-input-container">
  <div class="textfiled-input-row">

    <input
      class="textfiled-input"
      :maxlength="maxlength"
      :autofocus="autofocus"
      :type="inputType"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="pwdValue"
      @focus="onPwdFocus"
      @blur="onPwdBlur"
      @return="onPwdReturn"
      @input="onPwdInput"
      @change="onPwdChange"
      :key="inputType"
      ref="input"/>
      <!-- 131269切换时数据不丢失 -->
      <!-- clear -->
      <div class="textfiled-input__clear-container" v-if="isClearShow">
        <img @click="clear" class="textfiled-input__clear" src="./close.png"/>
      </div>
  </div>
  <div class="textfiled-eye-container" @click="toggleEye">
    <img class="textfiled-icon-eye" v-if="!isPwdShow" src="./hide.png"/>
    <img class="textfiled-icon-eye" v-if="isPwdShow" src="./show.png"/>
  </div>
</div>

</template>


<script>
export default {
  name: 'nut-passwordfield',
  created () {
    this.currentValue = (this.value === undefined || this.value === null) ? '' :  this.value
  },
  data(){
    return { 
      currentValue: '',
      isClearShow: false,
      inputType: this.pwdShow?'text':'password',
      isPwdShow: this.pwdShow?true:false,
      pwdValue: '',
      isDisabled: this.disabled,
      isShow: true
    }
  },
  props: {
    value: [String, Number],
    name: String,
    placeholder: String,
    disabled: {
        type: Boolean,
        default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    maxlength: Number,
    pwdShow:{
        type: Boolean,
        default: false
    }
  },
  methods: {
    clear () {
      console.log('clear')
      this.currentValue = '';
      this.pwdValue = '';
    },
    focus () {
      this.$refs.input.focus()
    },
    blur () {
      this.$refs.input.blur()
    },
    onPwdFocus ($event) {
      this.currentValue = this.pwdValue;
      if(this.currentValue !== ""){
        this.isClearShow = true;
      }
      this.$emit('onFocus', this.currentValue, $event)
    },
    onPwdBlur ($event) {
      if(this.currentValue !== ""){
        this.isClearShow = true;
      }
      this.$emit('onBlur', this.currentValue, $event)
    },
    //weex不支持keyup事件
    onPwdReturn ($event) {
      this.currentValue = this.pwdValue;
      if ($event.key === 'Enter') {
        $event.target.blur()
        this.$emit('onEnter', this.currentValue, $event)
      }
    },
    onPwdInput($event) {
      this.currentValue = this.pwdValue;
      this.$emit('onInput', this.currentValue, $event)
    },
    onPwdChange($event) {
      this.currentValue = this.pwdValue;
      this.$emit('onChange', this.currentValue, $event)
    },
    toggleEye(){
      if(this.isPwdShow){
        /* 关闭密码 */
        this.inputType = 'password'
        this.currentValue = this.pwdValue;
      }else{
        /* 显示密码 */
        this.inputType = 'text'
        this.pwdValue = this.currentValue;
      }
      this.isPwdShow = !this.isPwdShow;
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (newVal) {
      if (newVal !== "" && !this.isDisabled) {
        this.isClearShow = true;
      }else{
        this.isClearShow = false;
      }
      this.$emit('input', this.currentValue);
    }
  }
}
</script>

<style scoped>
  .textfiled-input-container{
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: space-between;
    height: 48px;
    padding: 12px 0;
    border-bottom: 1px solid #e8e8e8;
  }
  .textfiled-input-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }
  .textfiled-input {
    display: flex;
    outline: none;
    height: 24px;
    font-size: 15px;
    color: #666;
    border: 0;
    flex: 1;
  }
  .textfiled-input__clear-container{
    width: 20px;
    height: 20px;
  }
  .textfiled-input__clear{
    width: 16px;
    height: 16px;
    margin-left: 5px;
  }
  .textfiled-eye-container{
    display: flex;
    margin-left: 10px;
    padding: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .textfiled-icon-eye{
      width: 20px;
      height: 15px;
  }
  .textfiled-captcha-container{
    display: flex;
    width: 80px;
    padding-left: 10px;
    margin: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #919191;
  }
  .textfiled-captcha-text{
    font-size: 14px;
    color: #3c94fe;
  }
  .textfiled-captcha-count{
    font-size: 14px;
    color: #666;
  }
</style>
