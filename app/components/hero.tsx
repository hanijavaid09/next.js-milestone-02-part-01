import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div style={{ display:"flex"}}>
          
      <Image
      src="/image02.png"
      alt='image'
      height={500}
      width={500} style={{padding:"30px",marginTop:"50px",marginLeft:"90px"}}/>
    <div style={{paddingLeft:"10px", paddingTop:"180px" }}>
   <h1 >TAHANI JAVAID   </h1>
   <h1 style={{fontSize:"40px"}}>Web Developer</h1>
   <h2 style={{fontSize:"20px"}}> A passionate Full Stack Web Developer with a knack for building beautiful and functional websites and web applications </h2>
   <br>
   </br>
   <button>Contact Me !</button> 
   <button>Hire Me !</button>
   
     </div>
    </div>

     

  )
}

export default Hero
