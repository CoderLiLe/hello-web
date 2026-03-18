/**
 * @file 16.useEffect-概念理解和基础使用.js
 * @description 前端JavaScript示例
 * @author CoderLiLe
 * @date 2026-03-18
 */

'use strict';

import { useEffect, useState } from "react"

const URL = 'http://geek.itheima.net/v1_0/channels'

function App () {
  // 创建一个状态数据
  const [list, setList] = useState([])
  useEffect(() => {
    // 额外的操作 获取频道列表
    async function getList () {
      const res = await fetch(URL)
      const jsonRes = await res.json()
      console.log(jsonRes)
      setList(jsonRes.data.channels)
    }
    getList()
  }, [])
  return (
    <div>
      this is app
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default App
