import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header';
import Discover from '../Discover';
import Saved from '../Saved';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {

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
