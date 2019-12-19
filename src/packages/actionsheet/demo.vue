<template>
    <div class="demo-list">
        <h4>基本用法(选择类)</h4>
        <div>
            <lc-cell :showIcon="true" :isLink="true" @click.native="switchActionSheet('isVisible')">
                <span slot="title"><label>性别</label></span>
                <div slot="desc" class="selected-option">{{sex}}</div>
            </lc-cell>
            <lc-cell :showIcon="true" :isLink="true" @click.native="switchActionSheet('isVisible1')">
                <span slot="title"><label>年龄</label></span>
                <span slot="sub-title">带取消按钮~~~~</span>
                <div slot="desc" class="selected-option">{{agespec}}</div>
            </lc-cell>
            <lc-cell :showIcon="true" :isLink="true" @click.native="switchActionSheet('isVisible2')">
                <span slot="title"><label>年龄</label></span>
                <span slot="sub-title">高亮选中项~~~~</span>
                <div slot="desc" class="selected-option">{{age}}</div>
            </lc-cell>
            <lc-cell :showIcon="true" :isLink="true" @click.native="switchActionSheet('isVisible3')">
                <span slot="title"><label>星座</label></span>
                <span slot="sub-title">设置列表项展示使用参数~~~~</span>
                <div slot="desc" class="selected-option">{{constellation}}</div>
            </lc-cell>
        </div>
        <h4>提示类</h4>
        <div>
            <lc-cell  :isLink="true" @click.native="switchActionSheet('isVisible4')">
                <span slot="title"><label>我就列表测试数据</label></span>
                <span slot="sub-title">我是描述~~~~</span>
                <div slot="desc" class="selected-option">删除本条</div>
            </lc-cell>
        </div>
        <h4>自定义类</h4>
        <div>
            <lc-cell :isLink="true" @click.native="switchActionSheet('isVisible5')">
                <span slot="title"><label>内容自定义</label></span>
                <div slot="desc" class="selected-option">打开</div>
            </lc-cell>
        </div>
        <!-- demo -->
        <lc-actionsheet :is-visible="isVisible" 
            @close="switchActionSheet('isVisible')"
            :menu-items="menuItems"
            @choose="chooseItem"
        ></lc-actionsheet>
        <!-- demo(带取消按钮） -->
        <lc-actionsheet :is-visible="isVisible1" 
            @close="switchActionSheet('isVisible1')"
            cancelTxt="取消"
            :menu-items="menuItems2"
            @choose="chooseItemAgeSpec"
        ></lc-actionsheet>
        <!-- demo(高亮选中）-->
        <lc-actionsheet :is-visible="isVisible2" 
            :menu-items="menuItems2"
            :chooseTagValue="age"
            @close="switchActionSheet('isVisible2')"
            @choose="chooseItemAge"
        ></lc-actionsheet>
        <!-- demo(设置列表项展示使用参数）-->
        <lc-actionsheet :is-visible="isVisible3" 
            :menu-items="menuItems3"
            :optionTag="`title`"
            @close="switchActionSheet('isVisible3')"
            @choose="chooseItemConstellation"
        ></lc-actionsheet>
        <!-- demo 提示类 -->
        <lc-actionsheet :is-visible="isVisible4" 
            :menu-items="menuItems4" 
            :chooseTagValue="`确定`"
            cancelTxt="取消"
            @close="switchActionSheet('isVisible4')"
        >
            <span slot="title"><label>确定删除吗？</label></span>
            <span slot="sub-title">删除之后不能，描述信息，删除之后不能，描述信息</span>
        </lc-actionsheet>
        <!-- demo 自定义类 -->
        <lc-actionsheet :is-visible="isVisible5" 
            @close="switchActionSheet('isVisible5')"
        >
            <div slot="custom" class="custom-wrap"><span>自定义</span></div>
        </lc-actionsheet>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sex: '请选择',
            agespec: '请选择',
            isVisible: false,
            isVisible1: false,
            menuItems: [
                {
                    'name': '男',
                    'value': 0
                },
                {
                    'name': '女',
                    'value': 1
                }
            ],
            age: '请选择',
            isVisible2: false,
            menuItems2: [
                {
                    'name': '20岁以下',
                    'value': 0
                },
                {
                    'name': '20~40岁',
                    'value': 1
                },
                {
                    'name': '40~60岁',
                    'value': 2
                },
                {
                    'name': '60以上',
                    'value': 3
                }
            ],
            constellation: '请选择',
            isVisible3: false,
            menuItems3: [
                {
                    'title': '天蝎座',
                    'value': 0
                },
                {
                    'title': '巨蟹座',
                    'value': 1
                },
                {
                    'title': '双鱼座',
                    'value': 2
                },
                {
                    'title': '水瓶座',
                    'value': 3
                }
            ],
            isVisible4: false,
            menuItems4: [
                {
                    'name': '确定'
                } 
            ],
            isVisible5: false,
        };
    },
    methods: {
        switchActionSheet(param) {
            this[`${param}`] = !this[`${param}`];
        },

        chooseItem(itemParams) {
            this.sex = itemParams.name;
        },

        chooseItemAgeSpec(itemParams) {
            this.agespec = itemParams.name;
        },

        chooseItemAge(itemParams) {
            this.age = itemParams.name;
        },

        chooseItemConstellation(itemParams) {
            this.constellation = itemParams.title;
        }
    }
};
</script>

<style lang="scss" scoped>
.custom-wrap{
    padding: 110px 0;
    text-align: center;
}
</style>
