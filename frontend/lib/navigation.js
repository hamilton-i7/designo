import { useEffect } from 'react'
import { withRouter } from 'next/router'

const ScrollToTop = ({ window }) => {
  useEffect(() => {
    const unlisten = window.history.listen(() => {
      window.scrollTo(0, 0)
    })
    return () => {
      unlisten()
    }
  }, [])

  return null
}

export default withRouter(ScrollToTop)
