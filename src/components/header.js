import React from 'react'

// styles
import { headingStyles, subHeadingStyles } from './layout.module.css'

const Header = ( {title} ) => {
  return (
    <div>
      <h1 className={headingStyles}>{title}</h1>
      <p className={subHeadingStyles}>by KD</p>  
    </div>
  )
}

export default Header