import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mauroImage from "../../assets/yo.png";
import "../../App.css";

const SobreMi = () => {
  return (
    <div name="AcercaDe" id="acerca-de-mi" className="sobre-mi-container">
      <Container>
        <div className="sobre-mi-content">
          <Row className="mb-4">
            <Col sm="12" md="6" className="text-md-end">
              <p className="sobre-mi-title">Sobre mi</p>
            </Col>
            <Col sm="12" md="6">
              <img
                src={mauroImage}
                alt="Mauro Díaz Santilli"
                className="sobre-mi-image"
              />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6" className="text-md-end">
              <p className="sobre-mi-description">
                Soy Mauro Diaz Santilli, gusto en conocerte. Tómate tu
                tiempo y explora.
              </p>
            </Col>
            <Col sm="12" md="6">
              <p className="sobre-mi-description">
                A software developer with experience in building Responsive and
                Scalable Web apps. I am well-knowledged in UI/UX principles and
                practices. In addition to software development, I am also a
                technical writer--simplifying topics/concepts on the web.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SobreMi;
