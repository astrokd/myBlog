import * as React from "react"
import { Link } from 'gatsby'

// styles
import { topnav, navlink, active } from './vcnavbar.module.css'

const VCNavBar = ({ activelink }) => {
  if (activelink === "Lorem Ipsum") {
    return (
      <div className={topnav}>
        <div className={active}><Link to="/vcloremipsum">Lorem Ipsum</Link></div>
        <div className={navlink}><Link to="/vcnietzsche">Nietzsche Ipsum</Link></div>
        <div className={navlink}><Link to="/vcoffice">Office Ipsum</Link></div>
        <div className={navlink}><Link to="/vcsagan">Sagan Ipsum</Link></div>
        <div className={navlink}><Link to="/vcobama">Obama Ipsum</Link></div>
      </div>
      )
  }
  if (activelink === "Nietzsche") {
    return (
      <div className={topnav}>
        <div className={navlink}><Link to="/vcloremipsum">Lorem Ipsum</Link></div>
        <div className={active}><Link to="/vcnietzsche">Nietzsche Ipsum</Link></div>
        <div className={navlink}><Link to="/vcoffice">Office Ipsum</Link></div>
        <div className={navlink}><Link to="/vcsagan">Sagan Ipsum</Link></div>
        <div className={navlink}><Link to="/vcobama">Obama Ipsum</Link></div>
      </div>
    )
  }
  if (activelink === "Office") {
    return (
      <div className={topnav}>
        <div className={navlink}><Link to="/vcloremipsum">Lorem Ipsum</Link></div>
        <div className={navlink}><Link to="/vcnietzsche">Nietzsche Ipsum</Link></div>
        <div className={active}><Link to="/vcoffice">Office Ipsum</Link></div>
        <div className={navlink}><Link to="/vcsagan">Sagan Ipsum</Link></div>
        <div className={navlink}><Link to="/vcobama">Obama Ipsum</Link></div>
      </div>
    )
  }
  if (activelink === "Sagan") {
    return (
      <div className={topnav}>
        <div className={navlink}><Link to="/vcloremipsum">Lorem Ipsum</Link></div>
        <div className={navlink}><Link to="/vcnietzsche">Nietzsche Ipsum</Link></div>
        <div className={navlink}><Link to="/vcoffice">Office Ipsum</Link></div>
        <div className={active}><Link to="/vcsagan">Sagan Ipsum</Link></div>
        <div className={navlink}><Link to="/vcobama">Obama Ipsum</Link></div>
      </div>
    )
  }
  if (activelink === "Obama") {
    return (
      <div className={topnav}>
        <div className={navlink}><Link to="/vcloremipsum">Lorem Ipsum</Link></div>
        <div className={navlink}><Link to="/vcnietzsche">Nietzsche Ipsum</Link></div>
        <div className={navlink}><Link to="/vcoffice">Office Ipsum</Link></div>
        <div className={navlink}><Link to="/vcsagan">Sagan Ipsum</Link></div>
        <div className={active}><Link to="/vcobama">Obama Ipsum</Link></div>
      </div>
    )
  }
}

export default VCNavBar