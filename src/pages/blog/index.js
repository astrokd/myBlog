import * as React from "react"
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}) {
      nodes {
        html
        id
        frontmatter {
          date
          title
          slug
        }
      }
    }
  }
`;

// markup
const BlogPage = ({ data }) => {
    const posts = data.allMarkdownRemark.nodes;
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
