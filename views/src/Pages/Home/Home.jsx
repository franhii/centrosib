import React from 'react';
import './Home.css';
import { sibBanner } from '../../Assets/';

const Home = () => {
  return (
    <section class='home bd-grid' id='home'>
      <div class='home__data'>
        <h1 class='home__title'>
          ODONTOLOGICA <br />
          <samp class='home__title-color'>SIB</samp>
          <br />
        </h1>
        <a href='#contact' class='button'>
          Contact
        </a>
      </div>
      <div class='home__social'>
        <a href='#' class='home__social-icon'>
          <i class='bx bxl-instagram'></i>
        </a>
        <a href='#' class='home__social-icon'>
          <i class='bx bxl-facebook'></i>
        </a>
        <a href='#' class='home__social-icon'></a>
      </div>
      <div class='home__img'>
        <img src={sibBanner} alt='banner sib' />
      </div>
    </section>
  );
};
export default Home;
