/**
 * @file vue-filters.js
 * @description 前端JavaScript示例
 * @author CoderLiLe
 * @date 2026-03-18
 */

'use strict';

export default {
	date(t){
		const timer = new Date(t);
		return timer.getFullYear() + "-" +
			(timer.getMonth() + 1).toString().padStart(2, 0) + "-" +
			timer.getDate().toString().padStart(2, 0) + " " +
			timer.getHours().toString().padStart(2, 0) + ":" +
			timer.getMinutes().toString().padStart(2, 0) + ":" +
			timer.getSeconds().toString().padStart(2, 0);
	},
	currency(v,n=2,type="$"){
		return type+v.toFixed(n);
	}
}