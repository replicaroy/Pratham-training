import { useCallback } from 'react'
import { useState } from 'react'
import CallbackButton from './CallbackButton'


const CallbackHome = () => {
    const [count, setCount] = useState(0)
    
const handleClick = useCallback(() => {
  console.log('clicked')
}, [])

  return (
    <div>
        <button onClick={()=> setCount(count + 1)} >Incerement Count</button>
        {count}
        <CallbackButton onClickFn={handleClick}/>
    </div>
  )
}

export default CallbackHome