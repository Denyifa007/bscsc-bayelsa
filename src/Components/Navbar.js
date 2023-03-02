import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import logo1 from '../Assets/bylogo (1).png'
import logo2 from '../Assets/bayels flag.jpeg'
import '../Style/Navbar.css'
import {Link} from 'react-router-dom';

export default function Navbar() {
  const [showNavCentred, setShowNavCentred] = useState(false);

  return (
    <MDBNavbar id='navbar' fixed='top' expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <img src={logo1} alt="" id='logo1' />
        <MDBNavbarToggler
          type='button'
          data-target='#navbarCenteredExample'
          aria-controls='navbarCenteredExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavCentred(!showNavCentred)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse className='collapse'  navbar show={showNavCentred} center id='navbarCenteredExample'>
          <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <Link id='home' aria-current='page' href='#' to="/">
                Home
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="Aboutus" id='about' href='#'>About us</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to='Contactus' id='contact' href='#'>Contact us</Link>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>
        <img src={logo2} alt="" id='logo2' />
      </MDBContainer>
    </MDBNavbar>
  );
}