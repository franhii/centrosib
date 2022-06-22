/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Contacto.css';
import { geoCerca, mensaje, whatsapp } from '../../Assets';

const Contacto = () => {
  return (
    <div id='contacto'>
      <div class='contacto'>
        <h1>Contacto</h1>
      </div>
      <div id='nav'>
        <p class='texto-contacto'>
          <strong class='direccion'>
            <img class='geoCerca-ico' src={geoCerca} />
            Av. Estrugamou 250, Venado Tuerto, Santa Fe.
          </strong>
        </p>
      </div>
      <div id='contenido'>
        <div id='izquierda'>
          <form className='form' action='#' method='POST'>
            <input type='text' name='Nombre' placeholder='Ingrese su nombre' />

            <input type='text' name='Email' placeholder='Ingrese su Email' />

            <input
              type='text'
              name='Asunto'
              placeholder='Motivo de la consulta'
            />

            <textarea
              name='Mensaje'
              placeholder='Ingrese su mensaje'
            ></textarea>

            <button className='boton-enviar'>Enviar</button>
          </form>

          <img class='whatsapp-ico' src={whatsapp} />
          <h2>
            <strong>3462-518748</strong>
          </h2>
          <h2>
            <img class='mensaje-ico' src={mensaje} />

            <strong>
              <a href='centrocib@gmail.com' class='email-contacto'>
                centrocib@gmail.com
              </a>
            </strong>
          </h2>
          <h3>Horarios</h3>

          <p>Lunes a Viernes: 08:00 a 20:00</p>
          <p>Sabado, Domingos y Feriados: GUARDIA</p>
          <p></p>
        </div>
        <div id='derecha'>
          <iframe
            className='mapa'
            title='mapa'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.6914545667732!2d-61.972224555328275!3d-33.74279380654516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c8649fbe5239df%3A0x31676de26d740cdf!2sInstituto%20de%20Educaci%C3%B3n%20Superior%20nro.%207%20(ex%20Normal)!5e0!3m2!1ses-419!2sar!4v1654873509381!5m2!1ses-419!2sar'
            width='76%'
            height='369px'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
      <div id='footer'>
        <footer></footer>
      </div>
    </div>
  );
};

export default Contacto;
