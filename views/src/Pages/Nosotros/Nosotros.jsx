import React from 'react'
import './Nosotros.css';
import {doctores} from "../../Assets/"
const Nosotros
    = () => {
        return (
            <section class="about section" id="about">
                <h2 class="section-title">About</h2>
                <div class="about__container bd-grid">
                    <div class="about_img">
                    <img src={doctores} alt="doctores"/>
                    </div>
                    <div>
                        <h2 class="about__subtitle">Hola ke miras, Odontologica</h2>
                        <p class="about__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque a doloribus molestiae neque asperiores error impedit suscipit esse adipisci molestias repellendus eius culpa aliquam, voluptas quasi harum, sunt quas voluptatum.</p>
                    </div>
                </div>
            </section>
        )
    }

export default Nosotros;