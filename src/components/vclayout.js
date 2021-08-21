import React from 'react'
import { Link } from 'gatsby'
import VCNavBar from './vcnavbar'

// styles
import { pageStyles, headingStyles, paragraphStyles, footerStyles } from './vclayout.module.css'

const Header = () => {
  return (
    <header>
      <h1 className={headingStyles}>Value Chain Example</h1>
      <Link to="/">Back to Home page</Link>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className={footerStyles}>
      <p>Ipsum types</p>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </footer>
  )
}

const VCLayout = ({ children, activelink }) => {
  return (
    <main className={pageStyles}>
      <title>{activelink} Page</title>
        <Header></Header>
      <div className={pageStyles}>
        <div>
          <VCNavBar activelink={activelink}></VCNavBar>
        </div>
        <div className={paragraphStyles}>
          { children }
        </div>
      </div>
      <div className={footerStyles}>
        <Footer></Footer>
      </div>
    </main>
  )
}

export default VCLayout