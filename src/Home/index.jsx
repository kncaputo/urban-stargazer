import React from 'react';
import background from '../assets/hubble-stars.jpg'
import { Link } from 'react-router-dom';
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
            Humans have stared at the starry sky and contemplated the cosmos for millennia. 
            It's an inextricable part of human nature. But with 80% of the world's population 
            now living under a light polluted sky (darksky.org), and with increasing numbers 
            of satellites being put into orbit for telecommunications, our night sky is 
            dramatically changing. 
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