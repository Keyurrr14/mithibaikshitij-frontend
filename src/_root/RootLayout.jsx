import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'


const RootLayout = () => {
  return (
    <div className="w-full">
      <section className="flex flex-1 h-full">
         <Outlet />
      </section>

      <Footer />
    </div>
  )
}

export default RootLayout
