import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import '../../App.css';

const Inicio = () => {
  return (
    <div name="inicio" className="inicio-container mainSection">
      <Container className="mainSection">
            <h2 className="inicio-heading">
              Hola! Soy Desarrollador Web Full Stack
            </h2>
            <p className="inicio-text">
              Actualmente, estoy trabajando en aplicaciones web usando tecnologias como
              React, Tailwind, Next.js y Mongodb.
            </p>
            <div>
              <Link
                to="AcercaDe"
                smooth
                duration={500}
                className="inicio-link"
              >
                Sobre mi
                <HiArrowNarrowRight size={25} className="ml-3" />
              </Link>
            </div>
      </Container>
    </div>
  );
};

export default Inicio;