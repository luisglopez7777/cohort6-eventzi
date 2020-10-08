import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'

function Layout(props) {
  const { children } = props
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout