import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBarCom() {
    return (
        <div>


            <Navbar expand="lg" className="bg-dark">
                <Container>
                    <Navbar.Brand href="#home" className='text-white'>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" ><Link to={'/'} className='text-white text-decoration-none'>Home</Link></Nav.Link>
                            <Nav.Link href="#link" ><Link to={'/view'} className='text-white text-decoration-none'>View</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}

export default NavBarCom