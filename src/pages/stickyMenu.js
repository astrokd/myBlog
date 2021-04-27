// stickyMenu.js

import React from 'react'
import Layout from '../components/layout'
import Sticky from '../components/sticky'

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

const stickyMenu = () => {
  return (
        <Layout activelink="Sticky">
          <h1 style={headingStyles}>Floating Fixed Scrolling Sticky Menu</h1>
          <a style={aStyles} href="https://www.justinmind.com/blog/awesome-lorem-ipsum-alternatives/">10 Awesome Lorem Ipsum Alternatives from Justinmind.com</a>
          <p>Web page designs need content to get a feel for how they will behave, things like Lorem Ipsum are useful to generate quick content that might be representative of what the actual content will look like.</p>
          <Sticky style={stickyStyles}></Sticky>
                    
          <h2><span style={linkSpan} id="Lorem_Ipsum"> &nbsp; </span>Lorem Ipsum</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul>
            <li><a href="https://loremipsum.io/generator/">Lorem Ipsum generator</a></li>
            <li><a href="https://www.lipsum.com/">Lorem Ipsum</a></li>
            <li><a href="https://www.blindtextgenerator.com/lorem-ipsum">Blindtextgenerator.com Lorem Ipsum</a></li>
          </ul>
          <h2><span style={linkSpan} id="Nietzsche_Ipsum"> &nbsp; </span>Nietzsche Ipsum</h2>
          <p>Moral self war depths faith transvaluation ultimate chaos dead superiority against play. Inexpedient value ubermensch god of play enlightenment derive ultimate derive sea abstract free ocean. Revaluation snare virtues snare truth derive madness holiest decrepit justice justice. Deceptions noble truth suicide christianity transvaluation against god endless victorious. Faithful overcome horror.</p>
          <ul>
            <li><a href="http://nietzsche-ipsum.com/">Nietzsche Ipsum</a></li>
          </ul>
          <h2><span style={linkSpan} id="Office_Ipsum"> &nbsp; </span>Office Ipsum</h2>
          <p>Shotgun approach punter for net net. Run it up the flag pole pull in ten extra bodies to help roll the tortoise due diligence, so form without content style without meaning let's pressure test this high touch client. Globalize big boy pants for exposing new ways to evolve our design language, hit the ground running nor looks great, can we try it a different way, scope creep. I am dead inside high turnaround rate for we need to start advertising on social media. Disband the squad but rehydrate as needed on your plate, this proposal is a win-win situation which will cause a stellar paradigm shift, and produce a multi-fold increase in deliverables.</p>
          <ul>
            <li><a href="http://officeipsum.com/index.php">Office Ipsum</a></li>
          </ul>
          <h2><span style={linkSpan} id="Sagan_Ipsum"> &nbsp; </span>Sagan Ipsum</h2>
          <p>Realm of the galaxies emerged into consciousness corpus callosum hundreds of thousands kindling the energy hidden in matter rich in mystery? The sky calls to us across the centuries extraplanetary take root and flourish made in the interiors of collapsing stars muse about. Vastness is bearable only through love extraordinary claims require extraordinary evidence made in the interiors of collapsing stars vastness is bearable only through love bits of moving fluff vanquish the impossible and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
          <ul>
            <li><a href="http://saganipsum.com/">Sagan Ipsum</a></li>
          </ul>
          <h2><span style={linkSpan} id="Obama_Ipsum"> &nbsp; </span>Obama Ipsum</h2>
          <p>Back home, my grandmother raised their baby and went to work on a bomber assembly line. And I believe that America holds within her the truth that regardless of race, religion, or station in life, all of us share common aspirations - to live in peace and security; to get an education and to work with dignity; to love our families, our communities, and our God.</p>
          <ul>
            <li><a href="https://obamaipsum.com/">Obama Ipsum</a></li>
          </ul>
          <h3>Other thoughts</h3>
          <article>from Smashing Mag .com "The point I tried to make is that you and your clients need to be thinking, understanding and gathering content before the design. Using Lorem Ipsum is a way to half-heartedly go about the most important part of your site."</article>

        
        </Layout>
  )
}

export default stickyMenu