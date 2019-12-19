<template>
    <div>
        <lc-title title="标签墙"></lc-title>
        <category title="基本态"></category>
        <lc-tag-wall title="基本态"
                    :list="tagData"
                    @lcTagWallSelected="onSelect"
                    @lcTagWallRightBtnClicked="rightClicked" />
        <category title="修改右边按钮"></category>
        <lc-tag-wall title="修改右边按钮"
                    :list="tagData"
                    @lcTagWallSelected="onSelect"
                    right-text="查看更多"
                    right-color="#FC5B23"
                    @lcTagWallRightBtnClicked="rightClicked" />
        <category title="自定义样式"></category>
        <lc-tag-wall title="自定义样式"
                    :list="tagData2"
                    @lcTagWallSelected="onSelect"
                    :custom-styles="customStyle"
                    @lcTagWallRightBtnClicked="rightClicked"></lc-tag-wall>

    </div>
</template>

<script>
  import LcTitle from '../../packages/_mods/title.vue';
  import Category from '../../packages/_mods/category.vue';
  export default {
    components: { LcTitle, Category },    
    data: () => ({
        tagData: [{
                title: '微信',
                color: '#3BC06B'
            }, {
                title: '摩拜单车',
                color: '#FC5B23'
            }, {
                title: '小睡眠'
            }, {
                title: '音乐'
            }, {
                title: '购物'
            }, {
                title: '时间管理'
            }, {
                title: '换机助手'
            }, {
                title: 'Flyme Design'
            }, {
                title: 'Creator'
        }],
        tagData2: [{
                title: '微信',
                backgroundColor: '#3BC06B'
            }, {
                title: '摩拜单车',
                backgroundColor: '#FC5B23'
            }, {
                title: '小睡眠'
            }, {
                title: '音乐'
            }, {
                title: '购物'
            }, {
                title: '时间管理'
            }, {
                title: '换机助手'
            }, {
                title: 'Flyme Design'
            }, {
                title: 'Creator'
        }],
        customStyle: {
            padding: 21,
            borderRadius: 50,
            borderWidth: 0,
            originBackgroundColor: 'rgba(0, 0, 0, 0.2)',
            originTitleColor: '#FFFFFF'
        }
    }),
    methods: {
        onSelect (e) {
            this.$toast.text(`选中了 ${e.title}，选中的是第 ${e.index} 个`);
        },
        rightClicked (e) {
            this.$toast.text(`点击了右边按钮`);
        }
    }
  };
</script>
<style scoped>
</style>