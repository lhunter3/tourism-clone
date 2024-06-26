import React, { useState, useEffect } from 'react';
import '../css/NavbarComponent.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
const LOGO  = 'ke-logo.jpg';

export function NavbarComponent() {
  const [showNav, setShowNav] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = scrollPos > currentScrollPos;

    setScrollPos(currentScrollPos);
    setShowNav(visible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

    return (
      <nav style={{ top: showNav ? '0' : '-100px', transition: 'top 0.1s' }}>
          <Navbar expand='lg' className="navbar w-100 pl-4 pr-4">
              <Navbar.Brand  href="#/"><img width='89' height='50' src={LOGO}></img></Navbar.Brand>
              <Navbar.Toggle className='custom-toggler'/>
  
              <Navbar.Collapse >
                <Nav className="justify-content-start w-100">
                  <Nav.Item className="mx-3 border-right border-left nav-white" ></Nav.Item>
                  <NavDropdown className='nav-dropdown' title="Places to go">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
  
  
                  <NavDropdown className='nav-dropdown' title="Things to do" >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
  
                  <NavDropdown className='nav-dropdown' title="Plan your trip" >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
  
                  <Nav.Link href="#action1">Wildfire guidance</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <div className="d-flex justify-content-end d-none d-lg-block">
              <form action="" className="search-bar">
                <input type="search" name="search" pattern=".*\S.*" required />
                <button className="search-btn" type="submit">
                  <span>Search</span>
                </button>
              </form>
              </div>
              
          </Navbar>
      </nav>
    );
  };
  