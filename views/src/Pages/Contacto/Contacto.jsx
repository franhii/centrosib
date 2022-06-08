import React from 'react'
import "./Contacto.css"

const Contacto = () => {
  return (
    <div>
      <div className="header-contact-details">
						<span className="call-details"> <span className="tel-details">Tel.</span> <a href="tel:3462 518748" className="tel"> 3462 518748 </a> </span>
						<span className="email-details"> <span className="mail-details">Email.</span> <a href="centrocib@gmail.com.ar" className="mail">centrosib@gmail.com.ar</a> </span>
					</div>
    </div>
  )
}

export default Contacto