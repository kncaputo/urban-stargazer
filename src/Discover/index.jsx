import React, { useEffect, useState, useParams } from 'react';
import { fetchPicturePicturesFromRange, fetchPictureFromDate } from '../apiCalls';
import './Discover.scss';

const Discover = () => {
  const [image, setImage] = useState({});

  useEffect(() => {
    fetchPictureFromDate('2020-12-01')
    .then(image => setImage(image))
    .catch(error => console.log(error))
  }, image)

  return(
    <section>
      <header>
        <h1>Discover Space</h1>
      </header>
      <main>
        <img src={`${image.url}`} />
        <h2>{`${image.title}`}</h2>
        <p>{`${image.explanation}`}</p>
        {/* <button onClick={}>Discover Again</button> */}
      </main>
    </section>
  ) 
}

export default Discover;