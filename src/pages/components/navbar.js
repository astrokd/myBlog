import * as React from "react"
import { Link } from 'gatsby'

// styles
import { topnav, navlink, active } from './navbar.module.css'
const navStyles = {
  backgroundColor: '#333',
  overflow: 'hidden',
}

const linkStyles = {
  float: 'left',
  color: '#f2f2f2',
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'none',
  fontSize: '17px',
}

const NavBar = ({ children, activelink }) => {
  if (activelink === "Home") {
    return (
      <div className={topnav}>
        <Link className={active} to="/">Home page</Link>
        <Link className={navlink} to="/about">About page</Link>
      </div>)
  }
  if (activelink === "About") {
    return (
      <div className={topnav}>
        <Link className={navlink} to="/">Home page</Link>
        <Link className={active} to="/about">About page</Link>
      </div>)
  }
}

export default NavBar