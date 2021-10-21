import * as React from "react"
import { Link } from 'gatsby'

// styles
import { topnav, navlink, active, dropdown, dropdowncontent, dropbtn, ddlink } from './navbar.module.css'

const DropDown = () => {
  return (
    <div className={dropdown}>
          <div className={dropbtn}>css Dropdown</div>
          <div className={dropdowncontent}>
            <Link className={ddlink} to="/">Home page</Link>
            <Link className={ddlink} to="/about">About page</Link>
            <Link className={ddlink} to="/contact">Contact page</Link>
            <Link className={ddlink} to="/stickyMenu">Demo page</Link>
          </div>
        </div>
  )
}

const NavBar = (props) => {
    return (
      <div className={topnav}>
        <div className={(props.activelink === "Home") ? active : navlink}><Link to="/">Home page</Link></div>
        <div className={(props.activelink === "About") ? active : navlink}><Link to="/about">About page</Link></div>
        <div className={(props.activelink === "Contact") ? active : navlink}><Link to="/contact">Contact page</Link></div>
        <div className={(props.activelink === "Sticky") ? active : navlink}><Link to="/stickyMenu">Demo page</Link></div>
        <div className={(props.activelink === "StreetTrees") ? active : navlink}><Link to="/sdotstreettrees">Street Trees</Link></div>
        <div className={navlink}><Link to="/vcloremipsum">Vchain</Link></div>
      </div>
      )
}

export default NavBar