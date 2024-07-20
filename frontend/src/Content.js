

import React from 'react'
import { FaBox } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineSwap } from "react-icons/ai";
import { IoConstructOutline } from "react-icons/io5";
import { GiPocketRadio } from "react-icons/gi";
import { MdOutlineLocalAtm } from "react-icons/md";
const Content = () => {
  
  return (
    <>
    <div className='content'>
      <div className='heading-promiss'><h1>WE PROMISE</h1></div>
      <div className='icon-promiss'>
        <div className='icon-promiss-item'  style={{borderRight:"1px solid gray"}}>
        <FaBox />
        <span className='setting-word'>Well-Crafted <br/>Packages</span>
        </div>
        <div className='icon-promiss-item' style={{borderRight:"1px solid gray"}}>
        <CiDeliveryTruck />
        <span className='setting-word'>Free Delivery & <br/>installation</span>

        </div>
        <div className='icon-promiss-item' style={{borderRight:"1px solid gray",flexDirection:"column"}}>
        <AiOutlineSwap />
        <p className='setting-word'>Free Yearly <br/>Maintainance</p>
      
        </div>
        <div className='icon-promiss-item' style={{borderRight:"1px solid gray"}}>
        <IoConstructOutline />
        <p className='setting-word'>Free Yearly <br/>Maintainance</p>

        </div>
        <div className='icon-promiss-item'style={{borderRight:"1px solid gray"}}>
        <GiPocketRadio />
        <p className='setting-word'>Free Yearly <br/>Maintainance</p>

        </div>
        <div className='icon-promiss-item' style={{flexDirection:"column"}}>
        <MdOutlineLocalAtm  />
        <p className='setting-word'>Free Yearly <br/>Maintainance</p>
       
        </div>

      </div>
      <div>

      </div>
    </div>
    </>
  )
}

export default Content