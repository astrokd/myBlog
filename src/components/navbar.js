import * as React from "react"
import { Link } from 'gatsby'

// styles
import { topnav, navlink, active, dropdown, dropdowncontent, dropbtn, ddlink } from './navbar.module.css'

const NavBar = ({ activelink }) => {
  if (activelink === "Home") {
    return (
      <div className={topnav}>
        <div className={active}><Link to="/">Home page</Link></div>
        <div className={navlink}><Link to="/about">About page</Link></div>
        <div className={navlink}><Link to="/contact">Contact page</Link></div>
        <div className={navlink}><Link to="/stickyMenu">Demo page</Link></div>
        <div className={dropdown}>
          <div className={dropbtn}>Dropdown</div>
          <div className={dropdowncontent}>
            <Link className={ddlink} to="/">Home page</Link>
            <Link className={ddlink} to="/about">About page</Link>
            <Link className={ddlink} to="/contact">Contact page</Link>
            <Link className={ddlink} to="/stickyMenu">Demo page</Link>
          </div>
        </div>
      </div>
      )
  }
  if (activelink === "About") {
    return (
      <div className={topnav}>
        <div className={navlink}><Link to="/">Home page</Link></div>
        <div className={active}><Link to="/about">About page</Link></div>
        <div className={navlink}><Link to="/contact">Contact page</Link></div>
        <div className={navlink}><Link to="/stickyMenu">Demo page</Link></div>
        <div className={dropdown}>
          <div className={dropbtn}>Dropdown</div>
          <div className={dropdowncontent}>
            <Link className={ddlink} to="/">Home page</Link>
            <Link className={ddlink} to="/about">About page</Link>
            <Link className={ddlink} to="/contact">Contact page</Link>
            <Link className={ddlink} to="/stickyMenu">Demo page</Link>
          </div>
        </div>
      </div>
    )
  }
  if (activelink === "Contact") {
    return (
      <div className={topnav}>
        <div className={navlink}><Link to="/">Home page</Link></div>
        <div className={navlink}><Link to="/about">About page</Link></div>
        <div className={active}><Link to="/contact">Contact page</Link></div>
        <div className={navlink}><Link to="/stickyMenu">Demo page</Link></div>
        <div className={dropdown}>
          <div className={dropbtn}>Dropdown</div>
          <div className={dropdowncontent}>
            <Link className={ddlink} to="/">Home page</Link>
            <Link className={ddlink} to="/about">About page</Link>
            <Link className={ddlink} to="/contact">Contact page</Link>
            <Link className={ddlink} to="/stickyMenu">Demo page</Link>
          </div>
        </div>
      </div>
    )
  }
  if (activelink === "Sticky") {
    return (
      <div className={topnav}>
        <div className={navlink}><Link to="/">Home page</Link></div>
        <div className={navlink}><Link to="/about">About page</Link></div>
        <div className={navlink}><Link to="/contact">Contact page</Link></div>
        <div className={active}><Link to="/stickyMenu">Demo page</Link></div>
        <div className={dropdown}>
          <div className={dropbtn}>Dropdown</div>
          <div className={dropdowncontent}>
            <Link className={ddlink} to="/">Home page</Link>
            <Link className={ddlink} to="/about">About page</Link>
            <Link className={ddlink} to="/contact">Contact page</Link>
            <Link className={ddlink} to="/stickyMenu">Demo page</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar