[TOC]

# 一、vue介绍

## 1.1 官网

* 英文官网：http://vuejs.org
* 中文官网：https://cn.vuejs.org
* `Vue2`中文官网：https://v2.cn.vuejs.org

## 1.2 `Vue`介绍

> * `Vue (读音 /vjuː/，类似于 view)` 是一套用于构建用户界面的**渐进式框架**。
> * 作者: 尤雨溪

## 1.3 `Vue`的特点

> * 遵循`MVVM`模式
>
> * 编码简洁, 体积小, 运行效率高, 适合移动/PC端开发
>
> * 它本身只关注界面, 也可以配合其它第三方库开发项目

## 1.4 `Vue`周边库

> * ` vue-cli（vue脚手架）`
>
> * `axios`
>
> * `vue-router`（路由）
>
> * `vuex`（状态管理）
>
> * `element-ui`（`UI`组件库）
>
>   ……

## 1.5 `Vue` 环境的配置

* 直接引入

  ```shell
  # 下载地址
  https://v2.cn.vuejs.org/v2/guide/installation.html
  ```

  

* `CDN` 引入

  ```html
  <!-- 开发环境版本，包含完整的警告和调试模式 -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <!-- 生产环境版本，删除了警告 -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  ```

* `NPM` 安装

  ```shell
  # 最新稳定版
  $ npm install vue
  ```

## 1-1 `JS`-`Vue`-React操作DOM

### 1-1-1 `js`操作DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>
	<div id="root">
		<input type="text">
		<div></div>
	</div>
</body>
<script>
	const inp = document.querySelector("#root input");
	const div = document.querySelector("#root div");
	let str = "我是一只小小小小鸟，怎么飞也飞不高！";
	inp.value = div.innerHTML = str;
	inp.oninput = (e)=>{
		div.innerHTML = str = e.target.value;
	}
</script>
</html>
```



### 1-1-2 React操作DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/react.development.js"></script>
	<script src="lib/react-dom.development.js"></script>
	<script src="lib/babel.min.js"></script>
</head>
<body>
<div id="root">

</div>
</body>
<script type="text/babel">
	
	const root = ReactDOM.createRoot(document.querySelector("#root"));
	const App = () => {
		const [str,setStr] = React.useState("我确定你就是那只匹着羊皮的狼！");
		return (
			<>
				<input onInput={(e)=>setStr(e.target.value)} defaultValue={str} type="text"/>
				<input onChange={(e)=>setStr(e.target.value)} value={str} type="text"/>
				<div>{str}</div>
			</>
		);
	}
	root.render(<App/>);
</script>
</html>
```



### 1-1-3 `Vue`操作DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
	<div id="root">
		<input type="text" v-model="str">
		<div>{{str}}</div>
	</div>
</body>
<script>
	const vm = new Vue({
		el:"#root",
		data:{
			str:"我现在要开始学习VUE"
		}
	})
</script>
</html>
```



# 二 `Vue` 的基本用法及模板语法

> `Vue.js` 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层` Vue` 实例的数据。所有 `Vue.js` 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。
>
> 在底层的实现上，`Vue` 将模板编译成虚拟 DOM 渲染函数。结合响应系统，`Vue` 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。

## 2-1 `Vue`实例

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<!--1- 引入核心模块，提供了构造函数Vue	-->
	<script src="lib/vue.js"></script>
</head>
<body>

</body>
<script>
	// 1- vm即是Vue实例。
	// 2- Vue构造函数接收一个配置对象。
	// 3- 配置对象中可以设置data属性（类型是一个对象）
	// 4- data对象的属性会作为vm的实例属性(记住)。
	// 5- 建议将方法放置到methods属性中（类型也是一个对象）
	// const vm = new Vue({
	// 	// 实例中的数据
	// 	data:{
	// 		a:1,
	// 		b:2,
	// 		c:{
	// 			userName:"zhangsan"
	// 		},
	// 		d:[1,2,3]
	// 	},
	// 	// 定义方法
	// 	methods:{
	// 		fn(){
	//
	// 		}
	// 	}
	// });
	// console.log(vm);
	
	
	// 关于data的特点：
	// 1- data中的属性会作为Vue实例中的属性
	// 2- data的属性值发生改变，那么Vue实例中对应的属性值也会发生改变
	// 3- Vue实例中的属性值发生改变，那么data中的属性值也会发生改变。
	const data = {
		a:1
	}
	const vm = new Vue({
		data
	});
	data.a = 100;
	vm.a = 200;
	console.log(vm.a,data.a);
</script>
</html>
```



