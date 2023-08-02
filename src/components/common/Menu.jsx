import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate} from 'react-router-dom';


const Menu = () => {
  
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>Mauro Diaz Santilli</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className='nav-item nav-link' to={'/'}>Inicio</NavLink>
            <NavLink end className='nav-item nav-link' to={'/registro'}>Registro</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;