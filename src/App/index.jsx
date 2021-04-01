import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home';
import Header from '../Header';
import Discover from '../Discover';
import Saved from '../Saved';
import Footer from '../Footer';
import './App.scss';

const App = () => {
  return (
    <main id='app-main'>
      <Header />
      <Route exact path={['/home', '/']} component={Home} />
      <Route exact path='/discover' component={Discover} /> 
      <Route exact path='/saved' component={Saved} />
      <Footer />
    </main>
  )
}

export default App;