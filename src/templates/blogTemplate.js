import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'

// styles
import { blogPostContainer, blogPost, blogPostContent } from './blog.module.css'

export default function Template({ data, }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  if (frontmatter.type === "post") {
    return (
      <Layout> 
      <div className={blogPostContainer}>
        <div className={blogPost}>
          <h3>{frontmatter.title}</h3>
          <h4>{frontmatter.date}</h4>
          <div
            className={blogPostContent}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      </Layout>
    )
  }
  if (frontmatter.type === "proj") {
    return (
      <Layout> 
      <div className={blogPostContainer}>
        <div className={blogPost}>
          <h3>{frontmatter.title}</h3>
          <h4>{frontmatter.date}</h4>
          <div>{(Object.values(frontmatter)).join(', ')}</div>
          <div
            className={blogPostContent}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      </Layout>
    )
  }
  
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
        type
        url
        tools
        repo
      }
    }
  }
`