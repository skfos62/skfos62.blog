import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
      <p>gatsby 튜토리얼 </p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/emoji.jpeg"
      />
    </Layout>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage