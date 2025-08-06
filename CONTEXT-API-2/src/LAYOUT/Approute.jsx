import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../PAGES/Home'
import Login from '../PAGES/Login'
import SignUp from '../PAGES/SignUp'
import Post from '../PAGES/Post'
import CreatePost from '../PAGES/CreatePost'
import Protected from './Protected'

const Approute = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>     
        <Route path='/post' element={<Post/>}/>     
        <Route path='/createpost' element={<CreatePost/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Approute