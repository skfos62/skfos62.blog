import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  contentContainer,
} from './layout.module.css'
import Sidebar  from '../components/sidebar'
import Footer from '../components/footer'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
    <div className={container}>
    <Sidebar />
      <main className={contentContainer}>
        <h1 className={heading}>{pageTitle}</h1>
        <p >{children}</p>
      </main>
      <Footer />
    </div>
    </>
  )
}
export default Layout