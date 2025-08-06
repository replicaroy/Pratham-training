import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'

const computeHeavyTask = (input, type) => {
    console.log('computing...', type)
    let total = 0
    for (let i = 0; i < 1e7; i++) {
        total += i * input
    }
    return total
}
function WithoutMemo({ input }) {
  const result = computeHeavyTask(input, 'without memo')
  return (
    <div>
      <p><strong>Without useMemo:</strong> {result}</p>
    </div>
  )
}

function WithMemo({ input }) {
  const result = useMemo(() => computeHeavyTask(input, 'with memo'), [input])
  return (
    <div>
      <p><strong>With useMemo:</strong> {result}</p>
    </div>
  )
}
const Usememo = () => {
    const [count, setCount] = useState(0)
      const [input, setInput] = useState(5)




  return (
   <div>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <button onClick={() => setCount(count + 1)}>Re-render</button>
        <p>Render Count: {count}</p>
        <WithoutMemo input={input} />
        <WithMemo input={input} />
      </div>
  )
}

export default Usememo