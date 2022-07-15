import React, { useContext } from 'react'
import Nav from './nav'
import { GlobalContext } from '../pages/_app'
import Footer from './footer'

const Layout = ({ children }) => {
  const { menu, footer } = useContext(GlobalContext)

  return (
    <Nav menu={menu}>
      {children}
      <Footer footer={footer} />
    </Nav>
  )
}

export default Layout
