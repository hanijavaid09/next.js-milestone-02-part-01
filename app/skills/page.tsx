import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const Page = () => {
  return (
    <div>
      <Header/>
      <div style={{ paddingTop:"110px"}}>
      <b><h1 style={{textAlign:"center", fontSize:"70px"}}>SKILLS</h1></b>
    <h6> ✔ Frond-End DEVELOPMENT : HTML,CSS,Javascipt,React,Bootstrap,TAILWIND CSS </h6>
    <h6>✔ Back-End DEVELOPMENT : Node.JS, PHP, MYSQL </h6>
    <h6>✔ VERSION CONTROLS : Git , GitHub</h6>
    <h6>✔ PLATFORMS : VS Code , Figma , Netlify , Xammp</h6>
    <h6>✔ CURRENTLY LEARNING : Next.js </h6><br />
    </div>
    <br /><br />
      <Footer/>
    </div>
  )
}

export default Page;

