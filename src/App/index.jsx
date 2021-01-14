import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Header from '../Header';
import Discover from '../Discover';
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
        <Route path='/'>
          <Discover />
        </Route>
      </main>
    )
  }

}

export default App;
