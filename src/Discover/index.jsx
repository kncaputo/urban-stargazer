import React, { useEffect, useState } from 'react';
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
      <h1>Discover Space</h1>
      <img src={`${image.url}`} />
      <h2>{`${image.title}`}</h2>
      {/* <button onClick={}>Discover Again</button> */}
    </section>
  ) 
}

export default Discover;