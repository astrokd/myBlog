import React from 'react'
import VCLayout from '../components/vclayout'

// styles
const headingStyles = {
  marginBottom: "10px",
}

const aStyles = {
  margin: "20px",
}

const linkSpan = {
  marginTop: "-30px",
  paddingBottom: "30px",
  display: "block",
}

const stickyStyles = {
  backgroundColor: "white",
  whiteSpace: 'nowrap',
}

const VCSagan = () => {
  return (
        <VCLayout activelink="Sagan">
          <h2><span style={linkSpan} id="Sagan_Ipsum"> &nbsp; </span>Sagan Ipsum</h2>
          <p>Realm of the galaxies emerged into consciousness corpus callosum hundreds of thousands kindling the energy hidden in matter rich in mystery? The sky calls to us across the centuries extraplanetary take root and flourish made in the interiors of collapsing stars muse about. Vastness is bearable only through love extraordinary claims require extraordinary evidence made in the interiors of collapsing stars vastness is bearable only through love bits of moving fluff vanquish the impossible and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
          <ul>
            <li><a href="http://saganipsum.com/">Sagan Ipsum</a></li>
          </ul>
        </VCLayout>
  )
}

export default VCSagan