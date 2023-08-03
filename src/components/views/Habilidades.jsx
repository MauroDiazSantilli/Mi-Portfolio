import React from 'react';
import { Container } from 'react-bootstrap';
import '../../App.css';

const Habilidades = () => {
  return (
    <div name='Habilidades' className='habilidades-container'>
      <Container>
        <div className='p-4'>
          <div className='w-full flex justify-center items-center flex-col mb-7'>
            <p className='habilidades-title'>Habilidades</p>
            <p className='habilidades-description'>
              Disfruto lanzarme y aprender cosas nuevas. He trabajado con estas tecnologias:
            </p>
          </div>
          <div className='habilidades-grid'>
            <div className='habilidades-item'>
              <p>HTML</p>
            </div>
            <div className='habilidades-item'>
              <p>CSS</p>
            </div>
            <div className='habilidades-item'>
              <p>JAVASCRIPT</p>
            </div>
            <div className='habilidades-item'>
              <p>REACT</p>
            </div>
            <div className='habilidades-item'>
              <p>GITHUB</p>
            </div>
            <div className='habilidades-item'>
              <p>NODE JS</p>
            </div>
            <div className='habilidades-item'>
              <p>MONGO DB</p>
            </div>
            <div className='habilidades-item'>
              <p>FIGMA</p>
            </div>
            <div className='habilidades-item'>
              <p>POSTMAN</p>
            </div>
            <div className='habilidades-item'>
              <p>BOOTSTRAP</p>
            </div>
            <div className='habilidades-item'>
              <p>Tailwind</p>
            </div>
            <div className='habilidades-item'>
              <p>PostCSS</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Habilidades;
