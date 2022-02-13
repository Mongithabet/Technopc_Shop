import React from 'react'

import './App.css'
 import Navbar1 from './components/Navbar'
import Navbar2 from './components/Navbar2'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Body from './components/Body'

//import Home from './components/Home'
export default function App()  {
 

    return (
     <div id="menu"  className="cont">

   <div className='head'>    <Navbar1 /></div> 
 <div className='nav1'><Navbar2/></div> {/* <div><Home /></div>  */} 
   <Body/>   
 <Sidebar/>     
  <div  className="footer"><Footer/>  </div> 
        
     </div>
    )
  }

