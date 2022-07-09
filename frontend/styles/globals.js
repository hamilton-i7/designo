export const globalStyles = {
  html: { fontSize: '62.5%' },
  img: { display: 'block', width: '100%' },
  a: { color: 'currentColor', textDecoration: 'none' },
}

export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    tablet: 768,
    md: 900,
    lg: 1200,
    desktop: 1440,
    xl: 1536,
  },
}

export const typography = {
  fontFamily: ['Jost', 'sans-serif'].join(','),
  h1: {
    fontSize: '3.2rem',
    fontWeight: 500,
    lineHeight: '3.6rem',
  },
  h2: {
    fontSize: '2.8rem',
    fontWeight: 500,
    letterSpacing: '0.14rem',
    lineHeight: '3.6rem',
  },
  h3: {
    fontSize: '2rem',
    fontWeight: 500,
    lineHeight: '2.6rem',
  },
  body1: {
    fontWeight: 400,
    fontSize: '1.6rem',
    lineHeight: '2.6rem',
  },
  subtitle1: {
    fontSize: '2.4rem',
    fontWeight: 400,
    letterSpacing: '0.2rem',
    lineHeight: '2.5rem',
  },
  subtitle2: {
    fontSize: '1.4rem',
    fontWeight: 400,
    letterSpacing: '0.2rem',
    lineHeight: '1.4rem',
  },
  button: {
    fontSize: '1.5rem',
    fontWeight: 500,
    letterSpacing: '0.1rem',
  },
  caption: {
    fontSize: '1.5rem',
    fontWeight: 500,
    lineHeight: '2.6rem',
  },
  overline: {
    fontSize: '1.2rem',
    fontWeight: '400',
    fontStyle: 'italic',
  },
}
