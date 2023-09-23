import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = ({categories_data}) => {
  return (
    <>
      <Navbar categories_data = {categories_data}/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout