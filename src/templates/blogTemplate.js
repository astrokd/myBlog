import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'

// styles
import { blogPostContainer, blogPost, blogPostContent } from './blog.module.css'

export default function Template({ data, }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout> 
    <div className={blogPostContainer}>
      <div className={blogPost}>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className={blogPostContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: {type: {eq: "post"} }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`