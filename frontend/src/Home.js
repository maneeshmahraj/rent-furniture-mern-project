  
  import React from 'react'
  import { IoBed } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { GiStabbedNote } from "react-icons/gi";
import { FaTableList } from "react-icons/fa6";
import { MdTableBar } from "react-icons/md";
import { GiSofa } from "react-icons/gi";
import { GiRoundTable } from "react-icons/gi";
import { MdTableRestaurant } from "react-icons/md";
import { FaToiletPortable } from "react-icons/fa6";
import { MdMapsHomeWork } from "react-icons/md";
import Festivesale from './Festivesale';


  const Home = () => {
    return (
      <>
      <div className='slider'>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src={"../images/silider1.webp"} className="d-block w-100"  />
    </div>
    <div className="carousel-item">
      <img src={"../images/silider2.webp"} className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={"../images/silider1.webp"} className="d-block w-100" />
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
        
       
       
<div className='icons-home'>
<div className='nav-layout3'>
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
           <li><MdMapsHomeWork style={{color:"rgb(241, 84, 73)"}}/>
           <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}>WORK-HOME</p>
           </li>
           
           <li><FaTableList />
           <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> DRESSER</p>
           </li>
           <li><MdTableBar />
           <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> STUDY-TABLE</p>
           </li>
           <li><GiSofa />
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"8px"}}> SOFA</p>
         </li>

        <li> <GiRoundTable />
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> DINIG-TABLE</p>
        </li>
        <li><MdTableRestaurant />
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}> COPHY TABLE</p>
        </li>
        <li><FaToiletPortable />
        <p style={{fontSize:"15px", marginTop:"-10px", marginLeft:"-8px"}}>STORAGE</p>
        </li>
        
           </ul>
         </div>

      </div>
      <Festivesale/>
      </>
    )
  }
  
  export default Home