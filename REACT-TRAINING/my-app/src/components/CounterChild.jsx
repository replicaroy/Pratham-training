import React from 'react'

export const CounterChild = ({count}) => {
    console.log(count);
    
  return (
    <div>{count}</div>
  )
}
