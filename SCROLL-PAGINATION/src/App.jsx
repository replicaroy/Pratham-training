import { useState } from 'react'
import './App.css'
import Products from './pages/Products'
import InfiniteScrolling from './pages/InfiniteScrolling'
import StudentProfile from './HOC/StudentProfile'
import Home from './HOC/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Products/> */}
     <InfiniteScrolling/>
     {/* <Home/> */}
    </>
  )
}

export default App
