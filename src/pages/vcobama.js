import React from 'react'
import VCLayout from '../components/vclayout'

// styles
import { linkSpan, contentStyle } from './vc.module.css'

const VCObama = () => {
  return (
    <VCLayout activelink="Obama">
      <div className={contentStyle}>
        <h2><span className={linkSpan} id="Obama_Ipsum"> &nbsp; </span>Obama Ipsum</h2>
        <p>Back home, my grandmother raised their baby and went to work on a bomber assembly line. And I believe that America holds within her the truth that regardless of race, religion, or station in life, all of us share common aspirations - to live in peace and security; to get an education and to work with dignity; to love our families, our communities, and our God.</p>
        <ul>
          <li><a href="https://obamaipsum.com/">Obama Ipsum</a></li>
        </ul>
      </div>
    </VCLayout>
  )
}

export default VCObama