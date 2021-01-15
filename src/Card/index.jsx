import React from 'react';
import './Card.scss';

const Card = (props) => {
  return (
    <section className='main'>
      <img src={`${props.url}`} />
    </section>
  )
}

export default Card;