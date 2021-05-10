import React from 'react'
import VCLayout from '../components/vclayout'

// styles
import { linkSpan, contentStyle } from './vc.module.css'

const VCSagan = () => {
  return (
    <VCLayout activelink="Sagan">
      <div className={contentStyle}>
        <h2><span className={linkSpan} id="Sagan_Ipsum"> &nbsp; </span>Sagan Ipsum</h2>
        <p>Realm of the galaxies emerged into consciousness corpus callosum hundreds of thousands kindling the energy hidden in matter rich in mystery? The sky calls to us across the centuries extraplanetary take root and flourish made in the interiors of collapsing stars muse about. Vastness is bearable only through love extraordinary claims require extraordinary evidence made in the interiors of collapsing stars vastness is bearable only through love bits of moving fluff vanquish the impossible and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
        <ul>
          <li><a href="http://saganipsum.com/">Sagan Ipsum</a></li>
        </ul>
      </div>
    </VCLayout>
  )
}

export default VCSagan