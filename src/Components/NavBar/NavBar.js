import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'
import Logo from './Logo';
import './NavBar.css'

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> <Logo/> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Celulares</Nav.Link>
            <Nav.Link href="#pricing">Televisores</Nav.Link>
            <Nav.Link href="#pricing">Auriculares</Nav.Link>
           
          </Nav>
          <Nav.Link href="#pricing">   <CartWidget/>   </Nav.Link>
        </Container>
      </Navbar>

      </>
      );
}

export default NavBar;