# CSS3

- [1 CSS3 基本语法](#1-css3-基本语法)
  - [1.1 CSS3 浏览器私有前缀](#11-css3-浏览器私有前缀)
  - [1.2 CSS3 新增长度单位](#12-css3-新增长度单位)
  - [1.3 CSS3 新增颜色设置方式](#13-css3-新增颜色设置方式)
    - [① rgba](#-rgba)
    - [② hsl](#-hsl)
    - [③ hsla](#-hsla)
- [2 CSS3 选择器](#2-css3-选择器)
  - [2.1 基本选择器（6个）](#21-基本选择器6个)
    - [① 标签名选择器](#-标签名选择器)
    - [② 类名选择器](#-类名选择器)
    - [③ ID 选择器](#-id-选择器)
    - [④ 全局选择器](#-全局选择器)
    - [⑤ 交集选择器（选择器的组合形式）](#-交集选择器选择器的组合形式)
    - [⑥ 并集选择器（选择器的组合形式）](#-并集选择器选择器的组合形式)
  - [2.2 层级选择器（4个）](#22-层级选择器4个)
    - [① 后代元素选择器](#-后代元素选择器)
    - [② 子元素选择器](#-子元素选择器)
    - [③ 相邻兄弟元素选择器](#-相邻兄弟元素选择器)
    - [④ 通用兄弟元素选择器](#-通用兄弟元素选择器)
  - [2.3 属性选择器（5个）](#23-属性选择器5个)
  - [2.4 伪类选择器（23个）](#24-伪类选择器23个)
    - [① 动态伪类选择器（5个）](#-动态伪类选择器5个)
    - [② 目标伪类选择器（1个）](#-目标伪类选择器1个)
    - [③ 语言伪类选择器 (1个，了解)](#-语言伪类选择器-1个了解)
    - [④ UI元素伪类选择器（3个）](#-ui元素伪类选择器3个)
    - [⑤ 结构伪类选择器（12个）](#-结构伪类选择器12个)
    - [⑥ 否定伪类选择器（1个）](#-否定伪类选择器1个)
  - [2.5 伪元素选择器（6个）](#25-伪元素选择器6个)
  - [2.6 选择器的优先级（权重）](#26-选择器的优先级权重)
- [3 CSS3 新增盒子相关样式](#3-css3-新增盒子相关样式)
  - [3.1 display 介绍](#31-display-介绍)
  - [3.2 box-sizing 属性](#32-box-sizing-属性)
  - [3.3 盒子阴影 box-shadow](#33-盒子阴影-box-shadow)
  - [3.4 不透明度 opacity](#34-不透明度-opacity)
  - [3.5 粘连定位](#35-粘连定位)
- [4 CSS3 新增背景属性](#4-css3-新增背景属性)
  - [4.1 新增属性](#41-新增属性)
    - [① background-origin](#-background-origin)
    - [② background-clip](#-background-clip)
    - [③ background-size](#-background-size)
  - [4.2 background 复合属性](#42-background-复合属性)
  - [4.3 多背景图](#43-多背景图)
- [5 CSS3 新增边框属性](#5-css3-新增边框属性)
  - [5.1 边框圆角](#51-边框圆角)
  - [5.2 外轮廓](#52-外轮廓)
- [6 CSS3 新增文本属性](#6-css3-新增文本属性)
- [7 CSS3 渐变](#7-css3-渐变)
  - [7.1 线性渐变](#71-线性渐变)
  - [7.2 径向渐变（了解）](#72-径向渐变了解)
  - [7.3 重复渐变](#73-重复渐变)
- [8 Filter 滤镜](#8-filter-滤镜)
- [9 WEB 字体](#9-web-字体)
  - [9.1 web 字体基本语法](#91-web-字体基本语法)
  - [9.2 字体图标](#92-字体图标)
    - [① 阿里图标](#-阿里图标)
    - [② font-awesome](#-font-awesome)
    - [③ 字体图标制作工具 icoMoon](#-字体图标制作工具-icomoon)
- [10 变换 transform](#10-变换-transform)
  - [10.1 变换相关 CSS 属性](#101-变换相关-css-属性)
  - [10.2 2D 变换的方法](#102-2d-变换的方法)
    - [① 位移 translate 方法](#-位移-translate-方法)
    - [② 缩放 scale 方法](#-缩放-scale-方法)
    - [③ 旋转 rotate 方法](#-旋转-rotate-方法)
  - [10.3 3D 变换的方法](#103-3d-变换的方法)
    - [① 3D 位移](#-3d-位移)
    - [② 3D 缩放](#-3d-缩放)
    - [③ 3D 旋转](#-3d-旋转)
- [11 过渡 transition](#11-过渡-transition)
  - [11.1 过渡相关 CSS 属性](#111-过渡相关-css-属性)
  - [11.2 触发过渡的条件](#112-触发过渡的条件)
- [12 动画 animation](#12-动画-animation)
  - [12.1 关键帧](#121-关键帧)
  - [12.2 动画相关 CSS 属性](#122-动画相关-css-属性)
- [13 多列布局](#13-多列布局)
  - [13.1 设置给包裹元素的 CSS 属性（共 8 个属性）](#131-设置给包裹元素的-css-属性共-8-个属性)
  - [13.2 设置给子元素的 CSS 属性（共 4 个属性）](#132-设置给子元素的-css-属性共-4-个属性)
- [14 伸缩盒布局 Flex](#14-伸缩盒布局-flex)
  - [14.1 伸缩容器和伸缩项目](#141-伸缩容器和伸缩项目)
    - [① 概念定义](#-概念定义)
    - [② 伸缩项目的特点](#-伸缩项目的特点)
  - [14.2 设置主轴方向和换行方式](#142-设置主轴方向和换行方式)
    - [① 设置主轴方向](#-设置主轴方向)
    - [② 设置换行方式](#-设置换行方式)
    - [③ 同时设置主轴方向和换行方式](#-同时设置主轴方向和换行方式)
  - [14.3 设置伸缩项目在主轴上的对齐方式](#143-设置伸缩项目在主轴上的对齐方式)
  - [14.4 设置伸缩项目在侧轴上的对齐方式](#144-设置伸缩项目在侧轴上的对齐方式)
    - [① 一条主轴线（伸缩项目在主轴上不换行）](#-一条主轴线伸缩项目在主轴上不换行)
    - [② 多条主轴线 （伸缩项目在主轴上发生换行）](#-多条主轴线-伸缩项目在主轴上发生换行)
  - [14.5 伸缩项目的伸缩性](#145-伸缩项目的伸缩性)
    - [① 伸缩项目在主轴上的长度 flex-basis](#-伸缩项目在主轴上的长度-flex-basis)
    - [② 扩展比率 flex-grow](#-扩展比率-flex-grow)
    - [③ 收缩比率 flex-shrink](#-收缩比率-flex-shrink)
    - [④ flex 复合属性](#-flex-复合属性)
  - [14.6 伸缩项目排序](#146-伸缩项目排序)
  - [14.7 单独设置伸缩项目在侧轴上的对齐方式](#147-单独设置伸缩项目在侧轴上的对齐方式)
  - [14.8 伸缩盒相关 CSS 属性总结](#148-伸缩盒相关-css-属性总结)
    - [① 设置给伸缩容器的属性](#-设置给伸缩容器的属性)
    - [② 设置给伸缩项目的属性](#-设置给伸缩项目的属性)
- [15 媒体查询和响应式布局](#15-媒体查询和响应式布局)
  - [15.1 视口 viewport](#151-视口-viewport)
    - [① 什么是视口](#-什么是视口)
    - [② 移动端视口和PC端视口](#-移动端视口和pc端视口)
    - [③ 完美视口设置](#-完美视口设置)
  - [15.2 媒体查询基本语法](#152-媒体查询基本语法)
    - [① 媒体类型](#-媒体类型)
    - [② 媒体特性](#-媒体特性)
    - [③ 运算符](#-运算符)
  - [15.3 媒体查询在 CSS 中使用](#153-媒体查询在-css-中使用)
    - [① 第一种使用方式： 媒体查询与CSS代码写在一起(推荐使用)](#-第一种使用方式-媒体查询与css代码写在一起推荐使用)
    - [② 第二种使用方式:  link 标签的 media 属性 (不推荐)](#-第二种使用方式--link-标签的-media-属性-不推荐)
  - [15.4 响应式布局](#154-响应式布局)
    - [① 阈值（断点）](#-阈值断点)
    - [② 移动优先方案（媒体查询的设置）](#-移动优先方案媒体查询的设置)
    - [③ 响应式图片](#-响应式图片)
    - [④ 响应式导航](#-响应式导航)
- [16 BFC](#16-bfc)
  - [16.1 什么是 BFC](#161-什么是-bfc)
    - [① W3C 中对 BFC 的定义](#-w3c-中对-bfc-的定义)
    - [② MDN 上对 BFC 的定义](#-mdn-上对-bfc-的定义)
    - [③ 到底什么是 BFC](#-到底什么是-bfc)
  - [16.2 创建 BFC 的方式](#162-创建-bfc-的方式)
  - [16.3 创建 BFC 可以解决的问题](#163-创建-bfc-可以解决的问题)
    - [① 清除子元素浮动的影响](#-清除子元素浮动的影响)
    - [② 解决外边距塌陷](#-解决外边距塌陷)


## 1 CSS3 基本语法

### 1.1 CSS3 浏览器私有前缀

```
-webkit-	chrome浏览器、 Safari浏览器
-moz-		Firefox
-ms-		IE
-o-			Opearn
```

### 1.2 CSS3 新增长度单位

```
rem			根元素字体大小的倍数
vw          将视口宽度分成100份，设置占多少份			
vh			将视口高度分成100份，设置占多少份			
vmax		将视口宽高中较大的一个分成100份，设置占多少份		
vmin		将视口宽高中较小的一个分成100份，设置占多少份	
```

### 1.3 CSS3 新增颜色设置方式

#### ① rgba

```
r	red
g   green
b   blue
a   opacity 不透明度，取值0~1之间的小数，值越大越不透明，0表示完全透明，1表示完全不透明
```

#### ② hsl

```
h	色相	取值0~360
s	饱和度 取值0%~100%
l	亮度 取值0%~100%
```

#### ③ hsla

```
h	色相	取值0~360
s	饱和度 取值0%~100%
l	亮度 取值0%~100%
a   opacity 不透明度，取值0~1之间的小数，值越大越不透明，0表示完全透明，1表示完全不透明
```

## 2 CSS3 选择器

### 2.1 基本选择器（6个）

#### ① 标签名选择器

```css
标签名 {}
```

#### ② 类名选择器

```css
.类名 {}
```

#### ③ ID 选择器

```css
#ID名 {}
```

#### ④ 全局选择器

```css
* {}
```

#### ⑤ 交集选择器（选择器的组合形式）

```css
选择器1选择器2 { }
```

#### ⑥ 并集选择器（选择器的组合形式）

```css
选择器1，选择器2 {}
```

### 2.2 层级选择器（4个）

#### ① 后代元素选择器

```css
选择器1 选择器2 {}
```

#### ② 子元素选择器

```css
选择器1 > 选择器2 {}
```

#### ③ 相邻兄弟元素选择器

```css
选择器1 + 选择器2 {}
```

#### ④ 通用兄弟元素选择器

```css
选择器1 ~ 选择器2 {}
```

### 2.3 属性选择器（5个）

```
[attr]			  选择包含属性名attr的元素
[attr=“val”]  	  选择属性attr的值是val的元素
[attr^="val"]     选择属性attr的值以val开头的元素
[attr$="val"]     选择属性attr的值以val结尾的元素
[attr*="val"]     选择属性attr的值包含val的元素
```

> 属性选择器如果与其他选择器进行交集组合，通常写在其他选择器的后面
>
> ```css
> img[alt] {}
> .item[title] {}
> ```

### 2.4 伪类选择器（23个）

#### ① 动态伪类选择器（5个）

```
:link
:visited
:hover
:active	
:focus		选择获取到焦点的元素
```

#### ② 目标伪类选择器（1个）

```
:target		选择到当前锚点所对应的元素
```

#### ③ 语言伪类选择器 (1个，了解)

```css
:lang(语言)
```

```
问答： :lang(zh-CN) 和 [lang="zh-CN"] 什么区别？
答案： :lang(zh-CN） 所选择到的元素中可以自己不设置 lang 属性，会继承祖先元素的语言设置
	  [lang="zh-CN"] 所选择到元素，必须元素自身设置了 lang 属性。
```

#### ④ UI元素伪类选择器（3个）

```
:enabled		可用的表单控件
:disabled		不可用的表单控件
:checked		被选中的表单控件（单选框、复选框、下拉选项）
```

#### ⑤ 结构伪类选择器（12个）

```
:frist-child			在兄弟元素中排名第一
:last-child				在兄弟元素汇总的排名最后
:nth-child(n)			在兄弟元素中排名第n个
:nth-last-child(n)		在兄弟元素中排名倒数第n个
:only-child				没有兄弟元素

:first-of-type			在同标签名的兄弟元素中排名第一
:last-of-type			在同标签名的兄弟元素中排名最后
:nth-of-type(n)			在同标签名的兄弟元素中排名第n个
:nth-last-of-type(n)	在同标签名的兄弟元素中排名倒数第n个
:only-of-type			没有同标签名的兄弟元素

:root					根元素
:empty					没有文本内容也没有后代元素
```

```css
:nth-child(odd)        奇数行
:nth-child(even)       偶数行
:nth-of-type(2n-1)	   奇数行
:nth-of-type(2n)	   偶数行
:nth-of-type(3n)	   排号是3的倍数
```

####  ⑥ 否定伪类选择器（1个）

```css
:not(选择器) 			 选择不满足括号中选择器的元素
```

### 2.5 伪元素选择器（6个）

```
::first-letter / :first-letter	选择元素中的第一个文字
::first-line / :first-line		选择元素中的第一行文字
::before / :before				给元素动态添加子元素，放在第一个位置
::after / :after				给元素动态添加子元素，放在最后一个位置
::placeholder					选择输入框、文本域中placeholder中的文字
::selction						选择被鼠标选中的文字
```

> `::before`和`::after` 选择器后面的声明块中必须设置 `content` 属性！

### 2.6 选择器的优先级（权重）

```
1. ID选择器 > 类选择器、伪类选择器、属性选择器 > 标签名选择器、伪元素选择器 > 全局选择器
2. !important > 行内式 > 任何选择器
   注意：!important 可以无限提高某个属性的权重
```

https://flukeout.github.io/



## 3 CSS3 新增盒子相关样式

### 3.1 display 介绍

display 属性拥有更多的值，可以让任何元素设置任何样式。

### 3.2 box-sizing 属性

通过该属性可以调整元素宽高的设置规则：

```
content-box		width和height设置的内容宽高，默认值
border-box		width和height设置的总宽总高，也称为怪异模式
```

### 3.3 盒子阴影 box-shadow

```css
box-shadow: x偏移 y偏移 模糊值 外延值 颜色 内阴影;
```

```css
/* 设置阴影的偏移位置 x方向 y方向 */
box-shadow: 10px 5px;

/* 设置阴影的 偏移位置 颜色 */
box-shadow: -5px 10px #ccc;
box-shadow: #099 -5px -10px;

 /* 设置阴影的模糊值 */
box-shadow: 5px 5px 10px;
/* 设置阴影的模糊值 颜色 */
box-shadow: 5px 5px 10px #ccc;
box-shadow: rgba(0,0,0,.3) 5px 5px 10px;
/* 阴影不偏移 靠模糊值向四周扩散 */
box-shadow: 0 0 15px #000;

/* 设置外延值 */
box-shadow: 3px 3px 5px 1px #080;

/* 设置内阴影 */
box-shadow: 10px 10px inset;
box-shadow: -10px 10px inset;
box-shadow: inset -10px -10px #000;

/* 多阴影 */
box-shadow: 5px 0 5px #f00,
            0 5px 5px #080,
            -5px 0 5px #088,
            0 -5px 5px #880;
```

### 3.4 不透明度 opacity

给元素设置 `opacity` 属性可以让元素整体半透明，该属性的值取 0 到 1之间的小数，数字越大越不透明，1表示完全不透明，0表示完全透明。

### 3.5 粘连定位

给元素设置 `position:sticky;` 该元素粘连定位，当页面滚动，该元素顶部触碰到视口顶部的时候，会固定定位在那个位置。


## 4 CSS3 新增背景属性

**旧标准已有的背景属性：**

```
background-color
background-image
background-repeat
background-position
background-attachment
```

### 4.1 新增属性

#### ① background-origin

该属性可以设置背景图像定位的原点，属性值如下：

```
padding-box		原点在内边距上左上角，默认值
border-box		原点在边框上左上角
content-box		原点在内容上左上角
```

#### ② background-clip

该属性可以设置背景图像的显示区域，属性值如下：

```
border-box		显示在边框以及以内，默认值
padding-box		显示在内边距以及以内
content-box		显示在内容区域
text			指显示在文本上，chrome浏览器需要私有前缀
```

#### ③ background-size 

该属性可以设置背景图像的尺寸，属性值设置规则如下：

```
1. 设置两个长度，分别表示背景图像的宽度和高度
2. 设置一个长度，表示背景图像的宽度，高度根据比例自动计算
3. 关键字 contain 表示背景图像尺寸自动适配元素，优先保证背景图像显示完整
4. 关键字 cover 表示背景图像尺寸自动适配元素，优先保证元素上铺满该背景图，可能造成背景图像显示不完整。
```

### 4.2 background 复合属性

```
1. content-box/padding-box/border-box 这样的值在复合属性中设置一个，同时设置 origin 和 clip
   这样的值如果设置了两个，第一个是 origin 第二个是 clip
2. background-size 的值必须写在 position 的后面,使用 / 分隔
```

```css
/* content-box 同时设置了 origin 和 clip */
background: url(../images/jd001.jpg) content-box;

/* origin的值是content-box， clip的值是padding-box */
background: url(../images/jd001.jpg) content-box padding-box;

/*  position 的值是 0 0， size 的值是 500px 100px */
background: url(../images/jd001.jpg) content-box padding-box 0 0/500px 100px;
```

### 4.3 多背景图

```css
background-color: #ccc;
background-image: url(../images/bg-tl.png), url(../images/bg-tr.png);
background-repeat: no-repeat;
background-position: left top, right top;

background: url(../images/bg-tl.png) no-repeat left top, 
            url(../images/bg-tr.png) no-repeat right top,
            url(../images/bg-bl.png) no-repeat left bottom,
            url(../images/bg-br.png) no-repeat right bottom,
            url(../images/bg05.jpg) center/cover;
```

> 如果位置重合，先写的背景图像会显示在上层！



## 5 CSS3 新增边框属性

### 5.1 边框圆角

| CSS 属性名                 | 含义       | 值                  |
| -------------------------- | ---------- | ------------------- |
| border-top-left-radius     | 左上角圆角 | 1~2个长度           |
| border-top-right-radius    | 右上角圆角 | 1~2个长度           |
| border-bottom-left-radius  | 左下角圆角 | 1~2个长度           |
| border-bottom-right-radius | 右下角圆角 | 1~2个长度           |
| border-radius              | 多个角圆角 | 1~4个长度/1~4个长度 |

**单个圆角属性值的设置规则：**

```
1. 设置一个长度，同时设置 x 半径和 y 半径
2. 设置两个长度，第一个是 x 半径，第二个是 y 半径
```

**复合属性的使用：**

```css
/* 每个角x半径和y半径一致 */
/* 同时设置4个角 */
border-radius: 20px;
/* 左上和右下  左下和右上 */
border-radius: 10px 100px;
/* 左上 左下和右上 右下 */
border-radius: 10px 100px 50px;
/* 左上 右上 右下 左下 */
border-radius: 10px 30px 50px 80px;
```

```css
/*每个角 x 半径 和 y 半径不一定一致 */

/* 
	/ 左边都是 x 半径，可以写 1 ~ 4 个长度， 
	/ 右边都是 y 半径，可以写 1 ~ 4 个长度， 
	两边长度的数量不要求一致，各自计算各自的。
*/

/* 分被设置 x 半径和 y 半径 */
border-radius: 100px / 10px;

/*  
	左上和右下x半径:100px; 左下和右上x半径:30px /  左上y半径:10px; 左下和右上y半径:40px; 右下y半	径:50px  
*/
/* 左上:100px 10px;  右上:30px 40px;  右下:100px 50px; 左下:30px 40px */
border-radius: 100px 30px / 10px 40px 50px;
```

### 5.2 外轮廓

| CSS 属性名     | 含义                                  | 值                 |
| -------------- | ------------------------------------- | ------------------ |
| outline-style  | 外轮廓风格                            | 同border-style     |
| outline-width  | 外轮廓宽度                            | 长度               |
| outline-color  | 外轮廓颜色                            | 颜色               |
| outline        | 复合属性                              | 多个值使用空格分隔 |
| outline-offset | 与边框的距离<br>不是 outline 的子属性 | 长度，可以是负值   |

**外轮廓与边框的区别：**

```
外轮廓不是盒子的一部分，不影响元素的尺寸和位置！
```



## 6 CSS3 新增文本属性

| CSS 属性名                | 含义                     | 值                                                           |
| ------------------------- | ------------------------ | ------------------------------------------------------------ |
| text-align-last           | 最后一行文本水平对齐方式 | start：靠文字起始方向对齐，默认自。<br>end：靠文字结束方向对齐。<br>left：靠左对齐。<br>right：靠右对齐。<br>center：居中对齐。<br>justify：两端对齐。 |
| text-decoration-line      | 文本修饰线的类型         | none：无。<br>underline：下划线。<br>overline：上划线。<br>line-throuth：删除线。 |
| text-decoration-style     | 文本修饰线风格           | solid：实线。<br>dashed：虚线。<br>dotted：点线。<br>double：双实线。<br>wavy：波浪线。 |
| text-decoration-color     | 文本修饰线颜色           | 颜色                                                         |
| text-decoration           | 文本修饰线复合属性       | 多个值使用空格分隔                                           |
| word-wrap / overflow-wrap | 是否允许单词内部断行     | normal：不允许。<br>break-wrod：允许。                       |
| white-space               | 文本显示格式             | normal：默认值。<br>pre：原格式显示。<br>pre-wrap：pre基础上+自动换行。<br>pre-line：normal基础上+识别换行符。<br>nowrap：强制显示成一行 |
| text-overflow             | 溢出文本显示省略号       | clip：默认值。<br>ellipsis：显示省略号。                     |
| text-shadow               | 文本阴影                 | 阴影偏移、模糊值、颜色                                       |

**单行长文本显示省略号：**

```
1. 强制将文字显示在一行中
2. 设置溢出部分隐藏
3. 设置溢出文本显示成省略号
```

```css
 /* 将文本强制显示到一行 */
white-space: nowrap;
/* 溢出部分隐藏 */
overflow: hidden;
/* 显示省略号 */
text-overflow: ellipsis;
```

**text-shadow 文本阴影的设置规则：**

```
可以设置阴影偏移位置、阴影模糊值和阴影颜色
```

```css
/* 阴影偏移 */
text-shadow: 3px 3px; 
/* 阴影偏移 颜色 */
text-shadow: 4px 4px #999;
text-shadow: #900 4px 4px;
/* 阴影模糊值 */
text-shadow: 3px 3px 5px;
text-shadow: 3px 3px 15px rgba(0,0,0,.5);

/* 多阴影 */
text-shadow: 1px 1px #bbb, 
            2px 2px #aaa, 
            3px 3px #999,
            4px 4px #888,
            5px 5px #777,
            6px 6px #666;
```



## 7 CSS3 渐变

渐变是一个值，要作为一个图片被使用，可以使用渐变作为值的属性有 `background-image`、`list-style-image` 等。

### 7.1 线性渐变

```
linear-gradient(渐变方向，颜色列表)
```

```
1. 渐变方向
   ① 使用关键字，如 to bottom、to left、to top bottom、to right top ...
   ② 使用角度，取值 0 ~ 360，角度单位是deg

2. 颜色列表
   每个颜色之间使用逗号分隔
   每个颜色可以指定颜色位置，如果不指定位置，多个颜色位置平均分布
```

### 7.2 径向渐变（了解）

```
radial-gradient(半径 at 圆心位置，颜色列表)
```

### 7.3 重复渐变

```
repeating-linear-gradient()    重复线性渐变
repeating-radial-gradient()	   重复径向渐变
```



## 8 Filter 滤镜

```css
filter: 滤镜函数(参数);
```

| 滤镜函数      | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| blur()        | 设置模糊，值是长度，值越大越模糊，百分比无效。               |
| brightness()  | 设置亮度，值是数字或者百分比，0全黑，1无效果，可以比1大，默认1。 |
| saturate()    | 设置饱和度，值是数字或者百分比，0完全不包含，1无效果，可以比1大，默认1。 |
| contrast()    | 设置对比度，值是0~1之间的数字或者百分比，0全灰，1无效果，可以比1大，默认1。 |
| grayscale()   | 设置灰度，使用0~1之间的数字或百分比，值越大灰度越高，0无效果，1灰度最高，默认0 |
| sepia()       | 设置深褐色度，使用0~1之间的数字或百分比，值越大深褐色度越高，0无效果，1灰度最高，默认0 |
| hue-rotate()  | 设置色相旋转，值是0~360deg之间的角度                         |
| invert()      | 设置反转，使用0~1之间的数字或百分比，0无效果，1彻底反转，默认0 |
| opacity()     | 设置不透明度，使用0~1之间的数字或百分比，0完全不透明，1彻底透明，默认0 |
| drop-shadow() | 设置阴影，需要设置偏移位置、模糊值、颜色                     |
| url()         | 使用svg设置滤镜                                              |

```
blur()				模糊
grayscale()			灰度
```



## 9 WEB 字体

### 9.1 web 字体基本语法

```css
/* 声明 web 字体 */
@font-face {
    font-family: 'diyfont';
    src: url('diyfont.eot'); /* IE9兼容模式 */
    src: url('diyfont.eot?#iefix') format('embedded-opentype'), /* IE9 - */
         url('diyfont.woff') format('woff'), /* chrome、firefox opera  safari  IE9+ 最佳格式 */
         url('diyfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+ IE9+*/
         url('diyfont.svg#fontname') format('svg'); /* iOS 4.1- */
}


/* 使用 web 字体 */
.box {
    font-family: "diyfont";
}
```

**字体格式的转换工具：**

- https://www.fontsquirrel.com/tools/webfont-generator FontSquirrel在线工具
- https://www.fontke.com/tool/fontface/ 字客网

**字体定制工具：**

- https://www.iconfont.cn/webfont?spm=a313x.7781068.0.d81ec59f2#!/webfont/index 阿里Web字体
- http://www.youziku.com/ 字体库网站
- https://www.ziti163.com/webfont/create.aspx 字体网

### 9.2 字体图标

#### ① 阿里图标

地址：  http://www.iconfont.cn/

#### ② font-awesome

地址：http://fontawesome.dashgame.com/

#### ③ 字体图标制作工具 icoMoon

地址： http://icomoon.io/app/#/select


## 10 变换 transform

### 10.1 变换相关 CSS 属性

| CSS 属性名          | 含义                             | 值                                                           |
| ------------------- | -------------------------------- | ------------------------------------------------------------ |
| transform           | 设置变换方法                     | 变换方法                                                     |
| transform-origin    | 设置变换原点                     | 使用关键字设置。<br>使用坐标设置                             |
| transform-style     | 设置子元素的空间维度             | flat：子元素在平面空间中，默认值。<br>preserve-3d：子元素在3D空间中。 |
| perspective         | 设置观察者距离（透视距离、景深） | 长度                                                         |
| perspective-origin  | 设置观察者位置                   | 使用关键字设置。<br/>使用坐标设置。                          |
| backface-visibility | 设置元素背面是否可见             | visible：可见，默认值。<br>hidden：不可见。                  |

```
注意：行内元素设置变换无效!
```

```
需要设置给变换元素本身：	transform、transform-origin、backface-visibility
需要设置给变换元素的父元素： transform-style、perspective、perspetive-origin
```

```
变换原点如果只设置一个值，另一个值默认为center。
```

### 10.2 2D 变换的方法

#### ① 位移 translate 方法

```
translateX()		x方向位移
translateY()		y方向位移
translate()			同时设置x方向和y方向位置，需要两个值，如果只有一个值表示只进行x方向位移
```

**位移的变换方法参数的设置规则：**

```
使用长度作为位移方法的参数
如果使用百分比，x方向参照元素自身宽度，y方向参照元素自身高度
```

#### ② 缩放 scale 方法

```
scaleX()			x方向缩放
scaleY()			y方向缩放
scale()				同时设置x方向和y方向的缩放，需要两个值，如果只有一个值同时设置x方向和y方向
```

**缩放的变换方法参数的设置规则：**

```
使用数字设置缩放方法的参数
```

#### ③ 旋转 rotate 方法

```
rotate()			
```

**变换方法参数的设置规则：**

```
使用角度设置旋转
```

### 10.3 3D 变换的方法

#### ① 3D 位移

```
translateZ()		z轴方向位移
translate3D()		同时设置x方向、y方向、z方向的位移，必须三个值
```

#### ② 3D 缩放

```
scaleZ()		z轴方向方法
scale3D()       同时设置x方向、y方向、z方向的缩放，必须三个值
```

```
受限于平面的屏幕，3D缩放目前没有任何效果
```

#### ③ 3D 旋转

```
rotateX()		沿着x轴旋转
rotateY()		沿着y轴旋转
rotateZ()		远着z轴旋转，等同于2d旋转 rotate()
rotate3D()		沿着多个轴一起旋转
```

```css
rotate3D()	前三个参数对应x轴、y轴、z轴是否旋转，取值0和1； 第四个参数设置旋转角度
```



## 11 过渡 transition

### 11.1 过渡相关 CSS 属性

| CSS 属性名                 | 含义                 | 值                                                           |
| -------------------------- | -------------------- | ------------------------------------------------------------ |
| transition-duration        | 过渡持续时间         | 时间单位：s、ms                                              |
| transition-delay           | 过渡延迟时间         | 时间单位：s、ms                                              |
| transition-property        | 设置哪些样式可以过渡 | all：能过渡都过渡，默认值<br>指定属性名，多个使用逗号分隔。  |
| transition-timing-function | 过渡的运动曲线       | 曲线运动、分步运动                                           |
| transition                 | 过渡复合属性         | 多个值使用空格分隔<br>一个时间表示持续时间<br>两个时间，第一个持续，第二个延迟 |

**哪些 CSS 属性可以过渡？**

```
1. 属性值是长度，如 width、height、padding、margin、border-width、background-position 等
2. 属性值是颜色，如 color、background-color、border-color 等
3. 属性值是数字，如 z-index、opacity 等
4. 变换 transform、滤镜 filter 
```

**什么时候设置过渡相关的属性 transition**

```
在样式变化之前就将过渡相关属性设置好！
```

**transition-timing-function 设置过渡运动曲线：**

```
ease			平滑运动，先加速后减速，默认值
linear			匀速运动
ease-in			加速运动
ease-out		减速运动
ease-in-out 	先加速后减速
cubic-bezier() 	贝塞尔曲线
steps()			分步运动，第一个参数必须为正整数，指定函数的步数。第二个参数取值可以是start或end，指定每			  	一步的值发生变化的时间点。第二个参数是可选的，默认值为end。 
step-start		steps(1, start)
step-end		steps(1, end)
```

**贝塞尔曲线在线工具：**

 https://cubic-bezier.com

### 11.2 触发过渡的条件

```
1. CSS 伪类选择器， :hover、:active、:focus、:checked 等
2. CSS 媒体查询
3. JavaScript 事件
```



## 12 动画 animation

### 12.1 关键帧

```css
@keyframes 关键帧名字 {
    from {}
    to {}
}

@keyframes 关键帧名字 {
    0% {}
    100% {}
}

@keyframes 关键帧名字 {
    from {}
    40%{}
    80%{}
    to {}
}

@keyframes 关键帧名字 {
    100% {}
}
```

**关键帧与元素的关系：**

```
1. 一个元素可以设置多个关键帧
2. 一个关键帧也可以设置给多个元素
```

### 12.2 动画相关 CSS 属性

| CSS 属性名                | 含义                   | 值                                                           |
| ------------------------- | ---------------------- | ------------------------------------------------------------ |
| animation-name            | 设置关键帧             | 关键字名字，多个使用逗号分隔                                 |
| animation-duration        | 动画持续时间           | 时间单位：s、ms                                              |
| animation-delay           | 动画延迟时间           | 时间单位：s、ms                                              |
| animation-timing-function | 动画运动曲线           | 曲线运动、分步运动                                           |
| animation-iteration-count | 动画执行次数           | 数字，infinite表示无限次                                     |
| animation-direction       | 动画运动方向           | normal：默认值。<br>reverse：反向。<br>alternate：交替运动。<br>alternate-reverse：反向交替。 |
| animation-play-state      | 动画运动状态           | running：正在运动。<br>paused：暂停运动                      |
| animation-fill-mode       | 动画开始前和结束后状态 | none：默认值。<br>forwards：结束后处于结束帧样式。<br>backwards：开始前处于起始帧样式。<br>both：同时设置forwards和backwards |
| animation                 | 动画复合属性           | 多个值使用空格分隔<br/>一个时间表示持续时间<br/>两个时间，第一个持续，第二个延迟 |


## 13 多列布局

### 13.1 设置给包裹元素的 CSS 属性（共 8 个属性）

| CSS 属性名        | 含义               | 值              |
| ----------------- | ------------------ | --------------- |
| column-count      | 列数               | 数字            |
| column-width      | 列宽               | 长度            |
| columns           | 同时设置列数和列宽 | 空格分隔两个值  |
| column-gap        | 列间距             | 长度            |
| column-rule-style | 列分隔线风格       | 同 border-style |
| column-rule-color | 列分隔线颜色       | 颜色            |
| column-rule-width | 列分隔线宽度       | 长度            |
| column-rule       | 列分隔线复合属性   | 空格分隔两个值  |

**column-count 和 column-width：**

```
哪个属性分出来的列数少，就按照哪一个。
```

### 13.2 设置给子元素的 CSS 属性（共 4 个属性）

| CSS 属性名                          | 含义                 | 值                                                           |
| ----------------------------------- | -------------------- | ------------------------------------------------------------ |
| column-span                         | 跨列                 | none：不跨列，默认值。<br>all：跨所有列                      |
| -webkit-column-break-before（了解） | 设置元素前面是否断列 | auto：自动，默认值。<br>always：必须断列。<br>avoid：必须不断列。 |
| -webkit-column-break-after（了解）  | 设置元素后面是否断列 | auto：自动，默认值。<br/>always：必须断列。<br/>avoid：必须不断列。 |
| -webkit-column-break-inside（了解） | 设置元素内部是否断列 | auto：自动，默认值。<br/>avoid：必须不断列。                 |



## 14 伸缩盒布局 Flex

### 14.1 伸缩容器和伸缩项目

#### ① 概念定义

**伸缩容器：**  元素设置 `display:flex`或者`display:inline-flex`，该元素就称为伸缩容器。

**伸缩项目：**  伸缩容器的**子元素**称为伸缩项目。

#### ② 伸缩项目的特点

```
1. 伸缩项目沿主轴排列（主轴默认横向），不会脱离文档流
2. 不论元素原来的显示模式是什么，变为伸缩项目之后，具有自己的显示特点：
   ① 不存在外边距的塌陷和合并，默认宽高被内容撑开
   ② 宽高内外边距都可以设置，不会被父元素当成文本
```

### 14.2 设置主轴方向和换行方式

**主轴：** 伸缩项目沿着主轴排列，主轴的默认方向是从左到右。

**侧轴：** 与主轴垂直的是侧轴。

#### ① 设置主轴方向

给伸缩容器设置CSS属性 `flex-direction` 可以修改主轴方向，该属性的值如下：

```
row				水平从左到右
row-reverse		水平从右到左
column			竖直从上到下
column-reverse	竖直从下到上
```

#### ② 设置换行方式

给伸缩容器设置CSS属性`flex-wrap` 可以修改换行方式，该属性值如下：

```
nowrap			不换行
wrap			自动换行
wrap-reverse	换行并翻转
```

#### ③ 同时设置主轴方向和换行方式

`flex-flow` 可以同时设置主轴方向和换行方式，是 `flex-direction` 和 `flex-wrap` 的复合属性。

### 14.3 设置伸缩项目在主轴上的对齐方式

给伸缩容器设置CSS属`justify-content`，可以调整伸缩项目在主轴上的对齐方式，该属性的值如下：

```
flex-start				主轴起点对齐，默认值
flex-end				主轴终点对齐
center					居中对齐
space-between			两端对齐，两端无间距
space-around			两端间距是中间间距一半
space-evenly			两端间距与中间间距相等
```

### 14.4 设置伸缩项目在侧轴上的对齐方式

#### ① 一条主轴线（伸缩项目在主轴上不换行）

给伸缩容器设置CSS属性 `align-items`， 该属性的值如下：

```
stretch		伸缩项目在侧轴方向拉伸（前提：不设置侧轴方向对应的长度）
flex-start	侧轴起点
flex-end	侧轴终点
center		居中
baseline	基线
```

#### ② 多条主轴线 （伸缩项目在主轴上发生换行）

给伸缩容器设置CSS属性 `align-content`， 该属性的值如下：

```
stretch					伸缩项目在侧轴方向拉伸,默认
flex-start				侧轴起点对齐，默认值
flex-end				侧轴终点对齐
center					居中对齐
space-between			两端对齐，两端无间距
space-around			两端间距是中间间距一半
space-evenly			两端间距与中间间距相等
```

### 14.5 伸缩项目的伸缩性

#### ① 伸缩项目在主轴上的长度 flex-basis

如果设置了 flex-basis，伸缩项目在主轴上的长度就按照 flex-basis， 与主轴方向对应的 width 或者 heihgt 将不生效。

flex-basis 的默认值是 auto，表示 flex-basis 不起作用，主轴方向的长度仍然按照 width 或者 height 的设置。

#### ② 扩展比率 flex-grow

**伸缩项目扩展的前提：**

```
1. 伸缩容器在主轴方向有富余的空间
2. 伸缩项目的扩展比率flex-grow不能是0
```

**伸缩项目扩展的规则：**

```css
			  原来的主轴长度  扩展比率    瓜分比重
.item01         100            1        1/10     100+400*1/10即100+40
.item02         200            6        6/10     100+400*6/10即200+240
.item03         300            3        3/10     100+400*3/10即300+120

富余空间： 400
分母： 1+6+3=10
```

#### ③ 收缩比率 flex-shrink

**伸缩项目收缩的前提：**

```
1. 伸缩容器在主轴上的长度不够，小于所有伸缩项目的主轴长度和
2. 不能换行
3. 伸缩项目的收缩比率不能是0，默认值是 1
```

**伸缩项目收缩的规则：**

```css
			原来的主轴长度    收缩比率    瓜分比重
.item01         100            5        500/1700     100-100*5/17
.item02         200            3        600/1700     200-100*6/17
.item03         300            2        600/1700     300-100*6/17

亏空长度： 100
分母：    100*5 + 200*3 + 300*2 = 1700 
```

#### ④ flex 复合属性

```css
flex: grow shrink basis
```

```css
flex: 1 1 0;
flex: 0 0 auto;
flex: 0 1 auto;
```

- 如果缩写为 `flex: 1` , 则其计算值为 `1 1 0%`
- 如果缩写 `flex: auto` , 则其计算值为 `1 1 auto`
- 如果`flex: none` , 则其计算值为`0 0 auto`
- 如果 `flex: 0 auto` 或者 `flex: initial` , 则其计算值为`0 1 auto`，即 flex 初始值

### 14.6 伸缩项目排序

给伸缩项目设置 `order` 属性，属性值是数字，值越大排序越靠后，可以是负值。

### 14.7 单独设置伸缩项目在侧轴上的对齐方式

给伸缩项目设置 `align-self` ，该属性的值：

```
auto： 	   按照伸缩容器 align-items 的设置,默认值
stretch		伸缩项目在侧轴方向拉伸
flex-start	侧轴起点
flex-end	侧轴终点
center		居中
baseline	基线
```

### 14.8 伸缩盒相关 CSS 属性总结

#### ① 设置给伸缩容器的属性

| CSS 属性名      | 含义                         | 值                                                           |
| --------------- | ---------------------------- | ------------------------------------------------------------ |
| display         | 设置伸缩容器                 | flex<br>inline-flex                                          |
| flex-direction  | 主轴方向                     | row<br>row-reverse<br>column<br>column-reverse               |
| flex-wrap       | 换行方式                     | nowrap<br>wrap<br>wrap-reverse                               |
| flex-flow       | 同时设置主轴方向和换行方式   |                                                              |
| justify-content | 主轴上的对齐方式             | flex-start<br>flex-end<br>center<br>space-between<br>space-around<br>space-evenly |
| align-items     | 侧轴上的对齐方式             | stretch<br>flex-start<br>flex-end<br>center<br>baseline      |
| align-content   | 侧轴上的对齐方式（发生换行） | stretch<br>flex-start<br/>flex-end<br/>center<br/>space-between<br/>space-around<br/>space-evenly |

#### ② 设置给伸缩项目的属性

| CSS 属性名  | 含义               | 值            |
| ----------- | ------------------ | ------------- |
| flex-basis  | 伸缩项目的主轴长度 | auto，长度    |
| flex-grow   | 扩展比率           | 数字，默认值0 |
| flex-shrink | 收缩比率           | 数字，默认值1 |
| flex        | 复合属性           |               |
| order       | 排序               | 数字          |
| align-self  | 单独设置侧轴对齐   |               |


## 15 媒体查询和响应式布局

### 15.1 视口 viewport

#### ① 什么是视口

```
1. 视口是浏览器的可视区域
2. 视口是根元素的包含块
```

#### ② 移动端视口和PC端视口

```
PC端视口： 视口宽度默认等于屏幕宽度，不会进行缩放
移动端视口： 默认会进行缩放，视口宽度会缩放为980px
```

#### ③ 完美视口设置

**什么是完美视口：** 

```
视口宽度等于屏幕宽度不进行缩放就是完美视口！
```

**如何设置为完美视口：**

```html
PC端浏览器视口默认就是完美视口
移动端浏览器可以在网页中设置meta元信息实现完美视口
```

```html
<meta name="viewport" contnet="width=device-width,initical-scale=1.0">
```

### 15.2 媒体查询基本语法

#### ① 媒体类型

```
all
screen
print
speech	
```

```css
@media screen {
     h1 {
         text-align: center;
     }

     body {
         background: #099;
     }
}
```

#### ② 媒体特性

```
width			视口宽度
max-width		最大视口宽度
min-width		最小视口宽度

device-width		屏幕宽度
max-device-width	最大屏幕宽度
min-device-width	最小屏幕宽度
```

```css
@media (device-width:800px) {
      body {
          background: #900;
      }
}
```

#### ③ 运算符

```
only		仅仅，用于媒体特性
not			否定，用于媒体特性
and			并且
,			或者
```

```css
@media (min-width:600px) and (max-width:800px) {
     body {
         background: #900;
     }
}

@media (max-width:400px),(min-width:1000px) {
    body {
        background: #009;
    }
}
```

### 15.3 媒体查询在 CSS 中使用

#### ① 第一种使用方式： 媒体查询与CSS代码写在一起(推荐使用)

```css
body {
    margin: 0;
    background: #333;
}

h1 {
    text-align: center;
    font-size: 4em;
    color: #fff;
}

/* 视口宽度大于等于 1000px */
@media (min-width: 1000px) {
    body {
        background: #090;
    }
}

@media (min-width: 1000px) {
    h1 {
        text-decoration: wavy underline;
    }
}
```

#### ② 第二种使用方式:  link 标签的 media 属性 (不推荐)

```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="min1000.css" media="(min-width:1000px)">
```

### 15.4 响应式布局

#### ① 阈值（断点）

**常见方案一：**

```
640px
1080px
```

**常见方案二：**

```
768px
992px
1200px
```

#### ② 移动优先方案（媒体查询的设置）

```css
.container {
    width: 100%;
    height: 200px;
    background: #900;
}

/* 小屏幕 */
@media (min-width:768px) {
    .container {
        margin-left: auto;
        margin-right: auto;
        width: 750px;
        background: #090;
    }
}

/* 中等屏幕 */
@media (min-width: 992px) {
    .container {
        width: 970px;
        background: #099;
    }
}

/* 大屏幕 */
@media (min-width: 1200px) {
    .container {
        width: 1170px;
        background: #990;
    }
}
```

#### ③ 响应式图片

**方案一： 多个图片控制隐藏显示**

```css
<!--html样式-->
.small-logo {
     display: block;
}

.middle-logo {
    display: none;
}

.large-logo {
    display: none;
}

@media (min-width: 640px) {
     .small-logo {
         display: none;
     }

     .middle-logo {
         display: block;
     }

     .large-logo {
         display: none;
     }
}

@media (min-width: 1024px) {
    .small-logo {
        display: none;
    }

    .middle-logo {
        display: none;
    }

    .large-logo {
        display: block;
    }
}
```

**方案二： 背景图**

```css
/*css样式*/
.logo {        
    background-image: url(./images/Brand-S.png);
}

@media (min-width: 640px) {
    .logo {
        background-image: url(./images/Brand-M.png);
    }
}

@media (min-width: 1024px) {
     .logo {
         background-image: url(./images/Brand-L.png);
     }
}

```

**方案三 使用 picture 标签**

```html
<!-- （html样式）哪个source先满足条件就先加载哪个图片，后面的将不再加载 -->
<picture>
    <source srcset="./images/Banner-S.png" media="(max-width:640px)">
    <source srcset="./images/Banner-M.png" media="(max-width:1024px)">
    <img src="./images/Banner-L.png" alt="">
</picture>
```

**方案四 使用 img 标签的 srcset 属性**

```html
<img srcset="./images/Banner-S.png 640w,
             ./images/Banner-M.png 1024w, 
             ./images/Banner-L.png 1440w"
     src="./images/Banner-L.png" 
     alt="">
注：图片地址后面的长度是图片的宽度，不是视口的宽度，父元素此时默认100%，与视口同宽，视口小于640时，选择小图，以此类推。  src="./images/Banner-L.png"表示默认情况下（即大于1440时），也用大图，防止用户屏幕过大。
```

#### ④ 响应式导航





## 16 BFC

### 16.1 什么是 BFC

**Block Formatting Context** 简称 **BFC**，中文翻译为 **块级格式上下文**。

#### ① W3C 中对 BFC 的定义

Floats, absolutely positioned elements, block containers (such as inline-blocks, table-cells, and table-captions) that are not block boxes, and block boxes with 'overflow' other than 'visible' (except when that value has been propagated to the viewport) establish new block formatting contexts for their contents.

> **译文：**
>
> 浮动、绝对定位元素、不是块盒子的块容器(如inline-blocks、table-cells和table-captions)，以及`overflow`属性的值除`visible`以外的块盒(除非该值已传播到视口)，将为其内容建立新的块格式化上下文。

https://www.w3.org/TR/CSS22/visuren.html#block-formatting

#### ② MDN 上对 BFC 的定义

A **block formatting context** is a part of a visual CSS rendering of a web page. It's the region in which the layout of block boxes occurs and in which floats interact with other elements.

> **译文：**
>
> **块格式化上下文（Block Formatting Context，BFC）** 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context

https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context

#### ③ 到底什么是 BFC 

首先，BFC 的意思是 **Block Formatting Context** ，即**块级格式上下文**。 然后，当元素满足了某些条件，我们认为该元素创建了 **BFC**。 创建了 BFC 的元素我们可以把他看做是一个独立的容器，容器内的元素不论如何布局都不会影响到外面。

### 16.2 创建 BFC 的方式

- 根元素。
- 浮动元素。
- 绝对定位或固定定位的元素。
- 行内块元素。
- 表格单元格（th、td）、表格行（tr）、表格标题（caption）、table、thead、tbody、tfoot。
- `overflow` 的值不为 `visible` 的块元素。
- 伸缩项目。
- 多列容器。
- `column-span` 为 `all` 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中。

### 16.3 创建 BFC 可以解决的问题

#### ① 清除子元素浮动的影响

给浮动元素的父元素创建 BFC，清除掉子元素浮动的影响。

#### ② 解决外边距塌陷

给父元素创建 BFC，第一个和最后一个子元素的外边距不会塌陷。
