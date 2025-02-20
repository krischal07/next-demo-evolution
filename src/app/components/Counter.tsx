"use client"

import React, { useState } from 'react'

const Counter = () => {
    console.log("Counter Component")
    const [count,setCount] = useState(0)
  return (
    <div>Counter
        <button onClick={()=>setCount(count+1)}>
            {count} times
        </button>

        
    </div>
  )
}

export default Counter