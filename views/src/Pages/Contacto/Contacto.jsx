import React from 'react'
import "./Contacto.css"

const Contacto = () => {
  return (
    <div id="contacto">
      <p>Para comunicarte con nosotros:</p>
      <div id="izquierda">
        <p class="texto-contacto">
          Celular: <strong>3462-518748</strong><br></br>
          Direccion:<strong>Av. Estrugamou 250, Venado Tuerto, Santa Fe.</strong><br></br>
          Email: <strong><a href="centrocib@gmail.com" class="email-contacto">centrocib@gmail.com</a></strong>
        </p>
      </div>
      <div id="derecha">
        <form action='#' method='POST'>
          <input type="text" name="Nombre" placeholder="Ingrese su nombre"></input>
        <br></br>
          <input type="text" name="Email" placeholder="Ingrese su Email"></input>
        
          <input type="text" name="Asunto" placeholder="Motivo de la consulta"></input>
        <br></br>
        <textarea name="Mensaje" placeholder="Ingrese su mensaje"></textarea>
        <br></br>
        <input type="submit" name="Enviar" value="Enviar Consulta"></input>
        </form>
      </div>
      <br></br>
      <div id="Mapa">
      <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.6914545667732!2d-61.972224555328275!3d-33.74279380654516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c8649fbe5239df%3A0x31676de26d740cdf!2sInstituto%20de%20Educaci%C3%B3n%20Superior%20nro.%207%20(ex%20Normal)!5e0!3m2!1ses-419!2sar!4v1654873509381!5m2!1ses-419!2sar" width="800" height="450" style={{float: 'center'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    
    </div>
    
    
  )
}

export default Contacto