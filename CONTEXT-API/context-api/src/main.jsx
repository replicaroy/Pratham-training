import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProvider from './components/context/UserContext/UserProvider.jsx'
import PostProvider from './components/context/UserContext/PostProvider.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <UserProvider>
      <PostProvider>
      <App />
      </PostProvider>
    </UserProvider>
  </StrictMode>
)
