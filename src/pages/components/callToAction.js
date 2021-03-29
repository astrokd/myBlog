import React from 'react'

// styles
import { callToActionStyles } from './callToAction.module.css'

const CallToAction = ({ children }) => {
  return (

        <div className={callToActionStyles}>
          { children }
        </div>

  )
}

export default CallToAction