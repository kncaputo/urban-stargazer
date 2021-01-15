import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [todayImage, getTodayImage] = useState({})
  
  useEffect = () => {
    // get today's image on page load
  } 

  return (
    <section>

    <Link to='/discover'> 
      <button>Click for random image</button>
    </Link>  
    </section>
  )
}

export default Home;