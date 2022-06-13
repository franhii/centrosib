import React from 'react'
import './Nosotros.css'
import { doctores, slider1,slider2,slider3,slider4 } from '../../Assets'; /* Asi importamos imagenes */
function Nosotros() {
    return (
        <div>
            <div> <h1>Sobre nosotros</h1></div>
            <br />
            <div className='doc'><img src={doctores}alt=""/></div>   
            <div className="carrusel">
                <div className="grande">
                    <img src={slider1} alt="imagen 1" className="img"/>
                    <img src="#" alt="imagen 2" className="img"/>
                </div>
            </div>
            <div >
                <h3>Los orígenes de CentroSib se remontan al año 1950,
                    cuando un grupo de prestigiosos profesionales de la Odontología se agrupan.
                    Con la llegada del nuevo milenio, esta unión se potenció,
                    generando relaciones de mutuo beneficio y optimizando sus prestaciones 
                    a través de una gestión innovadora, eficiente y sustentable. 
                    Esta sinergia ha consolidado a CentroSib como uno de los más
                    importantes a nivel nacional en términos cuantitativos y cualitativos.
                </h3>
            </div>
            <br />
            <div>
                <h3>
                La trayectoria del Centro Odontológico Privado comienza en el año 1991, 
                con el objetivo de brindar a sus pacientes una odontología de excelencia 
                y al mismo tiempo, como en las grandes ciudades del mundo,
                contar con todas las especialidades odontológicas en un mismo Centro,
                lo que facilita el trabajo interdisciplinario y brinda comodidad y
                ahorro de tiempo al paciente.
                TODO LO QUE EL PACIENTE NECESITA,
                EN DIAGNÓSTICO Y TRATAMIENTO ODONTOLOGICO, 
                DE FORMA ÁGIL Y EN UN MISMO LUGAR
                </h3>
            </div>
            <div>
                               
            </div>
        </div>
    );
return
}

export default Nosotros;
