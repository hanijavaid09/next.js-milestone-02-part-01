import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image'

const Page = () => {
  return (
    
    <div>
  
    
    <Header/>
      <div style={{ paddingTop:"110px"}}>
    <b><h1 style={{textAlign:"center", fontSize:"70px"}}>ABOUT MYSELF</h1><br></br></b>
    <p>Hi! I'm Tahani Javaid student at GIAIC with a strong passionate for web development. I am currently learning the latest technologies and best practices to build efficient, user-freindly websites.</p>
    <p>I'm excited to apply my skills to real_world challenges</p>
    <br /><br /><br /><br />
    </div>
    <Footer/>
    
    </div>
  )
}

export default Page
