import * as React from "react"
import { Link } from 'gatsby'

// styles
import { topnav, navlink, active, linktext } from './vcnavbar.module.css'

const Starter = ({ children, linkpath, linkstyle }) => {
  return (
    <Link className={linkstyle} to={linkpath}>
      <svg preserveAspectRatio="none" viewBox="0 0 200 50">
        <polygon points="0,0 0,50 175,50 200,25 175,0" />
        {/* <text x="50%" y="60%" text-anchor="middle">{ children }</text> */}
      </svg>
      <p className={linktext}>{ children }</p>
    </Link>
  )
}

const Arrow = ({ children, linkpath, linkstyle }) => {
  return (
    <Link className={linkstyle} to={linkpath}>
      <svg preserveAspectRatio="none" viewBox="0 0 200 50">
        <polygon points="0,0 25,25 0,50 175,50 200,25 175,0" />
        {/* <text x="50%" y="60%" text-anchor="middle">{ children }</text> */}
      </svg>
      <p className={linktext}>{ children }</p>
    </Link>
  )
}

const VCNavBar = ({ activelink }) => {
  if (activelink === "Lorem Ipsum") {
    return (
      <nav className={topnav}>
        <Starter linkpath="/vcloremipsum/" linkstyle={active}>Lorem Ipsum</Starter>
        <Arrow linkpath="/vcnietzsche/" linkstyle={navlink}>Nietzsche Ipsum</Arrow>
        <Arrow linkpath="/vcoffice/" linkstyle={navlink}>Office Ipsum</Arrow>
        <Arrow linkpath="/vcsagan/" linkstyle={navlink}>Sagan Ipsum</Arrow>
        <Arrow linkpath="/vcobama/" linkstyle={navlink}>Obama Ipsum</Arrow>
      </nav>
      )
  }
  if (activelink === "Nietzsche") {
    return (
      <nav className={topnav}>
        <Starter linkpath="/vcloremipsum/" linkstyle={navlink}>Lorem Ipsum</Starter>
        <Arrow linkpath="/vcnietzsche/" linkstyle={active}>Nietzsche Ipsum</Arrow>
        <Arrow linkpath="/vcoffice/" linkstyle={navlink}>Office Ipsum</Arrow>
        <Arrow linkpath="/vcsagan/" linkstyle={navlink}>Sagan Ipsum</Arrow>
        <Arrow linkpath="/vcobama/" linkstyle={navlink}>Obama Ipsum</Arrow>
      </nav>
    )
  }
  if (activelink === "Office") {
    return (
      <nav className={topnav}>
        <Starter linkpath="/vcloremipsum/" linkstyle={navlink}>Lorem Ipsum</Starter>
        <Arrow linkpath="/vcnietzsche/" linkstyle={navlink}>Nietzsche Ipsum</Arrow>
        <Arrow linkpath="/vcoffice/" linkstyle={active}>Office Ipsum</Arrow>
        <Arrow linkpath="/vcsagan/" linkstyle={navlink}>Sagan Ipsum</Arrow>
        <Arrow linkpath="/vcobama/" linkstyle={navlink}>Obama Ipsum</Arrow>
      </nav>
    )
  }
  if (activelink === "Sagan") {
    return (
      <nav className={topnav}>
        <Starter linkpath="/vcloremipsum/" linkstyle={navlink}>Lorem Ipsum</Starter>
        <Arrow linkpath="/vcnietzsche/" linkstyle={navlink}>Nietzsche Ipsum</Arrow>
        <Arrow linkpath="/vcoffice/" linkstyle={navlink}>Office Ipsum</Arrow>
        <Arrow linkpath="/vcsagan/" linkstyle={active}>Sagan Ipsum</Arrow>
        <Arrow linkpath="/vcobama/" linkstyle={navlink}>Obama Ipsum</Arrow>
      </nav>
    )
  }
  if (activelink === "Obama") {
    return (
      <nav className={topnav}>
        <Starter linkpath="/vcloremipsum/" linkstyle={navlink}>Lorem Ipsum</Starter>
        <Arrow linkpath="/vcnietzsche/" linkstyle={navlink}>Nietzsche Ipsum</Arrow>
        <Arrow linkpath="/vcoffice/" linkstyle={navlink}>Office Ipsum</Arrow>
        <Arrow linkpath="/vcsagan/" linkstyle={navlink}>Sagan Ipsum</Arrow>
        <Arrow linkpath="/vcobama/" linkstyle={active}>Obama Ipsum</Arrow>
      </nav>
    )
  }
}

export default VCNavBar