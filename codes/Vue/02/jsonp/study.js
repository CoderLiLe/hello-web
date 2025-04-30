// console.log("zhang"+Math.random().toString(36).slice(2))
// const obj = {a:1,b:2,c:3};
// // const c = 100;
// const {a,b,c:suibian} = obj;
// console.log(a,b,suibian,c);


const obj = {a:1,b:2,c:{userName:"zhangsan",age:12}}
const {a,b,c:{userName,age}} = obj;
console.log(a,b,userName,age);