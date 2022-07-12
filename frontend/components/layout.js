import React, { useContext } from 'react'
import Nav from './nav'
import { GlobalContext } from '../pages/_app'
import Footer from './footer'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const { menu, footer } = useContext(GlobalContext)
  const router = useRouter()
  const currentlyInContact = router.pathname === '/contact'

  return (
    <Nav menu={menu}>
      {children}
      <Footer footer={footer} ctaSpacing={!currentlyInContact} />
    </Nav>
  )
}

export default Layout
