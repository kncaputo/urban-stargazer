import React, { Component, useEffect, useState } from 'react';
import background from '../assets/hubble-stars.jpg'
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <main id='home-main'>
      <h1>Welcome to Urban Stargazer</h1>
      <Link to='/discover'> 
        <button>Click for random image</button>
      </Link>  
    </main>
  )
}

export default Home;