## 2-2 `Vue`挂载

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
	<div class="root" id="root">
		<h1>{{str}}</h1>
		<h1>{{this.str}}</h1>
		<h1>{{vm.str}}</h1>
	</div>
</body>
<script>
	// 注意重点：在Vue模板中可以直接使用Vue实例中的属性或方法（不需要使用this,不需要使用this)
	// 注意重点：模块中可以使用this(不建议），说明模块所处的环境上下文中的this指向的是Vue实例。
	// 挂载（Vue实例挂载）：指定Vue实例应用的范围（元素）
	const vm = new Vue({
		// 将ID为root的元素作为Vue实例挂载的元素（挂载的元素自此可以称为Vue模板）
		// el:document.querySelector("#root"),
		
		// 将ID为root的元素作为Vue实例挂载的元素（挂载的元素自此可以称为Vue模板）
		// el:"#root",
		
		// 将class为root的元素作为Vue实例挂载的元素（ 不建议）
		// el:".root",
		
		// 将标签名字为div的元素作为Vue实例挂载的元素（ 不建议）
		// el:"div",
		
		// el:"body",// 不允许
		// el:"html",// 不允许
		data:{
			str:"我现在开始学习Vue,第一步要进行挂载",
			vm:{
				str:"vm"
			}
		}
	})
</script>
</html>
```



## 2-3 相同Vue实例挂载到不同元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
	<div>
		<h1>{{str}}</h1>
	</div>
	<div>
		<h1>{{str}}</h1>
	</div>
</body>
<script>
	// 只会将第一个家客户条件的元素作为挂载元素
	new Vue({
		el:"div",
		data:{
			str:"one"
		}
	})
</script>
</html>
```



## 2-4 不同Vue实例挂载到不同元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="one">
	<h1>{{str}}</h1>
</div>
<div id="two">
	<h1>{{str}}</h1>
</div>
</body>
<script>
	// 同一个页面，支持多个实例挂载至不同元素中。
	new Vue({
		el:"#one",
		data:{
			str:"one"
		}
	})
	new Vue({
		el:"#two",
		data:{
			str:"two"
		}
	})
</script>
</html>
```

## 2-5 模板中的插值表达式{{}}

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
	<div id="root">
		<!--将Vue实例下的属性num进行渲染-->
		<p>{{num}}</p>
		<!--将Vue实例下的属性str进行渲染-->
		<p>{{str}}</p>
		<!--将字符串进行渲染-->
		<p>{{"str"}}</p>
		<!--将数字进行渲染-->
		<p>{{1}}</p>
		<!--将Vue实例下的属性bol进行渲染-->
		<p>{{bol}}</p>
		<!--将布尔值进行渲染-->
		<p>{{false}}</p>
		<!--将Vue实例下的属性fn进行渲染-->
		<p>{{fn}}</p>
		<!--将Vue实例下的fn函数运行的结果进行渲染-->
		<p>{{fn()}}</p>
		<!--将Vue实例下的属性arr进行渲染-->
		<p>{{arr}}</p>
		<!--将Vue实例下的属性obj进行渲染-->
		<p>{{obj}}</p>
		<p>{{null}}</p>
		<p>{{undefined}}</p>
		<p>{{sex===1?"男":"女"}}</p>
		<p>{{str.split("").reverse().join("")}}</p>
		<template></template>
	</div>
</body>
<script>
	// 总结1：插值表达式支持字符串，数字，布尔，对象，数组，方法
	// 总结2：undefined,null不会进行任何输出（与React相同）
	// 总结3：数组不支持直接展开（React支持）
	// 总结4：支持输出对象（React不支持）
	// 总结5：Vue中包裹标签为<template></template>
	
	new Vue({
		el:"#root",
		data:{
			num:1,
			str:"师法魔级超",
			bol:true,
			arr:[1,2,3,4],
			sex:1,
			obj:{
				userName:"zhangsan"
			}
		},
		methods:{
			fn(){
				return this.str.split("").reverse().join("");
			}
		}
	})
</script>
</html>
```





# 三 `Vue`中的指令(重点)

极简插件：https://chrome.zzzmh.cn/#/index

