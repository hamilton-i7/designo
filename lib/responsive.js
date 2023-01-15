import useMediaQuery from '@mui/material/useMediaQuery'

export const MAX_WIDTH = { xs: '120rem', tv: '150rem' }

export const useSmallScreenMatcher = theme =>
  useMediaQuery(theme.breakpoints.up('sm'))

export const useTabletScreenMatcher = theme =>
  useMediaQuery(theme.breakpoints.up('tablet'))

export const useMediumScreenMatcher = theme =>
  useMediaQuery(theme.breakpoints.up('md'))

export const useLargeScreenMatcher = theme =>
  useMediaQuery(theme.breakpoints.up('lg'))

export const useDesktopScreenMatcher = theme =>
  useMediaQuery(theme.breakpoints.up('desktop'))
