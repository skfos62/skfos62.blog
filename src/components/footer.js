import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  contentContainer,
} from './layout.module.css'
import Sidebar  from '../components/sidebar'

const Footer = () => {
  return (
    <>
    <div style={{margin: 30, display:'flex', justifyContent:'center',width:'100%',color: '#888'}}>
    Copyrightⓒ2022 by skfos62.dev
    </div>
    </>
  )
}
export default Footer