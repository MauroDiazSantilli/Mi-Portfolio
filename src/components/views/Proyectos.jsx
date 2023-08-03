import React from 'react';
import code from '../../assets/code2.png';
import { Button } from 'react-bootstrap';
import '../../App.css'; 

const Proyectos = () => {
  return (
    <div name='work' className='proyectos-container'>
      <div className='proyectos-content'>
        <div className='proyecto-card'>
          <div
            className='proyecto-image'
            style={{ backgroundImage: `url(${code})` }}
          />
          <div className='proyecto-details'>
            <p className='proyecto-title'>Aplicacion</p>
            <p className='proyecto-description'>
              Una aplicacion web hecha con React y MongoDB
            </p>
            <div className='proyecto-buttons'>
              <Button variant='outline-light'>Muestra</Button>
              <Button variant='outline-light'>Codigo</Button>
            </div>
          </div>
        </div>
        <div className='proyecto-card'>
          <div
            className='proyecto-image'
            style={{ backgroundImage: `url(${code})` }}
          />
          <div className='proyecto-details'>
            <p className='proyecto-title'>Aplicacion</p>
            <p className='proyecto-description'>
              Una aplicacion web hecha con React y MongoDB
            </p>
            <div className='proyecto-buttons'>
              <Button variant='outline-light'>Muestra</Button>
              <Button variant='outline-light'>Codigo</Button>
            </div>
          </div>
        </div>
        <div className='proyecto-card'>
          <div
            className='proyecto-image'
            style={{ backgroundImage: `url(${code})` }}
          />
          <div className='proyecto-details'>
            <p className='proyecto-title'>Aplicacion</p>
            <p className='proyecto-description'>
              Una aplicacion web hecha con React y MongoDB
            </p>
            <div className='proyecto-buttons'>
              <Button variant='outline-light'>Muestra</Button>
              <Button variant='outline-light'>Codigo</Button>
            </div>
          </div>
        </div>
        <div className='proyecto-card'>
          <div
            className='proyecto-image'
            style={{ backgroundImage: `url(${code})` }}
          />
          <div className='proyecto-details'>
            <p className='proyecto-title'>Aplicacion</p>
            <p className='proyecto-description'>
              Una aplicacion web hecha con React y MongoDB
            </p>
            <div className='proyecto-buttons'>
              <Button variant='outline-light'>Muestra</Button>
              <Button variant='outline-light'>Codigo</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
