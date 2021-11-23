import * as React from "react"
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import { graphql } from "gatsby"

// styles
import { blogPostContainer, blogPost, blogPostContent } from './proj.module.css'

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "proj"}}}) {
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
const ProjPage = ({ data }) => {
    const posts = data.allMarkdownRemark.nodes;
  return (
    <>
      <Layout activelink="Proj">
        <div className={blogPostContainer}>
            <br></br>
            <p>Welcome my Project Page</p>
            <ul className={blogPost}>
                {posts.map(node => (
                    <li key={node.id}>
                        <div>{node.frontmatter.title} - created on: {node.frontmatter.date}</div>
                        <Link to={node.frontmatter.slug}>Go to project page</Link>
                    </li>
                ))}
            </ul>
        </div>              
      </Layout>
    </>
  )
}

export default ProjPage
