import * as React from "react"
import Layout from '../components/layout'
import CallToAction from '../components/callToAction'
import Bio from "../components/bio"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from 'react-bootstrap';

// styles
// import 'bootstrap/dist/css/bootstrap.min.css';
import { imgStyles, bsbutton } from './pages.module.css'


// data
const MugShot = () => {
  return (
    <StaticImage className={imgStyles} src="../images/mugshot.png" alt="My Mugshot" />
  )
}

// const mntrpath = "https://upload.wikimedia.org/wikipedia/commons/e/eb/Mount_Rainier_from_west.jpg"
const mntrpath = "../images/placehold.jpeg"


const MntRainer = () => {
  return (
    <StaticImage className={imgStyles} src={mntrpath} alt="Mnt Rainer" />
  )
}

// markup
const IndexPage = () => {
  return (
    <>
      <Layout activelink="Home">
        <br></br>
        <h3>Welcome to my Home Page, this is my porfolio of work.</h3>
        <MugShot />

        <Button classname={bsbutton} variant="primary">Primary</Button>{' '}

        <CallToAction>This is a Call To Action</CallToAction>
        
        <Bio showCount={20}>

          This is my Bio, it will be an expandable bio, but right not it is just a simple div.

        </Bio>

        <MntRainer />

      </Layout>
    </>
  )
}

export default IndexPage
