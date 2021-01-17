import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home';
import Header from '../Header';
import Discover from '../Discover';
import Saved from '../Saved';
import nasaLogo from '../assets/NASA_Worm_logo.png';
import './App.scss';

const App = () => {

  return(
    <main id='app-main'>
      <Header />
      <Route exact path='/home' component={Home} />
      <Route exact path='/discover' component={Discover} /> 
      <Route exact path='/saved' component={Saved} />
      <footer id='footer'>
        <p>Photos brought to you by NASA's Astronomy Picture of the Day archive</p>
        <img id='logo' src={nasaLogo} alt='NASA logo' />
      </footer>
    </main>
  )
}

export default App;