import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostProvider from './CONTEXT/PostProvider.jsx'
import UserLoginProvider from './CONTEXT/LoginUserProvider.jsx'
import UserListProvider from './CONTEXT/UserListProvider.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PostProvider>
            <UserLoginProvider>
                <UserListProvider>
                    <App />
                </UserListProvider>
            </UserLoginProvider>
        </PostProvider>
    </StrictMode>
)
