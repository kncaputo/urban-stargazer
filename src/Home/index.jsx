import React, { Component, useEffect, useState } from 'react';
import background from '../assets/hubble-stars.jpg'
import { Link } from 'react-router-dom';
import './Home.scss'

const Home = () => {

  return (
    <main className='home-main' style={{backgroundImage: `url(${background})`}}>
      <h1>Welcome to Urban Stargazer</h1>

      <section className='box'>
        <section className='aside'></section>
        <p className='center'>
          Humans have stared at the starry sky and contemplated the cosmos for millennia. 
          It is an essential part of human nature. 
          But with 80% of the world's population now living under a light polluted sky (darksky.org), 
          and with increasing numbers of satellites being put into orbit for telecommunications, 
          our night sky is dramatically changing.
        </p>
        <section className='aside'></section>
      </section>

      <Link to='/discover'> 
        <button>Click for random image</button>
      </Link>  
    </main>
  )
}

export default Home;