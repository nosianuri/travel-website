import { signOut } from 'firebase/auth';
import React from 'react';
// import SearchIcon from "@material-ui/icons/Search";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/"><img height={40} src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/home#services">Services</Nav.Link>
              <Nav.Link href="/home#guiders">Guiders</Nav.Link>
              {/* <div className='header__center'>
                <input type="text" />
                <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
            </div> */}
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="about">About</Nav.Link>
              {
                user && <>
                  <Nav.Link as={Link} to="addservice">Add</Nav.Link>
                  <Nav.Link as={Link} to="manage">Manage</Nav.Link>
                  <Nav.Link as={Link} to="bookings">Booking</Nav.Link>
                </>
              }
              {
                user ?
                <button className='btn btn-link text-decoration-none' onClick={handleSignOut}>Sign out </button>
                :
                <Nav.Link as={Link} to="login">Login</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;