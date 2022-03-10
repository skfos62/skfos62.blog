import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const EtcPage = ({data}) => {
  return (
    <Layout pageTitle="etc">
      {
        data.allMdx.nodes.map(node => (
          <MDXRenderer>
            {node.body}
            </MDXRenderer>
        ))
      }
  </Layout>
  )
}


export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        body
      }
    }
  }
`

export default EtcPage