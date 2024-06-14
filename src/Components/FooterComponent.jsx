import React, { useState } from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
  
      <Carousel activeIndex={index} onSelect={handleSelect} className='carousel'>
        <Carousel.Item >
          <img className='carousel-img blur' src='alberta.jpg' />
          <Carousel.Caption >
            <h3>First slide label</h3>
            <p className='d-none d-md-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item >
          <img className='carousel-img blur' src='saskatchewan.jpg' />
          <Carousel.Caption >
            <h3>Second slide label</h3>
            <p className='d-none d-md-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item>
          <img className='carousel-img blur' src='britishcolumbia.jpg' />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p className='d-none d-md-block'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
  
      </Carousel>
    );
  }
  
export function FooterComponent() {
    return (
      <footer>
      <CarouselComponent />
        <div className="footer">
        
          <div className='row'>
            <ul>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-youtube"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            </ul>
          </div>
          
          
          <div className='row'>
            <ul>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          
          
          <div className='row'>
            <p>
            Copyright © 2023 Canada - All rights reserved
            </p>
            </div>
            
        </div>
      </footer>
    );
  }
  