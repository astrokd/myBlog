// contact.js

import React from 'react'
import Layout from '../components/layout'

import { pageStyles } from './pages.module.css'

const Contact = () => {
  return (
        <Layout activelink="Contact">
          <div className={pageStyles}>
            <h4>Welcome to my Contact Page, here you will find information about how to contact me.</h4>
          </div>
        </Layout>
  )
}

export default Contact