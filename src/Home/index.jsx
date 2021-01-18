import React, { Component, useEffect, useState } from 'react';
import background from '../assets/hubble-stars.jpg'
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <main className='home-main' style={{backgroundImage: `url(${background})`}}>
      <h1>Welcome to Urban Stargazer</h1>
      <p>Humans have stared at the starry sky for mellenia. It </p>
      <Link to='/discover'> 
        <button>Click for random image</button>
      </Link>  
    </main>
  )
}

export default Home;