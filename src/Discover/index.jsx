import React, { useEffect, useState, useParams } from 'react';
import { fetchPicturePicturesFromRange, fetchPictureFromDate } from '../apiCalls';
import './Discover.scss';

const Discover = () => {
  const [image, setImage] = useState({});

  useEffect(() => {
    fetchPictureFromDate('2020-12-01')
    .then(image => setImage(image))
    .catch(error => console.log(error))
  }, image);

  const generateRandomDate = () => {
    const year = `20${getRandomValue(28)}`;
    const month = `${getRandomValue(12)}`
    const day = `${getRandomValue(20)}`
  }

  // date function
  const getRandomValue = (multiple) => {
    let value = Math.floor((Math.random() *  multiple) + 1)
    value = value.toString();

    if (value.length < 2) {
      value = '0' + value;
    }
    return value
  }


  const handleClick = () => {

  }
  return(
    <section>
      <header>
        <h1>Discover Space</h1>
      </header>
      <main>
        <img src={`${image.url}`} />
        <h2>{`${image.title}`}</h2>
        <p>{`${image.explanation}`}</p>
        <button onClick={() => {handleClick()}}>Discover Again</button>
      </main>
    </section>
  ) 
}

export default Discover;