import useMediaQuery from '@mui/material/useMediaQuery'

export const useSmallScreenMatcher = theme =>
  useMediaQuery(theme.breakpoints.up('sm'))

export const useMediumScreenMatcher = theme =>
  useMediaQuery(theme.breakpoints.up('md'))

export const useLargeScreenMatcher = theme =>
  useMediaQuery(theme.breakpoints.up('lg'))
