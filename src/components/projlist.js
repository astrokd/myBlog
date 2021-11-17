import * as React from "react"
import { Link } from 'gatsby'
import CallToAction from '../components/callToAction'
import { StaticQuery, graphql } from "gatsby"

// markup
const ProjList = () => {
    return (
        <StaticQuery
            query={graphql`
            query Projects {
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
        `}
      render={data => (
        <>
            <div>
                <br></br>
                <h3>Here is a list of projects</h3>
                <ul>
                    {data.allMarkdownRemark.nodes.map(node => (
                        <li key={node.id}>
                            <CallToAction>
                                <div>{node.frontmatter.title} - created on: {node.frontmatter.date}</div>
                                <Link to={node.frontmatter.url}>Go to url</Link>
                                <div>Tools used: {node.frontmatter.tools.toString()}</div>
                            </CallToAction>
                        </li>

                    ))}
                </ul>
            </div>              
        </>
      )}
    />
    )
}

export default ProjList
