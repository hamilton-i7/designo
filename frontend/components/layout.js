import React, { useContext } from 'react'
import Nav from './nav'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { GlobalContext } from '../pages/_app'
import Footer from './footer'

const Layout = ({ children }) => {
  const { menu, footer } = useContext(GlobalContext)

  return (
    <Nav menu={menu}>
      <Box component='main' role='main'>
        <Toolbar />
        {children}
        <Footer footer={footer} />
      </Box>
    </Nav>
  )
}

export default Layout
