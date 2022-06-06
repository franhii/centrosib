import React from "react"
import "./Skills.css";
const Skills
    = () => {
        return (
            <section class="skills section" id="skills">
                <h2 class="section-title">Profesionales</h2>
                <div class="skills__container bd-grid">
                    <div>
                        <h2 class="skills__subtitle">Profesional Skills</h2>
                        <p class="skills__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus illo, eum iure tenetur deserunt nostrum dolore quidem.</p>

                        <div class="skills__data">
                            <div class="skills__names">
                                <span class="skills__name">Tip profes</span>
                            </div>
                            <div>
                                <span class="skills__percentage"></span>
                            </div>
                            <div class="skills__bar skills__html"></div>
                        </div>

                        <div class="skills__data">
                            <div class="skills__names">
                                <span class="skills__name">Ortodoncia</span>
                            </div>
                            <div>
                                <span class="skills__percentage"></span>
                            </div>
                            <div class="skills__bar skills__html"></div>
                        </div>

                    </div>
                    
                </div>
            </section>
        )
    }


export default Skills;    