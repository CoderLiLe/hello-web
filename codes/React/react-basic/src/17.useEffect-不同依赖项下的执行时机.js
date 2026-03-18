/**
 * @file 17.useEffect-不同依赖项下的执行时机.js
 * @description 前端JavaScript示例
 * @author CoderLiLe
 * @date 2026-03-18
 */

'use strict';

import { useEffect, useState } from "react"

function App () {
  // 1. 没有依赖项  初始 + 组件更新
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   console.log('副作用函数执行了')
  // })

  // 2. 传入空数组依赖  初始执行一次
  // useEffect(() => {
  //   console.log('副作用函数执行了')
  // }, [])

  // 3. 传入特定依赖项  初始 + 依赖项变化时执行
  useEffect(() => {
    console.log('副作用函数执行了')
  }, [count])

  return (
    <div>
      this is app
      <button onClick={() => setCount(count + 1)}>+{count}</button>
    </div>
  )
}

export default App
