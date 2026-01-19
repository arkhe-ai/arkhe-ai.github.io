import { useEffect } from 'react'
import Logo from './Logo'

function Loader() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return (
    <div className="loader" id="loader">
      <div className="loader-content">
        <Logo className="loader-logo" width="80" height="80" />
        <div className="loader-text">ARKHE AI</div>
      </div>
    </div>
  )
}

export default Loader
