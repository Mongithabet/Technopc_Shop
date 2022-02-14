import React from 'react'
import Card1 from './Card'
import '../components/css/Body.css'
import {BiSearchAlt2} from "react-icons/bi";
import { Pagination } from '@mui/material';
import Example from './Sidebar';
import { Col,Row,Container} from 'react-bootstrap'
export default function Body() {
    
    return (
      <Container fluid>
  <Row>
    <Col  xs={3}> <div className='accordion'><Example/></div></Col>
    <Col  xs={9}>
     
      <div className="body ">
          
          <div className='inseatch'><div className="form__group field">
<input type="input" className="form__field" placeholder="Search product" name="Search product" id='name' required />
<label htmlFor="name" className="form__label">Search product</label>
</div>
          <div className='box'><BiSearchAlt2 className='bicon'/></div>
         </div>
       <Card1/>
       <Pagination className='pagination' count={10} variant="outlined" color="primary" />
        </div></Col>
    
  </Row>
</Container>
         
    )
}

