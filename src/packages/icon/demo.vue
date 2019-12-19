<template>
    <div>
        <h4>所有ICON</h4>
        <table>
            <tr>
                <td><lc-icon type="top"></lc-icon><span>top</span></td>
                <td><lc-icon type="down"></lc-icon><span>down</span></td>
                <td><lc-icon type="right"></lc-icon><span>right</span></td>
                <td><lc-icon type="action"></lc-icon><span>action</span></td>
            </tr>
            <tr>
                <td><lc-icon type="more"></lc-icon><span>more</span></td>
                <td><lc-icon type="trolley"></lc-icon><span>trolley</span></td>                
                <td><lc-icon type="search"></lc-icon><span>search</span></td>
                <td><lc-icon type="tick"></lc-icon><span>tick</span></td>
            </tr>
            <tr>
                <td><lc-icon type="plus"></lc-icon><span>plus</span></td>
                <td><lc-icon type="minus"></lc-icon><span>minus</span></td>
                <td><lc-icon type="cross"></lc-icon><span>cross</span></td>
                <td><lc-icon type="circle-cross"></lc-icon><span>circle-cross</span></td>
            </tr>
        </table>
        <h4>自定义尺寸</h4>
        <table>
            <tr>
                <td><lc-icon type="more" size="40px"></lc-icon><span>more</span></td>
                <td><lc-icon type="trolley" size="40px"></lc-icon><span>trolley</span></td>
                <td><lc-icon type="search" size="40px"></lc-icon><span>search</span></td>
                <td><lc-icon type="tick" size="40px"></lc-icon><span>tick</span></td>
            </tr>
        </table>
        <h4>自定义颜色</h4>
        <table>
            <tr>
                <td><lc-icon type="more" color="#f0250f"></lc-icon><span>more</span></td>
                <td><lc-icon type="trolley" color="#f0250f"></lc-icon><span>trolley</span></td>
                <td><lc-icon type="search" color="#f0250f"></lc-icon><span>search</span></td>
                <td><lc-icon type="tick" color="#f0250f"></lc-icon><span>tick</span></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
table{
    width:100%;
    border-collapse:collapse;
    td{
        width:25%;
        text-align:center;
        vertical-align: middle;
        height:100px;
        border:1px solid #ebebeb;
        font-size:12px;
    }
    span{
        display:block;
    }
}
</style>