import React, { Component, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { fetchPicturePicturesFromRange } from '../apiCalls';
import Home from '../Home';
import Header from '../Header';
import Discover from '../Discover';
import Saved from '../Saved';
import './App.scss';

class App extends Component {


  render() {
    return(
      <main>
        <Header />
        <Route exact path='/home' component={Home} />
        <Route exact path='/discover/:id?' component={Discover} />
        <Route exact path='/saved'>
          <Saved />
        </Route>
      </main>
    )
  }

}

export default App;


// render page showing today's image
// on click show random image