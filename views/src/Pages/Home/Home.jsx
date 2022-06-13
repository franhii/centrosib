
import React from 'react'
import './Home.css';
import {sibBanner} from "../../Assets/"

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

              <div className='home__img'>
                <img src={sibBanner} alt='banner sib' />
              </div>
            </section>
          
        );
    }
export default Home;
