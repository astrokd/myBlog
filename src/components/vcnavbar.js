import * as React from "react"
import { Link } from 'gatsby'

// styles
import { topnav, navlink, active } from './vcnavbar.module.css'

const Starter = ({ children, linkpath, linkstyle }) => {
  return (
    <Link className={linkstyle} to={linkpath}>
      <svg width="200px" height="50px" viewBox="0 0 200 50">
        <polygon points="0,0 0,50 175,50 200,25 175,0" />
        <text x="50%" y="60%" text-anchor="middle">{ children }</text>
      </svg>
    </Link>
  )
}

const Arrow = ({ children, linkpath, linkstyle }) => {
  return (
    <Link className={linkstyle} to={linkpath}>
      <svg width="200px" height="50px" viewBox="0 0 200 50">
        <polygon points="0,0 25,25 0,50 175,50 200,25 175,0" />
        <text x="50%" y="60%" text-anchor="middle">{ children }</text>
      </svg>
    </Link>
  )
}

const VCNavBar = ({ activelink }) => {
  if (activelink === "Lorem Ipsum") {
    return (
      <div className={topnav}>
        <Starter linkpath="/vcloremipsum" linkstyle={active}>Lorem Ipsum</Starter>
        <Arrow linkpath="/vcnietzsche" linkstyle={navlink}>Nietzsche Ipsum</Arrow>
        <Arrow linkpath="/vcoffice" linkstyle={navlink}>Office Ipsum</Arrow>
        <Arrow linkpath="/vcsagan" linkstyle={navlink}>Sagan Ipsum</Arrow>
        <Arrow linkpath="/vcobama" linkstyle={navlink}>Obama Ipsum</Arrow>
      </div>
      )
  }
  if (activelink === "Nietzsche") {
    return (
      <div className={topnav}>
        <Starter linkpath="/vcloremipsum" linkstyle={navlink}>Lorem Ipsum</Starter>
        <Arrow linkpath="/vcnietzsche" linkstyle={active}>Nietzsche Ipsum</Arrow>
        <Arrow linkpath="/vcoffice" linkstyle={navlink}>Office Ipsum</Arrow>
        <Arrow linkpath="/vcsagan" linkstyle={navlink}>Sagan Ipsum</Arrow>
        <Arrow linkpath="/vcobama" linkstyle={navlink}>Obama Ipsum</Arrow>
      </div>
    )
  }
  if (activelink === "Office") {
    return (
      <div className={topnav}>
        <Starter linkpath="/vcloremipsum" linkstyle={navlink}>Lorem Ipsum</Starter>
        <Arrow linkpath="/vcnietzsche" linkstyle={navlink}>Nietzsche Ipsum</Arrow>
        <Arrow linkpath="/vcoffice" linkstyle={active}>Office Ipsum</Arrow>
        <Arrow linkpath="/vcsagan" linkstyle={navlink}>Sagan Ipsum</Arrow>
        <Arrow linkpath="/vcobama" linkstyle={navlink}>Obama Ipsum</Arrow>
      </div>
    )
  }
  if (activelink === "Sagan") {
    return (
      <div className={topnav}>
        <Starter linkpath="/vcloremipsum" linkstyle={navlink}>Lorem Ipsum</Starter>
        <Arrow linkpath="/vcnietzsche" linkstyle={navlink}>Nietzsche Ipsum</Arrow>
        <Arrow linkpath="/vcoffice" linkstyle={navlink}>Office Ipsum</Arrow>
        <Arrow linkpath="/vcsagan" linkstyle={active}>Sagan Ipsum</Arrow>
        <Arrow linkpath="/vcobama" linkstyle={navlink}>Obama Ipsum</Arrow>
      </div>
    )
  }
  if (activelink === "Obama") {
    return (
      <div className={topnav}>
        <Starter linkpath="/vcloremipsum" linkstyle={navlink}>Lorem Ipsum</Starter>
        <Arrow linkpath="/vcnietzsche" linkstyle={navlink}>Nietzsche Ipsum</Arrow>
        <Arrow linkpath="/vcoffice" linkstyle={navlink}>Office Ipsum</Arrow>
        <Arrow linkpath="/vcsagan" linkstyle={navlink}>Sagan Ipsum</Arrow>
        <Arrow linkpath="/vcobama" linkstyle={active}>Obama Ipsum</Arrow>
      </div>
    )
  }
}

export default VCNavBar