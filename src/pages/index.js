import * as React from "react"
import Layout from './components/layout'
import CallToAction from './components/callToAction'

// data

// markup
const IndexPage = () => {
  return (
    <>
      <Layout activelink="Home">

        Welcome to my Home Page, this is my porfolio of work.

        <CallToAction>This is a Call To Action</CallToAction>
        
      </Layout>
    </>
  )
}

export default IndexPage
