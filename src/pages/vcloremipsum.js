import React from 'react'
import VCLayout from '../components/vclayout'

// styles
import { linkSpan, contentStyle } from './vc.module.css'

const VCLoremIpsum = () => {
  return (
    <VCLayout activelink="Lorem Ipsum">
      <div className={contentStyle}>
        <h2><span className={linkSpan} id="Lorem_Ipsum"> &nbsp; </span>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul>
          <li><a href="https://loremipsum.io/generator/">Lorem Ipsum generator</a></li>
          <li><a href="https://www.lipsum.com/">Lorem Ipsum</a></li>
          <li><a href="https://www.blindtextgenerator.com/lorem-ipsum">Blindtextgenerator.com Lorem Ipsum</a></li>
        </ul>
      </div>
    </VCLayout>
  )
}

export default VCLoremIpsum