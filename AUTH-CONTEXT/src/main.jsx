import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostProvider from './context/PostProvider.jsx';
import UserLoginProvider from './context/LoginUserProvider.jsx';
import UserListProvider from './context/UserListProvider.jsx';


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <PostProvider>
            <UserLoginProvider>
                <UserListProvider>
                    <App />
                </UserListProvider>
            </UserLoginProvider>
        </PostProvider>
    </StrictMode>
);