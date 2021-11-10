import * as React from "react"
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import { graphql } from "gatsby"

// styles
import { blogPostContainer, blogPost, blogPostContent } from './blog.module.css'

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
        <div className={blogPostContainer}>
            <br></br>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby blog with Markdown pages.</p>
            <ul className={blogPost}>
                {posts.map(node => (
                    <li key={node.id}>
                        <div>{node.frontmatter.title} - created on: {node.frontmatter.date}</div>
                        <Link to={node.frontmatter.slug}>Go to post</Link>
                    </li>
                ))}
            </ul>
        </div>              
      </Layout>
    </>
  )
}

export default BlogPage
