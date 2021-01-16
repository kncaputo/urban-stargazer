import React from 'react';
import './Card.scss';

const Card = (props) => {
  const { url, title } = props;
  console.log(url)
  console.log(props)
  return (
    <section className='main' key={title}>
      <img src={`${url}`} alt={title} />
    </section>
  )
}

export default Card;