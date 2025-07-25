import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import User from './User'
import Posts from './Posts'
import Contact from './Contact'
import Errors from './Errors'
import RootLayout from './RootLayout'
import PostDetails from './PostDetails'
import RequireAuth from './RequireAuth'

function Approuters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="user" element={<User />} />
          <Route path="contact" element={<Contact />} />          
          <Route path="posts" element={ <RequireAuth><Posts /></RequireAuth> } />
          <Route path="posts/:id" element={<PostDetails />} />
          <Route path="*" element={<Errors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Approuters


// import { createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import User from './User'
// import Posts from './Posts'
// import Contact from './Contact'
// import Errors from './Errors'
// import RootLayout from './RootLayout'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/user" element={<User />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/posts" element={<Posts />} />
//       <Route path="*" element={<Errors />} />
//     </Route>
//   )
// )

// function Approuters() {
//   return (
//     <RouterProvider router={router} />
//   //  <BrowserRouter>
//   //  <Routes path="/" element= {<RootLayout/>} >
//   //   <Route path="/" element={<Home />} />
//   //   <Route path="/about" element={<About />} />
//   //   <Route path="/user" element={<User />} />
//   //   <Route path="/contact" element={<Contact />} />
//   //   <Route path="/posts" element={<Posts />} />
//   //   <Route path="*" element={<Errors />} />
//   //  </Routes>
//   //  </BrowserRouter>
//   )
// }

// export default Approuters