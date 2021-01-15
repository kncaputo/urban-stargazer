import React from 'react';
import './Card.scss';

const Card = (prop) => {
  return (
    <section className='main'>
      <img src={`${prop.url}`} />
    </section>
  )
}

export default Card;