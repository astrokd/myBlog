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

const VCNietzsche = () => {
  return (
        <VCLayout activelink="Nietzsche">
          <h2><span style={linkSpan} id="Nietzsche_Ipsum"> &nbsp; </span>Nietzsche Ipsum</h2>
          <p>Moral self war depths faith transvaluation ultimate chaos dead superiority against play. Inexpedient value ubermensch god of play enlightenment derive ultimate derive sea abstract free ocean. Revaluation snare virtues snare truth derive madness holiest decrepit justice justice. Deceptions noble truth suicide christianity transvaluation against god endless victorious. Faithful overcome horror.</p>
          <ul>
            <li><a href="http://nietzsche-ipsum.com/">Nietzsche Ipsum</a></li>
          </ul>
        </VCLayout>
  )
}

export default VCNietzsche