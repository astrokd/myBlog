import * as React from "react"
import { Link } from 'gatsby'

// styles
import { pnt, stickyNav } from './sticky.module.css'

const sticky = () => {
  return (
    <nav className={stickyNav} style={{ whiteSpace: 'nowrap' }}>
      <span><Link className={pnt} to="#Lorem_Ipsum">Lorem Ipsum ❯</Link></span>
      <span><Link className={pnt} to="#Nietzsche_Ipsum">Nietzsche Ipsum ❯</Link></span>
      <span><Link className={pnt} to="#Office_Ipsum">Office Ipsum ❯</Link></span>
      <span><Link className={pnt} to="#Sagan_Ipsum">Sagan Ipsum ❯</Link></span>
      <span><Link className={pnt} to="#Obama_Ipsum">Obama Ipsum ❯</Link></span>
    </nav>
  )
}

export default sticky