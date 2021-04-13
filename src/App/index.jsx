import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Header from '../Header';
import Discover from '../Discover';
import Saved from '../Saved';
import Error from '../Error';
import Footer from '../Footer';
import './App.scss';
import { generateRandomDate } from '../utilities/utilities';

const App = () => {
  return (
    <main id='app-main'>
      <Header />
      <Switch>
        <Route exact path={['/home', '/']} component={Home} />
        <Route exact path='/discover' render={() => {
          const date = generateRandomDate()
          return <Redirect to={`/discover/${date}`} />
        }} />
        <Route exact path='/discover/:date' 
          render={({ match }) => {
            const date = match.params.date
            return(
              <Discover dateUrl={date}/>
            )
          }} 
        />
        <Route exact path='/saved' component={Saved} />
        <Route path='/' component={Error} />
      </Switch>
      <Footer />
    </main>
  )
}

export default App;