import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import { markdownContainer } from '../components/layout.module.css';

function EtcPage({ data }) {
  return (
    <Layout pageTitle="etc">
      <div className={markdownContainer}>
        {data.allMdx.nodes.map((node) => (
          <MDXRenderer>{node.body}</MDXRenderer>
        ))}
      </div>
    </Layout>
  );
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
`;

export default EtcPage;
