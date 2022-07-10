import React from 'react'
import NextLink from 'next/link'

const Link = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      {children}
    </NextLink>
  )
}

export default Link
