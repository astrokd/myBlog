import React from 'react'
import { Link } from 'gatsby'

// styles
import { bioStyles } from './bio.module.css'

const Bio = ({ children, showCount }) => {
  return (

        <div className={bioStyles}>
          {showCount}
          { children }
          <br></br>
          <Link to="/">Show More ▼</Link>
        </div>

  )
}

export default Bio