import React, { useContext } from 'react'
import Nav from './nav'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { GlobalContext } from '../pages/_app'

const Layout = ({ children }) => {
  const { menu } = useContext(GlobalContext)

  return (
    <Nav menu={menu}>
      <Box component='main'>
        <Toolbar />
        {children}
      </Box>
    </Nav>
  )
}

export default Layout
