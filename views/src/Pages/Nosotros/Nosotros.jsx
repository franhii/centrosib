import React from 'react'
import './Nosotros.css'
import { doctores } from '../../Assets';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
function Nosotros(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
    return (
        <div>
            <div> <h1>Sobre nosotros</h1></div>
            <br />
            <div className='doc'><img src={doctores}alt=""/></div>
            <div>
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
