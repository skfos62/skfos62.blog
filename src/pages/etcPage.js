import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { markdownContainer } from '../components/layout.module.css'

const EtcPage = ({data}) => {
  return (
    <Layout pageTitle="etc" >
    <div className={markdownContainer}>
    {
        data.allMdx.nodes.map(node => (
          <MDXRenderer >
            {node.body}
            </MDXRenderer>
        ))
      }
    </div>
  
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