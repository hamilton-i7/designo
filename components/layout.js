import React from 'react'
import Nav from './nav'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <Nav>
      {children}
      <Footer />
    </Nav>
  )
}

export default Layout
