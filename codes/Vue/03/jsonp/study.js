// let my = "zhangpeiyue";
// let obj = {};
// obj.my = 1;// 增加属性名为my,值为1的属性
// obj["my"] = 2;// 增加属性名为my,值为2的属性
// obj[my] = 3;// // 增加属性名为zhangpeiyue,值为3的属性
// console.log(obj);// {my:2,zhangpeiyue:3}

// 1- 回调函数
// function fn(cb){
// 	setTimeout(()=>{
// 		cb(100)
// 	})
// }
// fn(function(num){
// 	console.log(num)
// })

// 2- promise
function fn(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(100);
		},1000)
	})
	
}
fn().then(value=>{
	console.log(1111,value);
})