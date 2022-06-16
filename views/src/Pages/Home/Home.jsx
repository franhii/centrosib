
import React from 'react'
import './Home.css';
import {sibBanner, consultorio} from "../../Assets/"


const Home
    = () => {
        return (
          <section className='home bd-grid'>
            <div className='home__data'>
              <h1 className='home__title'>
                ODONTOLOGICA <br />
                <samp className='home__title-color'>SIB</samp>
                <br />
              </h1>
              <a href='#contact' className='button'>
                Contact
              </a>
            </div>

            <div class='home__social'>
              <a href='https://www.instagram.com/' target={"_blank"} class='home__social-icon'>
                <i class='bx bxl-instagram'></i>
              </a>
              <a href='#' class='home__social-icon'>
                <i class='bx bxl-facebook'></i>
              </a>
              <a href='#' class='home__social-icon'></a>
            </div>

            <div className='home__img'>
              <img src={sibBanner} alt='banner sib' />
            </div>

            <section>
                <div className="profile_card">
                  <img  src={consultorio} alt="" />
                  <button class="toggle-btn" id='toggleBtn'>
                    <i class='fas fa-arrow-up'></i>
                  </button>
                  <div className="info" id='info'>
                  </div>
                  <h4 class="name">Pedrito Perez</h4>
                  <p class="profession">Odontologo de tu vieja</p>
                </div>
            </section>

          </section>
          
         
        );
    }
export default Home;
