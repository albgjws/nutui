<!-- CopyRight (C) 2017-2022 Hundsun Holding Limited. -->
<!-- Created by asiaChan on 17/12/15. -->

<template>

    <div class="lc-textarea__wrap">
        <div class="lc-textarea-label" v-if="label" :style="labelStyles">{{label}}</div>
        <div class="lc-textarea__box">
          <textarea
              class="lc-textarea__inner"
              :autofocus="autofocus"
              :placeholder="placeholder"
              :name="name"
              :rows="rows"
              v-model="currentValue"
              @focus="$emit('onFocus')"
              @blur="$emit('onBlur')"
              @change="$emit('onChange')"
              @input="$emit('onInput')"
              :maxlength="max"
              ref="textarea">
          </textarea>
          <span v-if="showCounter && max && max>0" @click="focus" class="lc-textarea-counter">{{count}}/{{max}}</span>
        </div>
        
    </div>

</template>

<script>
 
  export default {
    name:"lc-textarea",
    data () {
        return {
            currentValue: ''
        }
    },
    props: {
        label: String,
        showCounter: {
            type: Boolean,
            default: true
        },
        max: Number,
        value: String,
        name: String,
        placeholder: String,
        autofocus: {
            type: Boolean,
            default: false
        },
        rows: {
            type: Number,
            default: 3
        },
        hasTopBorder: {
            type: Boolean,
            default: true
        },
        hasBottomBorder: {
            type: Boolean,
            default: true
        },
        // cellStyle: {
        //     type: Object,
        //     default: {alignItems:'flex-start'}
        // },
        // titleStyle: {
        //     type: Object,
        //     default: {marginRight:'0'}
        // },
        cellStyle: Object,
        titleStyle: Object,
        labelWidth: String,
        labelAlign: String,
        labelColor: {
            type: String,
            default: '#4A4A4A'
        }
    },
    computed: {
        count () {
            let len = 0
            if (this.currentValue) {
                len = this.currentValue.replace(/\n/g, 'aa').length
            }
            return len > this.max ? this.max : len
        },
        labelStyles () {
            return {
                width: this.labelWidth || '',
                textAlign: this.labelAlign || 'left',
                color: this.labelColor
            }
        },
        newCellStyle() {  
            const { cellStyle } = this;         
            return { ...cellStyle, alignItems:'flex-start' };
        },
        newTitleStyle() {
            const { titleStyle } = this;
            return { ...titleStyle, marginRight: '0' };
        }
    },
    methods: {
        focus () {
            this.$refs.textarea.focus()
        }
    },
    created () {
        this.currentValue = this.value;
    },
    watch:{
        value (val) {
            this.currentValue = val
        },
        currentValue (newVal) {
            if (this.max && newVal && newVal.length > this.max) {
                this.currentValue = newVal.slice(0, this.max)
            }
            this.$emit('input', newVal);

        }
    }
}
</script>
<style scoped>
.lc-textarea__wrap{
    display: flex;
    box-sizing: border-box;
    flex: 1;
    padding: 10px;
    border-top: 1px solid #d7d7d7;
    border-bottom: 1px solid #d7d7d7;
}
.lc-textarea-label{
    margin-right: 20px; 
    font-size: 17px;
    color: #4A4A4A;
    line-height: 17px;
}
.lc-textarea__box{
    display: flex;
    flex-direction: column;
    flex: 1;
}
.lc-textarea__inner {
    flex:1;
    outline: none;
    border: 0;
    resize: none;
    font-size: 15px;
    color: #4A4A4A;
    line-height: 15px;
}

.lc-textarea-counter {   
    text-align: right;
    font-size: 12px; 
    color: #9B9B9B;
}

</style>
