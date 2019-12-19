<template>
    <div class="lc-demo">
 
        <lc-title title="滑动菜单"></lc-title>
            
        <!-- <category title="滑动菜单"></category> -->
        <lc-slider-menu :menus="menus"  :menuStyles='menuStyles'></lc-slider-menu>

    </div>
</template>

<script>
  import LcTitle from '../../packages/_mods/title.vue';
  import Category from '../../packages/_mods/category.vue';

  export default {
        components: { LcTitle, Category },    
        data() {
            return {
                menuStyles:{
                    width:75,
                    height:50
                },
                menus: [
                    {
                    name: '菜单1',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单2',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单3',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单4',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单5',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单6',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单7',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单8',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单9',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    }
                ],
            }
        },
        methods: {
        }
    }
</script>
<style scoped>
</style>