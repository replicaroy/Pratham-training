import { Outlet, Link, NavLink } from "react-router-dom"
import './index.css'

function RootLayout() {
  return (
    <div style={{paddingTop: '200px'}}>
        <nav>
            <ul className="navlink">            
                <li>  <NavLink to='/' className={({ isActive }) => (isActive ? 'activeNav' : '')}  >Home</NavLink></li>
                <li>  <NavLink to='about' className={({ isActive }) => (isActive ? 'activeNav' : '')} >About</NavLink></li>
                <li>  <NavLink to='contact' className={({ isActive }) => (isActive ? 'activeNav' : '')}>Contact</NavLink></li>
                <li>  <NavLink to='posts' className={({ isActive }) => (isActive ? 'activeNav' : '')}>Posts</NavLink></li>
                <li>  <NavLink to='user' className={({ isActive }) => (isActive ? 'activeNav' : '')}>User</NavLink></li>               
            </ul>
        </nav>
        <main>
          <h4>Main Content</h4>
            <Outlet/> 
        </main>
    </div>
  )
}

export default RootLayout