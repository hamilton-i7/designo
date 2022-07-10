import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Drawer from '@mui/material/Drawer'
import MuiLink from '@mui/material/Link'
import Link from './link'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Toolbar from '@mui/material/Toolbar'
import { getStrapiMedia } from '../lib/media'

const Nav = ({ window, menu, children }) => {
  const logo = getStrapiMedia(menu.logo)
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const handleDrawerToggle = () => {
    setOpenMobileMenu(!openMobileMenu)
  }

  const mobileToolbar = (
    <Toolbar>
      <Link href={logo.href}>
        <MuiLink>
          <Box component='img' src={logo.url} alt={logo.alternativeText} />
        </MuiLink>
      </Link>
      <IconButton
        color='inherit'
        aria-label={openMobileMenu ? 'close drawer' : 'open drawer'}
        edge='end'
        onClick={handleDrawerToggle}
        sx={{ display: { sm: 'none' } }}>
        {openMobileMenu ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </Toolbar>
  )

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      {mobileToolbar}
      <List>
        {menu.links.map(link => (
          <ListItem key={link.id} disablePadding>
            <ListItemButton>
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav' aria-label='extended menu'>
        <Toolbar>
          <Link href={logo.href}>
            <MuiLink>
              <Box component='img' src={logo.url} alt={logo.alternativeText} />
            </MuiLink>
          </Link>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Stack direction='row' sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {menu.links.map(link => (
              <Link key={link.id} href={link.url}>
                <MuiLink underline='hover'>{link.label}</MuiLink>
              </Link>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component='nav' aria-label='mobile menu'>
        <Drawer
          container={container}
          anchor='top'
          variant='temporary'
          open={openMobileMenu}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
      {children}
    </Box>
  )
}

export default Nav
