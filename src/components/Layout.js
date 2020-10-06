import React from 'react'
import Navbar from './NavBar'

function Layout(props) {
  const { children } = props
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout