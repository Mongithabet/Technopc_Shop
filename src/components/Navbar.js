import React, { Component } from "react";
import './css/Navbar.css';
import { Container, Navbar } from 'react-bootstrap';
import { FiUserCheck } from "react-icons/fi";
 import { MdFavoriteBorder } from "react-icons/md";
 import {  CgShoppingCart } from "react-icons/cg";
class Navbar1 extends Component {

  render() {
    return (
      <div className="">


        <Navbar className="orange ">
          <Container className="orange">
            <Navbar.Brand href="#home">

              <button className="title">Technopc</button>
              <form className="form-wrapper cf">
  	<input  type="text" placeholder="Search here..." required/>
	  <button type="submit">Search</button>
</form>
            </Navbar.Brand>
            <p > <CgShoppingCart className="helpline" size={25} /><span className="span">2</span></p>
             
                           
          <p><MdFavoriteBorder  size={25}  className="helpline" /><span className="span2">2</span></p> 
         
          <FiUserCheck className="shopping" size={25} /> <p className="bienvenue">Bienvenue</p>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default Navbar1;