> 指令 (Directives) 是带有 `v-` 前缀的特殊 attribute。指令 attribute 的值预期是**单个 JavaScript 表达式** (`v-for` 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
>
> 指令即是特殊的属性（以v-为前缀）
>
> 指令分为内置指令与自定义指令。
>
> 注意：组件是对标签的扩展，指令是对属性的扩展。

## 3-1 v-html与v-text

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
	<div id="root">
		<h3>v-text</h3>
		<p v-text="userName">{{str}}</p>
		<p v-text='userName'>{{str}}</p>
		<p v-text=userName>{{str}}</p>
		<p v-text=`userName`>{{str}}</p>
		<hr/>
		<h3>v-html</h3>
		<p v-html="userName">{{str}}</p>
		<p v-html='userName'>{{str}}</p>
		<p v-html=userName>{{str}}</p>
		<p v-html=`userName`>{{str}}</p>
		<template v-html="userName">123</template>
	</div>
</body>
<script>
	// 响应式：视图是通过数据进行驱动的（当数据发生改变，视图会根据所使用的数据的变化而变化）
	// 响应式即是视图会响应最新的数据。
	// v-text与v-html的共同特点：
	// 1- 值是一个字符串
	// 2- 该字符串会作为Vue实例的属性名，将对应的属性值在指令所在的标签中进行输出。
	// 3- 会覆盖原有数据。
	// 4- 属性值可以使用双引号，单引号
	// 5- 属性值也可以省略双引号，单引号
	// 6- 如果使用的是反引号会将包裹的值在标签中直接输出
	// 7- 无法与template结合使用。
	// v-text与v-html的区别:
	// v-text不支持HTML标签而v-html支持。
	new Vue({
		el:"#root",
		data:{
			str:"我是一个字符串",
			userName:"zhangsan"
		}
	})
	
</script>
</html>
```



## 3-2 v-if v-else-if v-else(条件渲染)

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<p>{{isShow}}</p>
	<p>{{isShow && "你好&&"}}</p>
	<p>{{isShow || "你好||"}}</p>
	<!-- 三元表达式	-->
	<p>{{sex===1?"男":"女"}}</p>
	<p>{{fn()}}</p>
	<!--多条件1-->
	<p>{{getAgeStr()}}</p>
	<!--多条件2-使用指令-->
	<p v-if="age>80">老年</p>
	<p v-else-if="age>40">中年</p>
	<p v-else-if="age>28">壮年</p>
	<p v-else-if="age>18">青年</p>
	<p v-else-if="age>12">少年</p>
	<p v-else-if="age>6">儿童</p>
	<p v-else>婴儿</p>
	<hr/>
	<template v-if="isLogin">您好，欢迎您的到来！</template>
	<template v-else>
		<input type="text" placeholder="请输入管理员账号">
		<input type="text" placeholder="请输入管理员密码">
	</template>
</div>
</body>
<script>
	// 注意1：v-if以及v-else-if的值是一个布尔值，如果成立则渲染指令所在的元素，不成立则不渲染
	// 注意2：v-else-if需要与v-if结合使用
	// 注意3：v-else=需要与v-if或v-else结合使用
	// 注意4：v-if,v-else-if,v-else指令所在的元素之间不要出现其它元素。
	
	new Vue({
		el:"#root",
		data:{
			isShow:true,
			sex:1,
			age:100,
			isLogin:true
		},
		methods:{
			fn(){
				return this.sex===1?"男":"女"
			},
			getAgeStr(){
				if(this.age>80) return "老年";
				if(this.age>40) return "中年"
				if(this.age>28) return "壮年"
				if(this.age>18) return "青年"
				if(this.age>12) return "少年"
				if(this.age>6) return "儿童"
				return "婴儿"
			}
		}
	})
</script>
</html>
```



## 3-3 v-show

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
<!--	<p v-if="isShow">v-if</p>-->
<!--	<p v-show="isShow">v-show</p>-->
<!--	<p v-show='isShow'>1</p>-->
<!--	<p v-show=isShow>2</p>-->
	<p v-show="'isShow'">3</p>
	<p v-show="''">4</p>
	<p v-show="1">5</p>
	<p v-show="0">6</p>
	<p v-show="true">7</p>
	<p v-show="false">8</p>
	<p v-show="null">9</p>
	<p v-show="undefined">10</p>
</div>
</body>
<script>
	// v-if与v-show的值都是布尔值。
	// v-if为true表示渲染元素，false表示不渲染元素
	// v-show为true表示显示元素，false表示隐藏元素（通过display:none）
	// 注意1：空字符串，0，undefined,null作为判断条件相当于false
	// 注意2：非空字符串，1作为判断条件相当于true
	new Vue({
		el:"#root",
		data:{
			// isShow:true
		}
	})
</script>
</html>
```



## 3-4 v-bind(属性渲染)-重点中的重点

### 3-4-1 基本用法

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!--未使用v-bind,直接设置属性值，而不需要使用Vue的实例属性	-->
	<img width="50" src="https://img12.360buyimg.com/pop/s590x470_jfs/t1/169453/32/37700/50662/64ae6e63Fffd824d7/f6409309d91610b1.jpg.avif" alt="">
	<hr/>
	<!-- 将Vue实例属性imgSrc的值作为src的属性值。	-->
	<img v-bind:width="imgW" v-bind:src="imgSrc" alt=""/>
	<hr/>
	<!-- 使用v-bind,直接设置属性值，而不需要使用Vue的实例属性	-->
	<img v-bind:width="300" v-bind:src="'https://img12.360buyimg.com/pop/s590x470_jfs/t1/169453/32/37700/50662/64ae6e63Fffd824d7/f6409309d91610b1.jpg.avif'" alt="">
	<hr/>
	<a href="http://www.baidu.com">百度</a>
	<hr/>
	<!-- 将字符串作为href的属性值-->
	<a v-bind:href='"http://www.baidu.com"'>{{siteName}}</a>
	<hr/>
	<!-- 将实例属性siteHref作为href的属性值	-->
	<a v-bind:href="siteHref">{{"百度3"}}</a>
	<hr/>
	<!-- 将实例属性w的值作为img的属性的名字。	-->
	<img v-bind:[w]="imgW" v-bind:[h]="imgH" v-bind:[s]="imgSrc" alt=""/>
	
	<hr/>
	<a :href="siteHref">{{"百度3"}}</a>
	<img :width="imgW" :src="imgSrc" alt="">
	<img :[w]="imgW" :[s]="imgSrc" alt="">
</div>
</body>
<script>
	// v-bind:属性名 有一个简写形式：冒号
	new Vue({
		el:"#root",
		data:{
			imgSrc:"https://img12.360buyimg.com/pop/s590x470_jfs/t1/169453/32/37700/50662/64ae6e63Fffd824d7/f6409309d91610b1.jpg.avif",
			imgW:200,
			imgH:400,
			siteName:"百度2",
			siteHref:"http://www.baidu.com",
			w:"width",
			h:"height",
			s:"src"
		}
	})
</script>
</html>
```



### 3-4-2 style特殊

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!-- 字符串	-->
	<p style="background:yellow;color:red;">1</p>
	<p :style="'background:yellow;color:red;'">2</p>
	<p :style='"background:yellow;color:red;"'>3</p>
	<p :style ="one">4</p>
	<!-- 对象	-->
	<p :style="{background:'green',color:'pink'}">5</p>
	<p :style="two">6</p>
	<!-- 数组	-->
	<p :style="[{background:'yellow'},{color:'red'}]">7</p>
	<p :style="[bg,cl]">8</p>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			one:"background:yellow;color:red;",
			two:{background:'green',color:'pink'},
			bg:{
				background:"yellow"
			},
			cl:{
				color:"red"
			}
		}
	})
