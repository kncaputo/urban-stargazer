import React from 'react';
import './Card.scss';

const Card = (props) => {
  const { url, title } = props;
 
  return (
    <section className='card' key={title}>
      <img className='card-image' src={`${props.src}`} alt={title} />
    </section>
  )
}

export default Card;