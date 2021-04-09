import * as React from "react"
import Layout from '../components/layout'
import CallToAction from '../components/callToAction'
import Bio from "../components/bio"

// data

// markup
const IndexPage = () => {
  return (
    <>
      <Layout activelink="Home">

        Welcome to my Home Page, this is my porfolio of work.

        <CallToAction>This is a Call To Action</CallToAction>
        
        <Bio showCount={20}>

          This is my Bio, it will be an expandable bio, but right not it is just a simple div.

        </Bio>

      </Layout>
    </>
  )
}

export default IndexPage
