
<template>
<div class="textfiled-input-container">
  <div class="textfiled-input-row">
    <!-- type=text -->
    <input
      v-if="!type || type === 'text'"
      class="textfiled-input"
      :maxlength="maxlength"
      :autofocus="autofocus"
      type="text"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="currentValue"
      @focus="onFocus"
      @blur="onBlur"
      @return="onReturn"
      @input="onInput"
      @change="onChange"
      ref="input"/>
    <!-- type=date -->
    <input
      v-if="type === 'date'"
      class="textfiled-input"
      :maxlength="maxlength"
      :autofocus="autofocus"
      type="date"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="currentValue"
      @focus="onFocus"
      @blur="onBlur"
      @return="onReturn"
      @input="onInput"
      @change="onChange"
      ref="input"/>
    <!-- type=time -->
    <input
      v-if="type === 'time'"
      class="textfiled-input"
      :maxlength="maxlength"
      :autofocus="autofocus"
      type="time"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="currentValue"
      @focus="onFocus"
      @blur="onBlur"
      @return="onReturn"
      @input="onInput"
      @change="onChange"
      ref="input"/>
    <!-- type=number -->
    <input
      v-if="type === 'number'"
      class="textfiled-input"
      :maxlength="maxlength"
      :autofocus="autofocus"
      type="number"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="currentValue"
      @focus="onFocus"
      @blur="onBlur"
      @return="onReturn"
      @input="onInput"
      @change="onChange"
      ref="input"/>
    <!-- type=email -->
    <input
      v-if="type === 'email'"
      class="textfiled-input"
      :maxlength="maxlength"
      :autofocus="autofocus"
      type="email"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="currentValue"
      @focus="onFocus"
      @blur="onBlur"
      @return="onReturn"
      @input="onInput"
      @change="onChange"
      ref="input"/>
    <!-- type=url -->
    <input
      v-if="type === 'url'"
      class="textfiled-input"
      :maxlength="maxlength"
      :autofocus="autofocus"
      type="url"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="currentValue"
      @focus="onFocus"
      @blur="onBlur"
      @return="onReturn"
      @input="onInput"
      @change="onChange"
      ref="input"/>
    <!-- type=tel -->
    <input
      v-if="type === 'tel'"
      class="textfiled-input"
      :maxlength="maxlength"
      :autofocus="autofocus"
      type="tel"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="currentValue"
      @focus="onFocus"
      @blur="onBlur"
      @return="onReturn"
      @input="onInput"
      @change="onChange"
      ref="input"/>

      <!-- clear -->
      <img class="textfiled-input__clear" @click="clear" v-if="isClearShow" src="./close.png"/>
  </div>
</div>

</template>


<script>
export default {
  name: 'nut-textfield',
  created () {
    this.currentValue = (this.value === undefined || this.value === null) ? '' :  this.value
  },
  data(){
    return { 
      currentValue: '',
      isClearShow: false,
      isDisabled: this.disabled
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
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
    maxlength: Number
  },
  methods: {
    clear () {
      console.log("clear")
      this.currentValue = '';
      this.pwdValue = '';
    },
    focus () {
      this.$refs.input.focus()
    },
    blur () {
      this.$refs.input.blur()
    },
    onFocus ($event) {
      if(this.currentValue !== ""){
        this.isClearShow = true;
      }
      this.$emit('onFocus', this.currentValue, $event)
    },
    onBlur ($event) {
      // this.isClearShow = false;
      this.$emit('onBlur', this.currentValue, $event)
    },
    //weex不支持keyup事件
    onReturn ($event) {
      if ($event.key === 'Enter') {
        $event.target.blur()
        this.$emit('onEnter', this.currentValue, $event)
      }
    },
    onInput($event) {
      this.$emit('onInput', this.currentValue, $event)
    },
    onChange($event) {
      this.$emit('onChange', this.currentValue, $event)
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
    outline: none;
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
    height: 24px;
    font-size: 15px;
    color: #666;
    border: 0;
    flex: 1;
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
    border-left: 1px solid #e8e8e8;
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
