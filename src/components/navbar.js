import * as React from "react"
import { Link } from 'gatsby'

// styles
import { topnav, navlink, active } from './navbar.module.css'

const NavBar = (props) => {
    return (
      <div className={topnav}>
        <div className={(props.activelink === "Home") ? active : navlink}><Link to="/">Homepage</Link></div>
        <div className={(props.activelink === "About") ? active : navlink}><Link to="/about">About</Link></div>
        <div className={(props.activelink === "Contact") ? active : navlink}><Link to="/contact">Contact</Link></div>
        <div className={(props.activelink === "Blog") ? active : navlink}><Link to="/blog">Blog</Link></div>
        <div className={(props.activelink === "Proj") ? active : navlink}><Link to="/proj">Projects</Link></div>
      </div>
      )
}

export default NavBar