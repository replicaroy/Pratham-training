import { useState } from 'react'
import './App.css'
import Approute from './LAYOUT/Approute'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
     <Toaster position="top-center" reverseOrder={false} />
     <Approute/>
    </>
  )
}

export default App
