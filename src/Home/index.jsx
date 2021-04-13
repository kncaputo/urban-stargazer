import React from 'react';
import background from '../assets/hubble-stars.jpg'
import { Link } from 'react-router-dom';
import { homeText } from './homeText';
import './Home.scss'

const Home = () => {

  return (
    <main data-testid='home' className='home-main' style={{backgroundImage: `url(${background})`}}>
      <section className='home-content-wrapper'>
        <h1 id='home-title' data-testid='home-title'>Welcome to Urban Stargazer</h1>

        <section className='box'>
          <section className='aside'></section>
          <section className='center'>
            <p className='center-text' data-testid='home-text'>
            {homeText}
            </p>
          </section>
          <section className='aside'></section>
        </section>

        <Link to='/discover'> 
          <button id='explore-cosmos-button'>Click to explore the cosmos</button>
        </Link>  
      </section>
    </main>
  )
}

export default Home;