import React from 'react';
import './Card.scss';

const Card = (props) => {
  const { src, title, date, deleteSavedImage } = props;
 
  return (
    <section className='card' onClick={() => deleteSavedImage(date) }>
      <img className='card-image' src={`${src}`} alt={title} />
    </section>
  )
}

export default Card;