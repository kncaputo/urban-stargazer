import React from 'react';
import './Card.scss';

const Card = (props) => {
  const { src, title, date, openModal } = props;
 
  return (
    <section className='card' data-testid={`card-${date}`} onClick={() => openModal(date) }>
      <img className='card-image' src={`${src}`} alt={title} />
    </section>
  )
}

export default Card;