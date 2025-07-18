import { useEffect, useState } from 'react'

const Mount = () => {
    const [count,setCount] = useState(0)
    const [value,setValue] = useState(0)

    const funCount = ()=> {
        setCount(count+1)       
    }
    const funDecreCount = ()=> {
        setCount(count-1)       
    }

useEffect(()=>{
if(count>5){
    setValue(55)
}
else{
    setValue(5)}
},[count])

  return (
    <>    
     <h1>{count}</h1>
     <h1>{value}</h1>    

     <button onClick={()=> setCount(funCount)}>Increment</button>
     <button onClick={()=> setCount(funDecreCount)}>Decrement</button>
    
    </>

  )
}

export default Mount