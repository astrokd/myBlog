import * as React from "react"
import { Link } from 'gatsby'

// styles
import { topnav, navlink, active } from './vcnavbar.module.css'

const LoremIpsum = () => {
  return (
    <div>
      <svg class="pnt" width="200px" height="50px" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
        <a href="/vcloremipsum"></a>
        <polygon id="start" points="0,0 0,50 175,50 200,25 175,0" fill="solid" stroke="black"/>
        <text x="50%" y="60%" text-anchor="middle" class="pntText">Lorem Ipsum</text>
      </svg>
    </div>
  )
}

const VCNavBar = ({ activelink }) => {
  if (activelink === "Lorem Ipsum") {
    return (
      <div className={topnav}>
        <div className={active}><LoremIpsum></LoremIpsum></div>
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
        <div className={navlink}><LoremIpsum></LoremIpsum></div>
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
        <div className={navlink}><LoremIpsum></LoremIpsum></div>
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
        <div className={navlink}><LoremIpsum></LoremIpsum></div>
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
        <div className={navlink}><LoremIpsum></LoremIpsum></div>
        <div className={navlink}><Link to="/vcnietzsche">Nietzsche Ipsum</Link></div>
        <div className={navlink}><Link to="/vcoffice">Office Ipsum</Link></div>
        <div className={navlink}><Link to="/vcsagan">Sagan Ipsum</Link></div>
        <div className={active}><Link to="/vcobama">Obama Ipsum</Link></div>
      </div>
    )
  }
}

export default VCNavBar