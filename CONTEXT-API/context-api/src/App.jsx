import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Approute from './components/layout/Approute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Approute/>
    </>
  )
}

export default App
