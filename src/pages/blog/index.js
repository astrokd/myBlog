import * as React from "react"
import Layout from '../../components/layout'
import { Link } from 'gatsby'

// markup
const BlogPage = () => {
  return (
    <>
      <Layout activelink="Blog">
        <br></br>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby blog with Markdown pages.</p>
        <p>
            <Link to="/blog/my-first-post/">Go to my first Markdown blog post</Link>
            <br />
            <Link to="/blog/spreadsheet/">Go to my second Markdown blog post called spreadsheet</Link>
        </p>

      </Layout>
    </>
  )
}

export default BlogPage