</script>
</html>
```



### 3-4-3 class特殊

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<style>
		.bg{
			background:yellow;
		}
		.cl{
			color:red;
		}
	</style>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!-- 字符串	-->
	<p class="bg">1</p>
	<p class="cl">2</p>
	<p class="bg cl">3</p>
	<p :class="'bg cl'">4</p>
	<p :class="one">5</p>
	<!-- 对象：常用	-->
	<!-- class绑定的值可以是对象，对象的属性名即是样式类的名字，值是布尔。如果为true类生效，否则无效	-->
	<p :class="{bg:false,cl:true}">6</p>
	<!-- 数组	-->
	<p :class="['bg','cl']">7</p>
	
	
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			one:'bg cl'
		}
	})
	
</script>
</html>
```

## 3-5 v-on 事件

### 3-5-1 基本用法

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<h3>{{num}}</h3>
<!--	未简写：-->
	<!-- 1-语句	-->
<!--	<button v-on:click="num++">加1</button>-->
	<!-- 2-函数:当点击按钮会调用Vue实例中的函数changeNum	-->
<!--	<button v-on:click="changeNum">加2</button>-->
	<!-- 3-调用函数:函数名后加括号不会被立即调用	-->
<!--	<button v-on:click="changeNum2(3,$event)">加3</button>-->
	
	<!-- 1-语句	-->
	<button @click="num++">加1</button>
	<!-- 2-函数:当点击按钮会调用Vue实例中的函数changeNum	-->
	<button @click="changeNum">加2</button>
	<!-- 3-调用函数:函数名后加括号不会被立即调用	-->
	<button @click="changeNum2(3,$event)">加3</button>
