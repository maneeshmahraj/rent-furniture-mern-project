
import React, { useState } from 'react'
import { IoBed } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { GiStabbedNote } from "react-icons/gi";
import { FaTableList } from "react-icons/fa6";
import { MdTableBar } from "react-icons/md";
import { GiSofa } from "react-icons/gi";
import { GiRoundTable } from "react-icons/gi";
import { MdTableRestaurant } from "react-icons/md";
import { FaToiletPortable } from "react-icons/fa6";
import { BsFillTvFill } from "react-icons/bs";
import { TbSofa } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import Home from './Home';
const Layout = () => {

    const [isShow,setIsShow]=useState(false);
    const [isShow2,setIsShow2]=useState(false);
    const [sideWar,setSideWar]=useState(false)
    const handleMouseOver=()=>{
         setIsShow(!isShow);
     setIsShow2(false)

    }
    const handleClick=()=>{
        setSideWar(true);
    }
    const handleMouseOver2=()=>{
        setIsShow2(!isShow2);
        setIsShow(false)

   }
   const handleMove=()=>
   {
    setIsShow(false)
   }
   const handleMove2=()=>
    {
     setIsShow2(false)
    }

    const handleClose=()=>{
        setSideWar(false)
    }
  return (
   <>
   <nav>
   <div style={{width:"100%"}}>
    <div className='navbar'>
        <div className='nav-logo'>
        <div className='nav-logo1'>
        <img src='images\nav-fab-Logo.svg'/>
        </div>
       <div className='product-area'> <select>
            <option>DEHLI-NCR</option>
            <option>Mumbai</option>
        </select>
        </div>
        </div>
        <div className='nav-layout'>
            <ul>
                <li onMouseOver={handleMouseOver} >BEDROOM</li>
                 <li onMouseOver={handleMouseOver2}>LIVING ROOM</li>
                  <li>MORE CATEGORIES</li>
            </ul>
        </div>
      
      <div className='nav-icon-right'>
     
            <ul>
                <li ><FaSearch /></li>
                 <li><FaCartArrowDown /></li>
                  <li><IoNotifications /></li>
                  <li><FaUser /></li>
                  <li><HiBars3BottomLeft onClick={handleClick} /></li>
            </ul>
      
        </div> 
    </div>
    </div>
   </nav>
   {isShow? <div className='bedroom-icons' onMouseLeave={handleMove}>
      
      <div className='nav-layout2'>
      <ul>
         <li> <IoBed />
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> DOUBLE-BED</p>
         </li>

        <li> <IoBedOutline />
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> SINGLE-BED</p>
        </li>
        <li><GiStabbedNote />
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> BARDROBE</p>
        </li>
        <li><FaTableList />
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> DRESSER</p>
        </li>
        <li><MdTableBar />
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> STUDY-TABLE</p>
        </li>
        </ul>
      </div>
         </div>:''
      
        
     }
       {isShow2? <div className='bedroom-icons' onMouseLeave={handleMove2}>
   
   <div className='nav-layout2'>
   <ul>
      <li><GiSofa />
     <p style={{fontSize:"12px", marginTop:"-10px", marginLeft:"8px"}}> SOFA</p>
      </li>

     <li> <GiRoundTable />
     <p style={{fontSize:"12px", marginTop:"-10px", marginLeft:"-8px"}}> DINIG-TABLE</p>
     </li>
     <li><MdTableRestaurant />
     <p style={{fontSize:"12px", marginTop:"-10px", marginLeft:"-8px"}}> COPHY TABLE</p>
     </li>
     <li><FaToiletPortable />
     <p style={{fontSize:"12px", marginTop:"-10px", marginLeft:"-8px"}}>STORAGE</p>
     </li>
     <li><BsFillTvFill />
     <p style={{fontSize:"12px", marginTop:"-10px", marginLeft:"-8px"}}> TV-TABLE</p>
     </li>
     <li><TbSofa />
     <p style={{fontSize:"12px", marginTop:"-15px", marginLeft:"-8px"}}> SOFA-COM-BED</p>
     </li>
     </ul>
   </div>
      </div>:''
   
     
  }
  {
    sideWar? <div className='sideWar'>
    <div className='close-menu'>
    <IoMdClose  className='cls' onClick={handleClose}/>
    </div>
    <div className='sidewar-about'>
        <p className='sidewar-about1'>REFER A FRIEND</p>
        <p className='sidewar-about2'>FAQ</p>
        <p className='sidewar-about3'>CONTACT US</p>

        <hr color='black' size="2" style={{margin:"50px 0px"}}/>

    </div>
   
    <div className='need'>
        <p className='need-help' style={{color:"black"}}>NEED HELP?</p>
        <p className='need-help' style={{fontSize:"40px"}}>< CiMobile3 style={{color:"red"}}/>
        <span style={{fontSize:"13px",marginLeft:"5px"}}>9555186811/ 9140688969</span>
        </p>
        <p className='need-help' ><TfiEmail style={{color:"red"}}/>
        <span style={{fontSize:"13px" ,marginLeft:"10px"}}>mb124969@gmail.com</span>
        </p>

        <hr color='black' size="2" style={{margin:"-50px 0px"}}/>
    </div>
    <div className="follw">
    <p  style={{color:"black"}}>FOLLOW US ON</p>
    <div className='follw-icon'>
        <div className='fb-icon'>
        <FaFacebookF />
        </div>
        <div >
        <CiInstagram style={{marginLeft:"5px",fontSize:"25px"}}/>
        </div>
    </div>
    </div>
</div>:''
  }
 <Home/>
   </>
  )
}

export default Layout