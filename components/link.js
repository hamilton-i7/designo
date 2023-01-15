import React from 'react'
import NextLink from 'next/link'

const Link = ({ href, children }) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      {children}
    </NextLink>
  )
}

export default Link
