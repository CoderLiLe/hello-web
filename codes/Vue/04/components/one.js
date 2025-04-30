// export const a = 1;
// export const b = 2;
// export default {
// 	c:900
// }


const React = {
	useState:function(){
		console.log("useState")
	},
	useEffect:function(){
		console.log("useEffect")
	}
}
// export const useState = React.useState;
// export const useEffect = React.useEffect;
// export default React;

// export const {useState,useEffect} = React;
// export default React;


const {useState,useEffect} = React;
export {
	React as default,
	useState,
	useEffect
}