import React, { useState } from 'react';
import '../css/FooterComponent.css';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

function CarouselComponent() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
  
      <Carousel activeIndex={index} onSelect={handleSelect} className='' controls={false} indicators={false}>
        
        <Carousel.Item >
          <img className='carousel-img blur' src='alberta.jpg' />
          {/* <Carousel.Caption className='d-flex align-itmes-center' >
            <h3>First slide label</h3>
            <p className='d-none d-md-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
  
        <Carousel.Item >
          <img className='carousel-img blur' src='saskatchewan.jpg' />
          {/* <Carousel.Caption >
            <h3>Second slide label</h3>
            <p className='d-none d-md-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
  
        <Carousel.Item>
          <img className='carousel-img blur' src='britishcolumbia.jpg' />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p className='d-none d-md-block'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
  
      </Carousel>
    );
  }
  
export function FooterComponent({bool=true}) {
    return (
      <footer>
      {bool && <CarouselComponent />}
        <div id='footer' className="footer">
        
          <div className='row'>
            <ul>
              <li><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedin}/></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter}/></a></li>
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
  