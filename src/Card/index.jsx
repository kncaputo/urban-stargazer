import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ src, title, date, openModal }) => {
 
  return (
    <section className='card' data-testid={`card-${date}`} onClick={() => openModal(date) }>
      <img className='card-image' src={`${src}`} alt={title} />
    </section>
  )
}

export default Card;

Card.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  openModal: PropTypes.func
};