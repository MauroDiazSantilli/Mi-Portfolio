import "../../App.css"
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink} from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Menu = () => {
  
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg" className="fixed-top mainSection">
        <Container>
          <Navbar.Brand as={NavLink} to={'/'}>MDS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink end className='nav-item nav-link' to={'/'}>Inicio</NavLink>
              <NavLink end className='nav-item nav-link' to={'/acerca'}>Sobre mi</NavLink>
              <NavLink end className='nav-item nav-link' to={'/habilidades'}>Habilidades</NavLink>
              <NavLink end className='nav-item nav-link' to={'/proyectos'}>Proyectos</NavLink>
              <NavLink end className='nav-item nav-link' to={'/contacto'}>Contacto</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  <ul class='social-menu'> 
    <li class='social-item linkedin'>
      <a href='/'>Linkedin<FaLinkedin size={30} /></a>
    </li>
    <li class='social-item github'>
      <a href='/'>Github<FaGithub size={30} /></a>
    </li>
    <li class='social-item email'>
      <a href='/'>Email<HiOutlineMail size={30} /></a>
    </li>
    <li class='social-item resume'>
      <a href='/'>CV<BsFillPersonLinesFill size={30} /></a>
    </li>
  </ul>
</div>
  );
};

export default Menu;