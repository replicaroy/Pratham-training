import React from 'react'
import HeroSection from '../components/Herosection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import CategoriesSection from '../components/CategoriesSection'
import Footer from '../components/Footer'



const Layout = () => {
  return (
    <div >
        <Navbar/>
        <HeroSection  />
        <Sidebar/>
        <CategoriesSection/>
        <Footer/>
    </div>
  )
}

export default Layout