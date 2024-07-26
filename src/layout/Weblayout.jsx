import Footer from '@/components/Web/Footer'
import Navbar from '@/components/Web/Navbar'

import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '@/components/Web/Navbar2'

const Weblayout = () => {
  return (
    <>
    <div className="h-screen w-screen overflow-hidden overflow-y-auto m-0 p-0">
    <Outlet/>
    <Navbar className="flex fixed"/>
    <Nav className="flex-fixed"/>
    <Footer/>
    </div>
    </>

  )
}

export default Weblayout