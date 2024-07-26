

import React from 'react'
import { BsSendArrowUp } from "react-icons/bs";

const Footer = () => {

  return (
    <div className='product-cell3'>
    <div className='heading-promiss3'><h2>STAY WITH US</h2>
    <p>Find out early about all upcoming promotions and new products releases with our newsletter.</p>
    </div>
    <div className='input-box'>
       <div className='input-box2'>
       <input type='email' placeholder='enter your email address here'/>
       <div ><BsSendArrowUp style={{color:" rgb(236, 77, 77)",fontSize:"30px",cursor:"pointer"}} /></div>
       </div>
     
    </div>
    <div className='footer-box'>

    <div className='footer-img'>
      <img src='images/footerimg.webp' />
      <p>Let our legacy pick the best<br/> renting solution for your<br/> exclusive needs</p>
     </div>
     <div className='footer-box1'>

    <ul>
      <li><a href='#' style={{color:"black",fontSize:"20px"}}>ABOUT</a></li>
      <li><a href='#'>Company</a></li>
      <li><a href='#'> FAQ</a></li>
      <li><a href='#'> Career</a></li>
      <li><a href='#'>Contact Us</a></li>     
    </ul>   

    </div>
    </div>
  
   </div>
  )
}

export default Footer;