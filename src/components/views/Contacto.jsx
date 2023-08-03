import React from 'react';
import '../../App.css'; 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contacto = () => {
  return (
    <div name='Contacto' className='contacto-container'>
      <Container>
        <Row className='contacto-form'>
          <Col className='contacto-header'>
            <p className='contacto-title'>Contacto</p>
            <p className='contacto-subtitle'>Enviame un mensaje</p>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId='formName'>
                <Form.Control className='input-field' type='text' placeholder='Nombre' />
              </Form.Group>
              <Form.Group controlId='formEmail'>
                <Form.Control className='input-field' type='email' placeholder='Email' />
              </Form.Group>
              <Form.Group controlId='formMessage'>
                <Form.Control className='textarea-field' as='textarea' rows={10} placeholder='Mensaje' />
              </Form.Group>
              <Button className='submit-button' variant='primary' type='submit'>
                Colaboremos!
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacto;
