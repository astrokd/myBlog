import * as React from "react"
import { Link } from 'gatsby'
import CallToAction from '../components/callToAction'
import { StaticQuery, graphql } from "gatsby"

// markup
const PostList = () => {
    return (
        <StaticQuery
            query={graphql`
            query BlogPosts {
                allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}) {
                    nodes {
                        html
                        id
                        frontmatter {
                            date
                            slug
                            title
                        }
                    }
                }
            }
        `}
      render={data => (
        <>
            <div>
                <br></br>
                <h3>Here is a list of blog posts</h3>
                <ul>
                    {data.allMarkdownRemark.nodes.map(node => (
                        <li key={node.id}>
                            <CallToAction>
                                <div>{node.frontmatter.title} - created on: {node.frontmatter.date}</div>
                                <Link to={node.frontmatter.slug}>Go to post</Link>
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

export default PostList
