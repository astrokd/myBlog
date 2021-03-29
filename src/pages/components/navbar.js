import * as React from "react"
import { Link } from 'gatsby'

// styles
import { topnav, navlink, active } from './navbar.module.css'

const NavBar = ({ activelink }) => {
  if (activelink === "Home") {
    return (
      <div className={topnav}>
        <Link className={active} to="/">Home page</Link>
        <Link className={navlink} to="/about">About page</Link>
        <Link className={navlink} to="/contact">Contact page</Link>
      </div>)
  }
  if (activelink === "About") {
    return (
      <div className={topnav}>
        <Link className={navlink} to="/">Home page</Link>
        <Link className={active} to="/about">About page</Link>
        <Link className={navlink} to="/contact">Contact page</Link>
      </div>)
  }
  if (activelink === "Contact") {
    return (
      <div className={topnav}>
        <Link className={navlink} to="/">Home page</Link>
        <Link className={navlink} to="/about">About page</Link>
        <Link className={active} to="/contact">Contact page</Link>
      </div>)
  }
}

export default NavBar