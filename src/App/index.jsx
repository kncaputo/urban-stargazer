import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home';
import Header from '../Header';
import Discover from '../Discover';
import Saved from '../Saved';
import './App.scss';

const App = () => {

  return(
    <main>
      <Header />
      <Route exact path='/home' component={Home} />
      <Route exact path='/discover' component={Discover} /> 
      <Route exact path='/saved' component={Saved} />
    </main>
  )
}

export default App;