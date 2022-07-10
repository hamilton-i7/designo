import useMediaQuery from '@mui/material/useMediaQuery'

export const useSmallScreenMatcher = theme =>
  useMediaQuery(theme.breakpoints.up('sm'))

export const useLargeScreenMatcher = theme =>
  useMediaQuery(theme.breakpoints.up('lg'))
