
- [1 CSS 的基本语法](#1-css-的基本语法)
  - [1.1 HTML 和 CSS 的关系](#11-html-和-css-的关系)
  - [1.2 HTML 元素树（元素和元素之间的关系）](#12-html-元素树元素和元素之间的关系)
  - [1.3 在 HTML 中使用 CSS](#13-在-html-中使用-css)
    - [① 行内式](#-行内式)
    - [② 内嵌式](#-内嵌式)
    - [③ 外链式](#-外链式)
  - [1.4 CSS 基本语法结构](#14-css-基本语法结构)
    - [① 内嵌式和外链式的语法结构](#-内嵌式和外链式的语法结构)
    - [② 行内式的语法结构](#-行内式的语法结构)
    - [③ 注意区分HTML 属性 和 CSS 属性](#-注意区分html-属性-和-css-属性)
  - [1.5 CSS 的层叠性](#15-css-的层叠性)
  - [1.6 CSS 注释](#16-css-注释)
- [2 CSS 长度单位和颜色设置](#2-css-长度单位和颜色设置)
  - [2.1 CSS 中的长度单位](#21-css-中的长度单位)
  - [2.2 CSS 中的颜色设置方式](#22-css-中的颜色设置方式)
    - [① 使用颜色名表示颜色](#-使用颜色名表示颜色)
    - [② rgb 方式表示颜色](#-rgb-方式表示颜色)
    - [③ hex 十六进制方式表示颜色](#-hex-十六进制方式表示颜色)
- [3 CSS 基本选择器](#3-css-基本选择器)
  - [3.1 四种基本选择器](#31-四种基本选择器)
    - [① 标签名（元素名）选择器](#-标签名元素名选择器)
    - [② 类名选择器](#-类名选择器)
    - [③ ID 选择器](#-id-选择器)
    - [④ 全局（通配）选择器](#-全局通配选择器)
  - [3.2 基本选择器之间的权重](#32-基本选择器之间的权重)
- [4 盒子模型（显示模式）](#4-盒子模型显示模式)
  - [4.1 元素的显示模式](#41-元素的显示模式)
    - [① 块级元素 block](#-块级元素-block)
    - [② 行内元素 inline](#-行内元素-inline)
    - [③ 行内块元素 inline-block](#-行内块元素-inline-block)
  - [4.2 HTML 元素的默认显示模式](#42-html-元素的默认显示模式)
    - [① 默认显示模式是 block 的元素：](#-默认显示模式是-block-的元素)
    - [② 默认显示模式是 inline 的元素：](#-默认显示模式是-inline-的元素)
    - [③ 默认显示模式是 inline-block 的元素：](#-默认显示模式是-inline-block-的元素)
  - [4.3 修改元素的显示模式](#43-修改元素的显示模式)
- [5 CSS 属性总结](#5-css-属性总结)
  - [5.1 字体样式](#51-字体样式)
    - [① 字体族科 font-family](#-字体族科-font-family)
    - [② 复合属性 font](#-复合属性-font)
    - [③ 子属性和复合属性的关系](#-子属性和复合属性的关系)
  - [5.2 文本颜色](#52-文本颜色)
  - [5.3 文本样式](#53-文本样式)
    - [① vertical-align](#-vertical-align)
    - [② line-height 设置行高](#-line-height-设置行高)
- [6 CSS 常用属性](#6-css-常用属性)
  - [6.1 文本样式](#61-文本样式)
    - [① vertical-align](#-vertical-align-1)
    - [② line-height 设置行高](#-line-height-设置行高-1)
  - [6.2 背景样式](#62-背景样式)
    - [① 背景颜色](#-背景颜色)
    - [① 设置背景图像的位置 background-position](#-设置背景图像的位置-background-position)
    - [② 背景图像固定 background-attachment](#-背景图像固定-background-attachment)
    - [③ 背景复合属性 background](#-背景复合属性-background)
  - [6.3 鼠标光标样式](#63-鼠标光标样式)
  - [6.4 列表样式](#64-列表样式)
  - [6.5 表格样式](#65-表格样式)
- [7 CSS 选择器](#7-css-选择器)
  - [7.1 基本选择器](#71-基本选择器)
    - [① ID 选择器](#-id-选择器-1)
    - [② 类选择器](#-类选择器)
    - [③ 标签名选择器](#-标签名选择器)
    - [④ 全局选择器](#-全局选择器)
  - [7.2 组合选择器](#72-组合选择器)
    - [① 后代元素选择器](#-后代元素选择器)
    - [② 子元素选择器](#-子元素选择器)
    - [③ 交集选择器](#-交集选择器)
    - [④ 并集选择器](#-并集选择器)
  - [7.3 伪类选择器](#73-伪类选择器)
  - [7.4 选择器权重（优先级）](#74-选择器权重优先级)
    - [① 单个选择器之间的权重](#-单个选择器之间的权重)
    - [② 组合选择器优先级比较规则](#-组合选择器优先级比较规则)
- [8 盒子模型 box model](#8-盒子模型-box-model)
  - [8.1 盒子模型的组成](#81-盒子模型的组成)
    - [① 盒子模型的相关概念](#-盒子模型的相关概念)
    - [② 影响盒子大小的因素](#-影响盒子大小的因素)
  - [8.2 盒子中的内容区域](#82-盒子中的内容区域)
    - [① 设置内容区域的宽高的 CSS 属性](#-设置内容区域的宽高的-css-属性)
    - [③ 元素的默认宽高](#-元素的默认宽高)
  - [8.3 盒子的内边距 padding](#83-盒子的内边距-padding)
    - [① 相关 CSS 属性](#-相关-css-属性)
    - [② padding 设置规则](#-padding-设置规则)
  - [8.4 边框 border](#84-边框-border)
  - [8.5 外边距 margin](#85-外边距-margin)
    - [① 相关 css 属性](#-相关-css-属性-1)
    - [② margin 设置规则](#-margin-设置规则)
    - [③ margin 塌陷](#-margin-塌陷)
    - [④ margin 合并](#-margin-合并)
  - [8.6 内容溢出](#86-内容溢出)
  - [8.7 隐藏元素](#87-隐藏元素)
- [9 样式继承和自带样式](#9-样式继承和自带样式)
  - [9.1 样式继承](#91-样式继承)
  - [9.2 自带样式（用户代理样式）](#92-自带样式用户代理样式)
  - [9.3 继承的样式、自带的样式、直接设置的样式](#93-继承的样式自带的样式直接设置的样式)


## 1 CSS 的基本语法

### 1.1 HTML 和 CSS 的关系

```
1. HTML 实现页面结构，CSS 实现页面样式
2. CSS 样式需要作用在 HTML 元素上
```

### 1.2 HTML 元素树（元素和元素之间的关系）

```
父元素
祖先元素
子元素
后代元素
兄弟元素		具体相同父元素的才是兄弟元素
```

### 1.3 在 HTML 中使用 CSS

#### ① 行内式

```html
<标签 style="CSS代码...;"></标签>
```

#### ② 内嵌式

```html
<style>
	CSS 代码...
</style>
```

```
style 标签放在页面的任意位置都可以生效，建议放在 head 中！
```

#### ③ 外链式

```html
<link rel="stylesheet" href="CSS文件地址">
```

```
link 标签放在页面的任意位置都可以生效，建议放在 head 中！
```

### 1.4 CSS 基本语法结构

**选择器：** 用于选择要设置样式的元素。

**声明块：** 选择器后面的大括号，声明块由多条声明组成。

**声明：** 每条声明以分号结尾，声明由CSS属性和它的值组成。

#### ① 内嵌式和外链式的语法结构

```css
选择器 {
    属性名:值;
    属性名:值;
    属性名:值;
    属性名:值;
	....
}
```

#### ② 行内式的语法结构

```html
<标签名 style="属性名:值; 属性名:值; 属性名:值; 属性名:值;..."></标签名>
```

#### ③ 注意区分HTML 属性 和 CSS 属性

```html
<!-- 使用HTML属性设置图片尺寸 -->
<img src="./images/小乐出浴图.jpg" alt="小乐出狱" width="400" height="300">

<!-- 使用CSS属性设置图片尺寸 -->
<img src="./images/小乐出浴图.jpg" alt="小乐出狱" style="width:400px;height:300px">
```

### 1.5 CSS 的层叠性

```
不同方式、不同选择器所设置的样式都会层叠在该元素上
```

### 1.6 CSS 注释

```css
/* CSS 注释 */
/* 
    CSS 注释
    CSS 注释
    CSS 注释
    CSS 注释
*/
```

## 2 CSS 长度单位和颜色设置

### 2.1 CSS 中的长度单位

```
px 像素
em 字体大小的倍数
%  百分比
```

### 2.2 CSS 中的颜色设置方式

#### ① 使用颜色名表示颜色

常见的颜色名有：

```
red、orange、yellow、green、cyan、blue、purple、pink、deeppink、skyblue、greenyellow ...
```

#### ② rgb 方式表示颜色

```css
/*
    计算机三元色
    red         0~255   0%~100%
    green       0~255   0%~100%
    blue        0~255   0%~100%
*/
background: rgb(100, 200, 120);
background: rgb(255, 0, 0);
background: rgb(255, 0, 255);

/* 三个元色 取相同的数值  灰色 */
/* 数值越大颜色越浅，全是255是白色，数值越小颜色越深，全是0是黑色 */
background: rgb(255, 255, 255);
background: rgb(0, 0, 0);
background: rgb(100, 100, 100);
background: rgb(199, 199, 199);

/* 使用百分比 */
background: rgb(45%, 80%, 74%);
```

#### ③ hex 十六进制方式表示颜色

```css
/* 十六进制 原理同rgb一样 */

/* 
 十进制：    0 1 2 3 4 5 6 7 8 9 10 11 12 13 ... 19 20 21 ... 99 100 ...
 二进制：    0 1 10 11 100 101 110 111 1000 ...
 十六进制：  0 1 2 3 4 5 6 7 8 9 a b c d e f 10 11 ... 1f 20 21 ... ff 100 ...
*/

/* 
 十进制255 = 十六进制ff
 两位十六进制的数字可以表示一种原色，六位十六进制数字能够表示三元色
*/

/* 使用6位十六进制的数字表示颜色 每两位表示一个元色 */
background: #4fa8bb;
background: #0000ff;
background: #ababab;
background: #131313;

/* 表示一种元色的两个数字是相同的，且三组元色各自都是相同， 可以简写为3位十六进制数字 */
background: #a8c;  /* #aa88cc */
background: #bbb;  /* #bbbbbb */
background: #ab2233;  /* 不可简写 */
```





## 3 CSS 基本选择器

### 3.1 四种基本选择器

#### ① 标签名（元素名）选择器

```css
标签名 {}
```

#### ② 类名选择器

```css
.类名 {}
```

```
1. 多个元素可以设置相同的类名
2. 一个元素可以设置多个类名
```

#### ③ ID 选择器

```css
#ID名 {}
```

> 元素的ID名必须是唯一的！

#### ④ 全局（通配）选择器

```css
* {}
```

### 3.2 基本选择器之间的权重

```
1. ID选择器 > 类选择器 > 标签名选择器 > 全局选择器
2. 行内式大于所有的选择器
```



## 4 盒子模型（显示模式）

### 4.1 元素的显示模式

#### ① 块级元素 block

显示模式是块级的元素称为块级元素，特点：

```
1. 在页面中是一个块，能够独占一行
2. 可以设置宽度和高度
```

#### ② 行内元素 inline

显示模式是行内的元素称为行内元素，特点：

```
1. 显示在行内，不能独占一行
2. 无法设置宽度和高度
```

#### ③ 行内块元素 inline-block

显示模式是行内块的元素称为行内块元素，特点：

```
1. 显示在行内，不能独占一行
2. 可以设置宽度和高度
```

> 按照最早的标准，行内块元素也被当做行内元素！

### 4.2 HTML 元素的默认显示模式

#### ① 默认显示模式是 block 的元素：

```
排版标签： h1~h6、p、pre、hr、div
列表标签： ul、ol、li、dl、dt、dd
表单标签： form、option
```

#### ② 默认显示模式是 inline 的元素：

```
文本标签： em、strong、del、ins、sub、sup、span
超链接标签： a
表单标签： label
```

#### ③ 默认显示模式是 inline-block 的元素：

```
图片标签： img
表单标签： input、button、textarea、select
框架标签： iframe
```

### 4.3 修改元素的显示模式

使用CSS属性 `display` 可以设置元素的显示模式，该属性的值如下：

```
inline
block
inline-block
```

```
按照最早的标准只有行内和块级，默认显示模式是行内块的元素，无法设置成真正的行内
```



## 5 CSS 属性总结

### 5.1 字体样式

| 属性名      | 作用             | 属性值                                                       |
| ----------- | ---------------- | ------------------------------------------------------------ |
| font-size   | 字体大小         | 长度                                                         |
| font-weight | 字体粗细         | normal：正常。<br>lighter：细。<br>bold：粗。<br>100~900数字：100~300是细体，400、500正常，600以及以上粗体 |
| font-style  | 斜体字           | normal：正常。<br>italic：斜体字。                           |
| font-family | 字体族科         | 字体名称、字体列表                                           |
| font        | 设置多种字体样式 | 多个值，使用空格分隔                                         |

#### ① 字体族科 font-family

**字体族科的设置：**

``` 
font-family: 字体名称；
font-family: "字体名称";  /* 如果字体名称中有空格，如 Microsoft YaHei 建议使用引号包裹*/
```

**设置字体列表：**

```css
font-family: arial, "Hiragino Sans GB", "Microsoft Yahei", 微软雅黑, 宋体, Tahoma, Arial, Helvetica, STHeiti;
font-family: "Microsoft YaHei", 微软雅黑, 宋体, sans-serif;
```

**衬线字体和非衬线字体：**

```
serif 表示衬线字体，笔画粗细不一致，如宋体、仿宋体、楷体等
sans-serif 表示非衬线字体，笔画粗细一致，如微软雅黑、黑体、Helvetica
```

#### ② 复合属性 font

```css
/* 最少两个值 字体大小 字体族科 */
font: 20px 宋体;
font: 20px "Microsoft YaHei",微软雅黑,宋体,sans-serif;

/* 粗体字 字体大小 字体族科  */
font: 800 16px "Microsoft YaHei",微软雅黑,宋体,sans-serif;

/* 斜体字 字体大小 字体族科  */
font: italic 16px "Microsoft YaHei",微软雅黑,宋体,sans-serif;

/* 又粗又斜 字体大小 字体族科  */
font: 800 italic 16px "Microsoft YaHei",微软雅黑,宋体,sans-serif;
font: italic italic 16px "Microsoft YaHei",微软雅黑,宋体,sans-serif;
```

#### ③ 子属性和复合属性的关系

```
1. 复合属性写在子属性的后面，前面的子属性全部失效，复合属性即使没写对应的值也会用默认值覆盖掉子属性
2. 子属性写在复合属性的后面，子属性会覆盖掉复合属性中与之对应的样式
```

### 5.2 文本颜色

| 属性名 | 作用         | 属性值 |
| ------ | ------------ | ------ |
| color  | 设置文字颜色 | 颜色   |

### 5.3 文本样式

| 属性名          | 作用                 | 属性值                                                       |
| --------------- | -------------------- | ------------------------------------------------------------ |
| letter-spacing  | 字间距               | 长度                                                         |
| word-spacing    | 词间距（中文无效果） | 长度                                                         |
| text-decoration | 文本修饰线           | none：无修饰线。<br>underline：下划线。<br>overline：上划线。<br>line-throuth：删除线 |
| text-indent     | 首行缩进             | 长度                                                         |
| text-align      | 文本水平对齐方式     | left：左对齐。<br>right：右对齐。<br>center：居中对齐        |
| vertical-align  | 与同行文本如何对齐   | baseline：基线对齐。<br>top：顶线对齐。<br>middle：中线对齐。<br>bottom：底线对齐。<br>sub：下标字。<br>super：上标字。<br>长度：元素底部与基线的距离 |
| line-height     |                      |                                                              |

#### ① vertical-align

```
1. 设置行内元素或行内块元素与同行文本如何对齐，如 基线对齐、顶线对齐、中线对齐、底线对齐等
2. 设置上标字和下标字
3. 设置单元格中内容的纵向对齐方式，只能用于 td、th
```

#### ② line-height 设置行高

**行高的概念：**

**使用行高实现元素中的一行文字垂直居中，满足以下条件：**

**line-height 是 font 的子属性：**



```
行高可选值：
1.normal：由浏览器根据文字大小决定的一个默认值。
2.像素（px）
3.数字：参考自身font-size的倍数（很常用。通常是1.5~2倍之间）
4.百分比：参考自身font-size的百分比。
备注：由于字体设计的原因，文字在一行中，并不是绝对垂直居中，若一行中都是文字，不会太影响观感。

注意：
1.行高过小：导致文字重叠，且最小值是0，不能为负数（负数会无效，默认为normal）。
2.行高是可以继承的。
3. 

```


## 6 CSS 常用属性

### 6.1 文本样式

| 属性名          | 作用                 | 属性值                                                       |
| --------------- | -------------------- | ------------------------------------------------------------ |
| letter-spacing  | 字间距               | 长度                                                         |
| word-spacing    | 词间距（中文无效果） | 长度                                                         |
| text-decoration | 文本修饰线           | none：无修饰线。<br>underline：下划线。<br>overline：上划线。<br>line-throuth：删除线 |
| text-indent     | 首行缩进             | 长度                                                         |
| text-align      | 文本水平对齐方式     | left：左对齐。<br>right：右对齐。<br>center：居中对齐        |
| vertical-align  | 与同行文本如何对齐   | baseline：基线对齐。<br>top：顶线对齐。<br>middle：中线对齐。<br>bottom：底线对齐。<br>sub：下标字。<br>super：上标字。<br>长度：元素底部与基线的距离 |
| line-height     | 行高                 | 长度                                                         |

#### ① vertical-align

```
1. 设置行内元素或行内块元素与同行文本如何对齐，如 基线对齐、顶线对齐、中线对齐、底线对齐等
2. 设置上标字和下标字
3. 设置单元格中内容的纵向对齐方式，只能用于 td、th
```

#### ② line-height 设置行高

**行高的概念：**

```
1. 上一行文字中线与下一行文字中线的距离称为行高
2. 上一行文字底线与下一行文字顶线的距离称为行距，调整行高大小，行距受到影响
```

> 第一行文字中线与元素顶部距离是行高一半，最后一行文字中线与元素底部距离是行高一半！

**使用行高实现元素中的一行文字垂直居中，满足以下条件：**

```
1. 只有一行文字
2. 设置行高与高度一致
```

**line-height 是 font 的子属性：**

```css
 /* 将行高写在font复合属性中 */
font: bold 14px/30px 'Microsoft YaHei';
font: bold 14px/3 'Microsoft YaHei';  /* 此时 3 表示字体大小的倍数，相当于em */
```

### 6.2 背景样式

| 属性名                | 作用                 | 属性值                                                       |
| --------------------- | -------------------- | ------------------------------------------------------------ |
| background-color      | 背景颜色             | 颜色                                                         |
| background-image      | 设置背景图像地址     | url(地址)                                                    |
| background-repeat     | 设置背景图像重复方式 | repeat：重复。<br>repeat-x：横向重复。<br>repeat-y：纵向重复。<br>no-repeat：不重复。 |
| background-position   | 设置背景图像位置     | 关键字。<br>两个长度表示的坐标。<br>百分比                   |
| background-attachment | 背景图像固定         | scroll：随元素滚动，默认值。<br>fixed：固定。                |
| background            | 背景复合属性         | 多个值使用空格分隔                                           |

#### ① 背景颜色

```
1. 元素默认背景颜色是透明,background-color的默认值是 transparent（透明）
2. 给 body 设置背景色就是给整个页面设置背景色
```

#### ① 设置背景图像的位置 background-position

**使用关键字设置属性值：**

```css
/* 
    x轴位置：left right center
    y轴位置：top bottom center
*/
/* 使用两个值 */
background-position: left top;
background-position: right bottom;
background-position: right center;
background-position: right top;
/* 使用一个值  另一个值默认center*/
background-position: left;   /* left center */
background-position: bottom; /* center bottom */
background-position: center; /* center center */
```

**通过指定坐标（用长度）设置属性值：**

```css
/* 使用坐标设置背景图像位置 */
/* 设置的是图像的左上角位置 */
/* 使用两个长度（px、em） 分别是x坐标 y 坐标 */
background-position: 0 0;
background-position: 100px 20px;
background-position: 520px 320px;
background-position: -100px 100px;
/* 只设置一个长度， 被认为是x坐标 y轴位置默认取center */
background-position: 100px;
/* 长度表示的坐标和关键字混搭 */
background-position: right -50px;
background-position: 100px bottom;
```

**使用百分比设置属性值：**

```css
/* 
    元素和图像各自创建一个坐标系
    原点在各自的左上角，x轴从左到右，y轴从上到下
    根据百分比从元素上找到坐标点，根据百分比从图像上找到坐标点，两点重合
*/
/* 两个百分比 */
background-position: 0% 0%;
background-position: 50% 50%;
background-position: 20% 10%;
background-position: 100% 100%;
/* 百分比和其他混搭 */
background-position: 100% 100px;
background-position: left 100%;
/* 值使用一个百分比 被认为x方向位置，另一个方向默认center */
background-position: 10%;
```

**background-position 的两个子属性：**

```
background-position-x   设置x位置
background-position-y   设置y位置
```

#### ② 背景图像固定 background-attachment

```
如果设置 background-attachment 为 fixed， 背景图像定位的坐标原点是视口的左上角
背景图像只能显示图像与元素位置重合的位置
```

#### ③ 背景复合属性 background

```
任何子属性的值都可以作为background的值，没有数量要去，没有顺序要求
```

### 6.3 鼠标光标样式

| 属性名 | 作用         | 属性值                              |
| ------ | ------------ | ----------------------------------- |
| cursor | 设置鼠标光标 | pointer：小手。<br>move：移动图标。 |

```css
/* 自定义鼠标光标 */
cursor: url(../images/arrow03.png),pointer;
```

### 6.4 列表样式

| 属性名              | 作用               | 属性值                                    |
| ------------------- | ------------------ | ----------------------------------------- |
| list-style-type     | 设置列表项图标     | none：无                                  |
| list-style-position | 设置列表项图标位置 | outside：在li外面。<br>inside：在li里面。 |
| list-style-image    | 自定义列表项图标   | url(图片地址)                             |
| list-style          | 复合属性           | 多个值使用空格分隔                        |

> **注意：** 只有 ul、ol、li 这些标签设置列表样式才有效果！

### 6.5 表格样式

| 属性名          | 作用                         | 属性值                               |
| --------------- | ---------------------------- | ------------------------------------ |
| table-layout    | 设置列宽固定                 | auto：默认值。<br>fixed：固定。      |
| border-spacing  | 设置单元格之间的距离         | 长度                                 |
| border-collapse | 合并单元格边框               | separate：默认值。<br>collapse：合并 |
| caption-side    | 标题位置                     | top：表格上面。<br>bottom：表格下面  |
| empty-cells     | 没有内容的单元格显示还是隐藏 | show：显示，默认值。<br>hide：隐藏   |

> **注意：** 表格相关的属性只能设置到 table 标签上才生效！



## 7 CSS 选择器

### 7.1 基本选择器

#### ① ID 选择器

```css
#ID名 {}
```

#### ② 类选择器

```css
.类名 {}
```

#### ③ 标签名选择器

```css
标签名 {}
```

#### ④ 全局选择器

```js
* {}
```

### 7.2 组合选择器

#### ① 后代元素选择器

```css
选择器1 选择器2 {}
```

#### ② 子元素选择器

```css
选择器1 > 选择器2 {}
```

#### ③ 交集选择器

```css
选择器1选择器2 {}

.item.active {}
.active.item {}
div.item {}
```

#### ④ 并集选择器

```css
选择器1, 选择器2 {}
```

### 7.3 伪类选择器

```
:link           选择未访问过的超链接
:visited        选择已访问过的超链接
:hover          鼠标悬停在元素上
:active         鼠标悬停在元素上且鼠标按键按下不抬起
```

```
多个伪类选择器一起使用，请按照 :link、:visited、:hover、:active 顺序书写 (love hate 记忆法)
```

### 7.4 选择器权重（优先级）

#### ① 单个选择器之间的权重

```
ID选择器 > 类选择器、伪类选择器 > 标签名选择器 > 全局选择器
```

#### ② 组合选择器优先级比较规则

```
1. 两个组合选择器，先比较ID的数量，数量多者权重高，比较结束
2. ID数量无法分胜负，比较类、伪类的数量，数量多者权重高，比较结束
3. 类、伪类的数量无法分胜负，比较标签名的数量，数量多者权重高， 比较结束
4. 两个选择器权重一致，后面覆盖前面
```

> **组合： ** 并集选择器的组合，各自计算各自的权重，不会放在一起计算。


## 8 盒子模型 box model

### 8.1 盒子模型的组成

#### ① 盒子模型的相关概念

```
1. 将元素比作成一个盒子
2. 页面布局就是盒子的排列和堆砌
```

**内容（content）：** 内容是元素的核心区域，元素中的文本内容和后代元素都显示在内容上。

**内边距（padding）：** 内容与元素边界的距离。

**边框（border）：** 位于元素的边界上。

**外边距（margin）：** 在元素边界之外，是与相邻元素的距离。

#### ② 影响盒子大小的因素

```
盒子的总宽度 = 内容宽度 + 左右内边距 + 左右边框
盒子的总高度 = 内容高度 + 上下内边距 + 上下边框
```

### 8.2 盒子中的内容区域

#### ① 设置内容区域的宽高的 CSS 属性

| CSS 属性名 | 功能     | 属性值 |
| ---------- | -------- | ------ |
| width      | 宽度     | 长度   |
| max-width  | 最大宽度 | 长度   |
| min-width  | 最小宽度 | 长度   |
| height     | 高度     | 长度   |
| max-height | 最大高度 | 长度   |
| min-height | 最小高度 | 长度   |

> **注意：** 最大最小宽高一般不与固定宽高一同设置！

#### ③ 元素的默认宽高

**行内元素：**

```
默认宽度被内容撑开，没有内容就没有宽度
默认高度被内容撑开，没有内容也会有一个文字的高度
```

**行内块元素：**

```
默认宽度被内容撑开，没有内容就没有宽度
默认高度被内容撑开，没有内容就没有高度
```

**块级元素：**

```
默认宽度被内容撑开，没有内容就没有高度
```

```
默认总宽度 = 父元素内容宽度 - 自身的左右外边距
默认内容宽度 = 父元素内容宽度 - 自身的左右外边距 - 自身的左右内边距 - 自身的左右边框
```

### 8.3 盒子的内边距 padding

#### ① 相关 CSS 属性

| CSS 属性名     | 功能           | 属性值           |
| -------------- | -------------- | ---------------- |
| padding-left   | 左内边距       | 长度             |
| padding-right  | 右内边距       | 长度             |
| padding-top    | 上内边距       | 长度             |
| padding-bottom | 下内边距       | 长度             |
| padding        | 上下左右内边距 | 多个长度空格分隔 |

#### ② padding 设置规则

**padding 值设置的规则：**

```
1. 不能是负值
2. 使用百分比，上下左右内边距都参照父元素内容宽度
```

**padding 复合属性的设置规则：**

```css
/* 1个值: 上下左右 */
padding: 20px;
/* 2个值： 上下 左右*/
padding: 40px 30px;
/* 3个值： 上 左右 下*/
padding: 10px 20px 30px;
/* 4个值： 上 右 下 左*/
padding: 15px 25px 35px 45px;
```

**不同显示模式的元素设置内边距：**

```
1. 块级元素、行内块元素内边距可以完美设置
2. 行内元素，左右内边距可以完美设置，上下内边距效果不完美
```

### 8.4 边框 border

| CSS 属性名                                                   | 功能                     | 属性值                                                       |
| ------------------------------------------------------------ | ------------------------ | ------------------------------------------------------------ |
| border-style                                                 | 边框风格                 | none：无风格。<br>solid：实线。<br>dashed：虚线。<br>dotted：点线。<br>double：双实线。 |
| border-color                                                 | 边框颜色                 | 颜色，默认值是文字颜色                                       |
| border-width                                                 | 边框宽度                 | 长度，默认值是3px                                            |
| border                                                       | 同时设置风格、颜色、宽度 | 多个值使用空格分隔                                           |
| border-left-style<br>border-left-color<br>border-left-width<br>border-left<br><br>border-right-style<br/>border-right-color<br/>border-right-width<br/>border-right<br><br>border-top-style<br/>border-top-color<br/>border-top-width<br/>border-top<br/><br/>border-bottom-style<br/>border-bottom-color<br/>border-bottom-width<br/>border-bottom |                          |                                                              |

```css
border的子属性有： border-style、border-color、border-width

border-left 的子属性： bordre-left-style、border-left-color、border-left-width
border-right border-top border-bottom 各种具有子属性

border-style 的子属性： border-left-style、border-right-style、border-top-style、border-bottom-style
border-color、border-width 各种具有子属性
```

### 8.5 外边距 margin

```
1. 外边距是元素与相邻兄弟元素的距离，如果没有相邻兄弟元素就是与父元素内容边界的距离
2. 左外边距和上外边距主要影响自己的位置，右外边距和下外边距主要影响相邻兄弟元素的位置
```

#### ① 相关 css 属性

| CSS 属性名    | 功能           | 属性值           |
| ------------- | -------------- | ---------------- |
| margin-left   | 左外边距       | 长度             |
| margin-right  | 右外边距       | 长度             |
| margin-top    | 上外边距       | 长度             |
| margin-bottom | 下外边距       | 长度             |
| margin        | 外边距复合属性 | 多个长度空格分隔 |

#### ② margin 设置规则

**margin 值设置的规则：**

```
1. 使用百分比，上下左右内边距都参照父元素内容宽度
2. 外边距可以是负值
3. 块级元素左右外边距都设置为 auto，该元素在父元素中横向居中
```

**margin 复合属性的设置规则：**

```
1个值： 上下左右
2个值： 上下 左右
3个置： 上 左右 下
4个值： 上 右 下 左
```

**不同显示模式的元素设置外边距：**

```
1. 块级元素、行内块元素外边距可以完美设置
2. 行内元素，只能设置左右外边距，上下外边距设置无效
```

#### ③ margin 塌陷

**什么是 margin 塌陷？**

```
1. 最上面元素的上外边距、最下面元素的下外边距会塌陷到父元素
2. 外边距塌陷只会发生在块级元素上
```

**如何解决 margin 塌陷？**

```
- 方案一： 父元素设置边框
- 方案二： 父元素设置内边距
- 方案三： 父元素开启BFC，设置 overflow:hidden;
```

#### ④ margin 合并

**什么是 margin 合并？**

```
1. 上面兄弟元素的下外边距会与下面兄弟元素的上外边距合并，两者之间距离取较大的外边距
2. 外边距合并只会发生在块级元素上
```

**如何解决 margin 合并？**

```
不用解决
```

### 8.6 内容溢出

| CSS 属性名 | 功能                      | 属性值                                                       |
| ---------- | ------------------------- | ------------------------------------------------------------ |
| overflow   | 设置溢出内容的显示方式    | visible：显示，默认值。<br>hidden：隐藏。<br>scroll：滚动条。<br>auto：自动。 |
| overflow-x | x轴方向溢出内容的显示方式 | 同上                                                         |
| overflow-y | y轴方向溢出内容的显示方式 | 同上                                                         |

**auto 和 scroll 的区别：**

```
1. scroll 不论内容是否会溢出，都有滚动条
2. auto 只有内容溢出才会显示滚动条
```

### 8.7 隐藏元素

```
1. 设置 visibility:hidden;   元素隐藏但是占据位置
2. 设置 display:none;  元素彻底隐藏，不占据位置
```



## 9 样式继承和自带样式

### 9.1 样式继承

**哪些样式可以被后代元素继承：**

```
1. 字体样式 font-size、font-weight、font-style font-family、font
2. 文字颜色 color
3. 文本样式 letter-spacing、word-spacing、text-decoration、text-indent、text-align、line-height （vertical-align 不可以被继承）
```

### 9.2 自带样式（用户代理样式）

```
标题h1~h6 自带 font-size、font-weight、上下外边距
p 自带 上下外边距
em 自带 font-style
strong 自带 font-weight
a 自带 color、text-decoration、cursor
ul、ol 自带 padding-left、上下外边距
...
```

### 9.3 继承的样式、自带的样式、直接设置的样式

```
直接设置的样式 > 自带的样式 > 继承的样式
```

