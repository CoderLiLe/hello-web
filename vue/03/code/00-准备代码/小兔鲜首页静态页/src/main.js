/**
 * @file main.js
 * @description 前端JavaScript示例
 * @author CoderLiLe
 * @date 2026-03-18
 */

'use strict';

import Vue from 'vue'
import App from './App.vue'
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式

import './styles/index.css' // 页面样式
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
