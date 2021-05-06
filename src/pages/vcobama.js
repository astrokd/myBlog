import React from 'react'
import VCLayout from '../components/vclayout'

// styles
// const headingStyles = {
//   marginBottom: "10px",
// }

// const aStyles = {
//   margin: "20px",
// }

const linkSpan = {
  marginTop: "-30px",
  paddingBottom: "30px",
  display: "block",
}

// const stickyStyles = {
//   backgroundColor: "white",
//   whiteSpace: 'nowrap',
// }

const VCObama = () => {
  return (
        <VCLayout activelink="Obama">
          <h2><span style={linkSpan} id="Obama_Ipsum"> &nbsp; </span>Obama Ipsum</h2>
          <p>Back home, my grandmother raised their baby and went to work on a bomber assembly line. And I believe that America holds within her the truth that regardless of race, religion, or station in life, all of us share common aspirations - to live in peace and security; to get an education and to work with dignity; to love our families, our communities, and our God.</p>
          <ul>
            <li><a href="https://obamaipsum.com/">Obama Ipsum</a></li>
          </ul>
        </VCLayout>
  )
}

export default VCObama