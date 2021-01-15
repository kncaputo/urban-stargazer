import React from 'react';
import { Route, useParams } from 'react-router-dom';
import { fetchPicturePicturesFromRange } from '../apiCalls';
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
      <Route exact path='/discover/:date?' component={Discover} />
      <Route exact path='/saved'>
        <Saved />
      </Route>
    </main>
  )
}

export default App;


// render page showing today's image
// on click show random image