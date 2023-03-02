import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
import logo1 from '../Assets/bylogo (1).png'
import logo2 from '../Assets/bayels flag.jpeg'
import '../Style/Navbar.css'

export default function App() {
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
              <MDBNavbarLink id='home' aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink id='about' href='#'>About us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink id='contact' href='#'>Contact us</MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>
        <img src={logo2} alt="" id='logo2' />
      </MDBContainer>
    </MDBNavbar>
  );
}