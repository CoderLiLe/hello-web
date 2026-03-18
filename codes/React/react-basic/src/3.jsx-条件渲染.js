/**
 * @file 3.jsx-条件渲染.js
 * @description 前端JavaScript示例
 * @author CoderLiLe
 * @date 2026-03-18
 */

'use strict';

const isLogin = true

function App () {
  return (
    <div className="App">
      {/* 逻辑与 && */}
      {isLogin && <span>this is span</span>}
      {/* 三元运算 */}
      {isLogin ? <span>jack</span> : <span>loading...</span>}
    </div>
  )
}

export default App
