import React, { Component, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { fetchPictureOfDay } from '../apiCalls';
import Header from '../Header';
import Discover from '../Discover';
import Saved from '../Saved';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    }
  }

  componentDidMount() {
    fetchPictureOfDay()
    .then(data => console.log(data))
  }

  render() {
    return(
      <main>
        <Header />
        <Route exact path='/'>
          <Discover />
        </Route>
        <Route exact path='/saved'>
          <Saved />
        </Route>
      </main>
    )
  }

}

export default App;
