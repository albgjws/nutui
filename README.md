# lightui 
<!-- ![npm version](https://img.shields.io/npm/v/@nutui/nutui.svg)  [![Build Status](https://api.travis-ci.org/jdf2e/nutui.svg?branch=master)](https://github.com/jdf2e/nutui/) [![Coverage Status](https://coveralls.io/repos/github/jdf2e/nutui/badge.svg?branch=master)](https://coveralls.io/github/jdf2e/nutui?branch=master) ![license](https://img.shields.io/npm/l/@nutui/nutui.svg) -->
 
lightui是一个适用于Vue H5的金融 UI 组件库。
    
## 组件效果预览

如果你想体验下所有组件的使用效果，请先[下载lightview](http://document.lightyy.com/zh-cn/docs/start/lightview-mobile.html)，安装成功后点击右上角的扫一扫按钮扫描下方的二维码体验。

![](https://dqloa7ej5.lightyy.com/images/lightui/demo2.png)

<!-- 简体中文 | [English](./README.md) -->

## 使用方法

1. 如果你想运行我们的demo，可以[点击此处下载demo](lightui.zip)，demo在线预览地址[点击查看](https://capo2n0qn.lightyy.com/index.html#/index)，内网用户可以[访问此处](https://git01.hundsun.com/light/light-demo-os/tree/master/lightui)

2. demo的运行依赖lighting工具，需要安装lighting开发工具，安装方法参考 [开发工具安装]([../../docs/start/install-lighting.html](http://document.lightyy.com/zh-cn/docs/start/install-lighting.html))

3. 环境安装好后，打开下载好的demo，解压缩，在根目录的lib目录下执行`npm install` 安装lightui控件依赖的包

4. 下载lightui模块，在源代码目录的lib目录执行：`npm install -d --save @light-module/ui-h5`

5. 全局引入组件，在app.js：
    ```
    import Vue from "vue"
    import LightUI from '@light-module/ui-h5'
    import '@light-module/ui-h5/dist/lightui.css'

    LightUI.install(Vue)

    ```

6. 回到根目录下，执行`light release -wb 3001`（端口可自定义，默认3000） ，demo可以正常的运行，效果如下图所示：

<img src="https://dqloa7ej5.lightyy.com/images/lightui/index.gif" width="240"/>