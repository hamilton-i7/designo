import React, { cloneElement, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
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
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { getStrapiMedia } from '../lib/media'
import { useSmallScreenMatcher } from '../lib/responsive'
import { useTheme } from '@mui/material'

export const appBarHeight = '9.6rem'
const mobileIconSize = '2rem'

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
}

const Nav = ({ window, menu, children }) => {
  const logo = getStrapiMedia(menu.logo)
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const theme = useTheme()
  const matchesSmallScreen = useSmallScreenMatcher(theme)
  const handleDrawerToggle = () => {
    setOpenMobileMenu(!openMobileMenu)
  }

  useEffect(() => {
    if (matchesSmallScreen && openMobileMenu) {
      setOpenMobileMenu(false)
    }
  }, [matchesSmallScreen, openMobileMenu])

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        pt: appBarHeight,
        backgroundColor: theme => theme.palette.common.black,
        color: theme => theme.palette.common.white,
      }}>
      <List
        sx={{
          py: '3rem',
        }}>
        {menu.links.map(link => (
          <ListItem key={link.id} disablePadding>
            <ListItemButton sx={{ p: '1.5rem 2.4rem' }}>
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  variant: 'subtitle1',
                  textTransform: 'uppercase',
                }}
              />
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
      <ElevationScroll>
        <AppBar
          component='nav'
          aria-label='extended menu'
          elevation={0}
          sx={{
            backgroundColor: theme => theme.palette.common.white,
            height: appBarHeight,
            justifyContent: 'center',
            zIndex: theme => theme.zIndex.drawer + 1,
          }}>
          <Toolbar
            sx={{
              justifyContent: 'space-between',
            }}>
            <Link href={logo.href}>
              <MuiLink
                sx={{
                  width: '60%',
                  maxWidth: '20.2rem',
                }}>
                <Box
                  component='img'
                  src={logo.url}
                  alt={logo.alternativeText}
                />
              </MuiLink>
            </Link>
            <IconButton
              color='inherit'
              aria-label={openMobileMenu ? 'close drawer' : 'open drawer'}
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}>
              {openMobileMenu ? (
                <CloseIcon sx={{ fontSize: mobileIconSize }} />
              ) : (
                <MenuIcon sx={{ fontSize: mobileIconSize }} />
              )}
            </IconButton>
            <Stack
              direction='row'
              sx={{
                display: { xs: 'none', sm: 'flex' },
                gap: { sm: '2.4rem', tablet: '4.2rem' },
              }}>
              {menu.links.map(link => (
                <Link key={link.id} href={link.url}>
                  <MuiLink
                    underline='hover'
                    sx={{
                      color: theme => theme.palette.common.black,
                      textTransform: 'uppercase',
                    }}>
                    {link.label}
                  </MuiLink>
                </Link>
              ))}
            </Stack>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
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
