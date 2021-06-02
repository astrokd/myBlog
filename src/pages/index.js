import * as React from "react"
import Layout from '../components/layout'
import CallToAction from '../components/callToAction'
import Bio from "../components/bio"
import { StaticImage } from "gatsby-plugin-image"

// data
const MugShot = () => {
  return (
    <StaticImage src="../images/mugshot.png" alt="My Mugshot" />
  )
}

// markup
const IndexPage = () => {
  return (
    <>
      <Layout activelink="Home">

        <h3>Welcome to my Home Page, this is my porfolio of work.</h3>
        <MugShot />

        <CallToAction>This is a Call To Action</CallToAction>
        
        <Bio showCount={20}>

          This is my Bio, it will be an expandable bio, but right not it is just a simple div.

        </Bio>

      </Layout>
    </>
  )
}

export default IndexPage
