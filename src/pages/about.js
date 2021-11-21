// about.js

import React from 'react'
import Layout from '../components/layout'

import { pageStyles } from './pages.module.css'

const About = () => {
  return (
        <Layout activelink="About">
          <div className={pageStyles}>
            <h4>Welcome to my About Page, my name is Kevin.  I like coding the outdoors and playing with my kids.</h4>
          </div>
        </Layout>
  )
}

export default About