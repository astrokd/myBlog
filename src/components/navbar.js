import * as React from "react"
import { Link } from 'gatsby'

// styles
import { topnav, navlink, active } from './navbar.module.css'

const NavBar = (props) => {
    return (
      <div className={topnav}>
        <div className={(props.activelink === "Home") ? active : navlink}><Link to="/">Home page</Link></div>
        <div className={(props.activelink === "About") ? active : navlink}><Link to="/about">About page</Link></div>
        <div className={(props.activelink === "Contact") ? active : navlink}><Link to="/contact">Contact page</Link></div>
        <div className={(props.activelink === "Sticky") ? active : navlink}><Link to="/stickyMenu">Demo page</Link></div>
        <div className={(props.activelink === "Blog") ? active : navlink}><Link to="/blog">Blog page</Link></div>
        <div className={(props.activelink === "StreetTrees") ? active : navlink}><Link to="/sdotstreettrees">Street Trees</Link></div>
        <div className={navlink}><Link to="/vcloremipsum">Vchain</Link></div>
      </div>
      )
}

export default NavBar