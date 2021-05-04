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

const VCOffice = () => {
  return (
        <VCLayout activelink="Office">
          <h2><span style={linkSpan} id="Office_Ipsum"> &nbsp; </span>Office Ipsum</h2>
          <p>Shotgun approach punter for net net. Run it up the flag pole pull in ten extra bodies to help roll the tortoise due diligence, so form without content style without meaning let's pressure test this high touch client. Globalize big boy pants for exposing new ways to evolve our design language, hit the ground running nor looks great, can we try it a different way, scope creep. I am dead inside high turnaround rate for we need to start advertising on social media. Disband the squad but rehydrate as needed on your plate, this proposal is a win-win situation which will cause a stellar paradigm shift, and produce a multi-fold increase in deliverables.</p>
          <ul>
            <li><a href="http://officeipsum.com/index.php">Office Ipsum</a></li>
          </ul>
        </VCLayout>
  )
}

export default VCOffice