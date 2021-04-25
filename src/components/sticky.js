import * as React from "react"
import { Link } from 'gatsby'

// styles
import { pnt, stickyNav } from './sticky.module.css'

const sticky = () => {
  return (
    <nav className={stickyNav} style={{ whiteSpace: 'nowrap' }}>
      <Link className={pnt} to="#Lorem_Ipsum">Lorem Ipsum ❯</Link>
      <Link className={pnt} to="#Nietzsche_Ipsum">Nietzsche Ipsum ❯</Link>
      <Link className={pnt} to="#Office_Ipsum">Office Ipsum ❯</Link>
      <Link className={pnt} to="#Sagan_Ipsum">Sagan Ipsum ❯</Link>
      <Link className={pnt} to="#Obama_Ipsum">Obama Ipsum ❯</Link>
    </nav>
  )
}

export default sticky