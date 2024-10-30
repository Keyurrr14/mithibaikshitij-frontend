import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer.jsx'


const RootLayout = () => {
  return (
    <div className="w-full min-h-screen">
      <section className="h-screen">
         <Outlet />
      </section>

      <Footer />
    </div>
  )
}

export default RootLayout