</div>
</body>
<script>
	// 语句：如果操作语句比较简单，建议直接写语句
	// 函数：如果操作比较复杂或要在多个不同的地方调用且不需要传递参数使用函数
	// 调用函数：如果操作比较复杂或要在多个不同的地方调用且需要传递参数使用调用函数
	//         如果要传递事件对象可以通过$event
	// v-on可以简写：@
	new Vue({
		el:"#root",
		data:{
			num:0
		},
		methods:{
			changeNum(e){
				this.num+=2;
				// console.log("changeNum",this)
				// console.log(e.target.innerText)
			},
			changeNum2(num,e){
				this.num+=num;
				// console.log("changeNum2",num)
				console.log(e.target.innerText)
			}
		}
	})
</script>
</html>
```



### 3-5-2 注意事项（明天讲）

### 3-5-3 修饰符（明天讲）

## 3-6 v-model

### 3-6-1 基本用法

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!-- 单向绑定：视图不会更新数据，但数据发生改变视图会改变	-->
<!--	<input v-bind:value="str" type="text">-->
<!--	<input :value="str" type="text">-->
	
	<!-- 双向绑定：视图发生改变数据会变，数据改变视图也会改变	-->
<!--	<input @input="changeStr" :value="str" type="text">-->
<!--	<input @input="str=$event.target.value" :value="str" type="text">-->
<!--	<input @input="changeStr2($event)" :value="str" type="text">-->
	
	<!-- 可以通过v-model指令实现双向绑定	-->
	<input v-model="str" type="text">
	<!-- 注意：v-model只可以与表单元素结合使用-->
<!--	<div v-model="str"></div>-->
	<h3>{{str}}</h3>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			str:"大家好！我叫刘德华！"
		},
		methods:{
			changeStr(e){
				this.str = e.target.value;
				// console.log(e.target.value)
			},
			changeStr2(e){
				this.str = e.target.value;
			}
		}
	})
</script>
</html>
```



### 3-6-2 修饰符

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!-- 修饰符trim:去除左右空格	-->
<!--	<input v-model.trim="str" type="text">-->
<!--	<h3>青龙{{str}}白虎</h3>-->

<!-- 修饰符number:类型保持为number	-->
<!--	<input type="text" v-model.number="a">+<input type="text" v-model.number="b"> <button @click="sum=a+b">=</button>-->
<!--	<input v-model="sum" type="text">-->

<!-- 修饰符lazy:当失去焦点之后数据才会进行改变。-->
	<input v-model.lazy="str" type="text">
	<h3>{{str}}</h3>
	<h3>{{str}}</h3>
	<h3>{{str}}</h3>
	<h3>{{str}}</h3>
	<h3>{{str}}</h3>
	<h3>{{str}}</h3>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			str:"蔡徐坤",
			a:1,
			b:2,
			sum:3
		}
	})
</script>
</html>
```

## 3-7 v-for(重点)

### 3-7-1 基本用法

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!-- 1- 数组-->
<!--	<div v-for="item in arr">{{item}}</div>-->
<!--	<div v-for="(value,index) in arr">{{index}}：{{value}}</div>-->
	
	<!-- 2- 对象-->
<!--	<div v-for="item in obj">{{item}}</div>-->
<!--	<div v-for="(value,key) in obj">{{key}}:{{value}}</div>-->
	
	
	<!-- 3- 数字-->
<!--	<div v-for="item in num">{{item}}</div>-->
<!--	<div v-for="(n,i) in num">{{i}}:{{n}}</div>-->
	<!-- 4- 字符串-->
<!--	<div v-for="item in str">{{item}}</div>-->
<!--	<div v-for="(s,i) in str">{{i}}:{{s}}</div>-->
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			arr:["zhangsan","wangwu","zhaoliu","yanqi","shenba","qianjiu"],
			obj:{
				userName:"zhangsan",
				age:12
			},
			num:10,// [1,2,3,4,5,6,7,8,9,10]
			str:"我爱你中国，我亲爱的母亲，我为你流泪也为你自豪！"
		}
	})
</script>
</html>
```



### 3-7-2 key

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
<!-- 使用ID-->
<!--	<div :key="item.id" v-for="item in arr">-->
<!--		<h3>《{{item.bookName}}》</h3>-->
<!--		<p>作者：{{item.author}}</p>-->
<!--		<hr/>-->
<!--	</div>-->
	
<!-- 使用下标 -->
	<div :key="index" v-for="(item,index) in arr">
		<h3>《{{item.bookName}}》</h3>
		<p>作者：{{item.author}}</p>
		<hr/>
	</div>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			arr:[
				{
					id:1,
					bookName:"天龙八部",
					author:"金庸"
				},{
					id:2,
					bookName: "一念永恒",
					author:"耳根"
				}
			]
		}
	})
</script>
</html>
```



## 3-8 案例

### 3-8-1 乞丐版切换

### 3-8-2 加强版切换





