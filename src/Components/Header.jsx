import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {  Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const Wishlistarray=useSelector((state)=>state.wishlistReducer)
  const cartarray=useSelector((state)=>state.cartReducer)
  return (
    <>
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Link to={'/'}><Navbar.Brand className='text-light' ><FontAwesomeIcon icon={faCartShopping} beat className='me-2'/>E-Cart</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link >
               <Link to={'/Wishlist'}> <button className='btn btn-outline-light'><FontAwesomeIcon icon={faHeart} className='me-2 text-danger'/>Wish List<Badge bg="secondary" className='ms-2'>{Wishlistarray.length}</Badge></button></Link>
                </Nav.Link>
            <Nav.Link>
            <Link to={'/Cart'}><button className='btn btn-outline-light'><FontAwesomeIcon icon={faCartShopping} style={{color: "#FFD43B",}} className='me-2' />Cart<Badge bg="secondary" className='ms-2'>{cartarray.length}</Badge></button></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header