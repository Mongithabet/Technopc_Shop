import React from 'react'
import { Carousel } from 'react-bootstrap';
import image1 from './img/slider/image1.jpg';
import image2 from './img/slider/image2.jpg';
import image3 from './img/slider/image3.jpg';
import image4 from './img/slider/‎image4.jpg';
import image5 from './img/slider/image5.jpg';
import './css/Slider.css'

export default function Slider() {
    return (
        <div className='slider'>
        
        <Carousel >
  <Carousel.Item interval={1000} >
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image4}
      alt="forth slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image5}
      alt="fifth slide"
    />
   
  </Carousel.Item>
</Carousel>
      
        </div>
    )
}
