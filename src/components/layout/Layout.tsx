import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from '../ScrollToTop'
import BackToTop from '../BackToTop'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Scroll to top on route change */}
      <ScrollToTop />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Back to top button */}
      <BackToTop />
    </div>
  )
}