export default function jsonp(url,config={}){
	return new Promise((resolve,reject)=>{
		let fnName = null;
		// 判断config中是否拥有jsonp属性
		if(config.jsonp){
			fnName = "zhang"+Math.random().toString(36).slice(2);
			config.params[config.jsonp] = fnName;
		}else if(config.fnName){
			fnName = config.fnName;
		}
		window[fnName] = resolve;
		// 判断config中是否拥有params属性
		if(config.params){
			url+="?"+Object.keys(config.params).map(v=>v+"="+config.params[v]).join("&");// prod=pc&wd=三国
		}
		// 创建script标签
		const script = document.createElement("script");
		// 增加script请求地址
		script.src = url;
		// 当请求地址加载完毕后执行指定函数
		script.onload = function(){
			if(fnName)
				delete window[fnName];
			// 移除script元素
			document.body.removeChild(script);
		}
		// 将script放置在body尾部
		document.body.appendChild(script);
		
	})
}