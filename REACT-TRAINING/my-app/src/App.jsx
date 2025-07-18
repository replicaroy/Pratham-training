import { useState } from 'react'
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'
import NameChangeClass from './components/NameChangeClass'
import Counter from './components/Counter'
import { CounterChild } from './components/CounterChild'
import Home from './pages/Home'
import About from './pages/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NameChangeClass /> */}

      
  <Link to="/"> <button>Home</button> </Link>
  <Link to="/about"> <button>About</button>  </Link>
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
  

    </>
  )
}

export default App
