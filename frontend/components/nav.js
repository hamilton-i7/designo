import React, { useEffect, useState } from 'react'
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
import { useStrapiMedia } from '../lib/media'
import { MAX_WIDTH, useSmallScreenMatcher } from '../lib/responsive'
import { useTheme } from '@mui/material'

const mobileIconSize = '2rem'

const Nav = ({ window, menu, children }) => {
  const logo = useStrapiMedia(menu.logo)
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
        pt: '9.6rem',
        backgroundColor: theme => theme.palette.common.black,
        color: theme => theme.palette.common.white,
      }}>
      <List
        sx={{
          py: theme => theme.spacing(3.75),
        }}>
        {menu.links.map(link => (
          <ListItem key={link.id} disablePadding>
            <Link href={link.url}>
              <ListItemButton sx={{ p: theme => theme.spacing(1.875, 3) }}>
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    textTransform: 'uppercase',
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Stack
      position='relative'
      sx={{
        height: '100vh',
        overflowX: 'clip',
        alignItems: 'center',
      }}>
      <AppBar
        component='nav'
        aria-label='extended menu'
        elevation={0}
        position='relative'
        sx={{
          backgroundColor: theme => theme.palette.common.white,
          height: { xs: '9.6rem', lg: '15.5rem' },
          alignItems: { xl: 'center' },
          justifyContent: 'center',
          zIndex: theme => theme.zIndex.drawer + 1,
          px: theme => ({
            xs: theme.spacing(3),
            sm: theme.spacing(5),
            lg: theme.spacing(20.625),
          }),
        }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            '&.MuiToolbar-root': {
              p: 0,
            },
            maxWidth: MAX_WIDTH,
            width: '100%',
          }}>
          <Link href={logo.href}>
            <MuiLink
              aria-label={logo.alternativeText}
              sx={{
                width: '60%',
                maxWidth: '20.2rem',
              }}>
              <Box component='img' src={logo.src} alt={logo.alternativeText} />
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
              gap: theme => ({
                sm: theme.spacing(1),
                tablet: theme.spacing(5.25),
              }),
            }}>
            {menu.links.map(link => (
              <Link key={link.id} href={link.url}>
                <MuiLink
                  underline='hover'
                  variant='subtitle2'
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
    </Stack>
  )
}

export default Nav
