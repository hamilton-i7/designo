import { createTheme } from '@mui/material'
import { breakpoints, typography } from '../globals'

const lightTheme = createTheme({
  breakpoints,
  spacing: factor => `${0.8 * factor}rem`,
  palette: {
    mode: 'light',
    primary: {
      main: '#E7816B',
    },
    secondary: {
      main: '#FFAD9B',
    },
    complementary: {
      main: '#FDF3F0',
    },
    common: {
      black: '#1D1C1E',
      darkGray: '#333136',
      lightGray: '#F1F3F5',
    },
    neutral: {
      main: '#FFF',
    },
  },
  typography,
})

export default lightTheme
