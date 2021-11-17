import * as React from "react"
import { Link } from 'gatsby'
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "proj"}}}) {
      nodes {
        html
        id
        frontmatter {
            date
            repo
            slug
            title
            tools
            url
        }
      }
    }
  }
`;

// markup
const ProjList = ({ data }) => {
    console.log("data: " + data)
    const projects = data.allMarkdownRemark.nodes
  return (
    <>
        <div>
            <br></br>
            <h3>Here is a list of projects</h3>
            <ul>
                {projects.map(node => (
                    <li key={node.id}>
                        <div>{node.frontmatter.title} - created on: {node.frontmatter.date}</div>
                        <Link to={node.frontmatter.url}>Go to url</Link>
                        <div>{(node.frontmatter.url)}</div>
                    </li>
                ))}
            </ul>
        </div>              
    </>
  )
}

export default ProjList
