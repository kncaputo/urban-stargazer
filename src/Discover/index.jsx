import React, { useEffect, useState, useParams } from 'react';
import { fetchPicturePicturesFromRange, fetchPictureFromDate } from '../apiCalls';
import './Discover.scss';

const Discover = () => {
  const [image, setImage] = useState({});

  useEffect(() => {
    generateRandomImage();
  }, []);

  const generateRandomImage = () => {
    const date = generateRandomDate();

    fetchPictureFromDate(date)
    .then(image => setImage(image))
    .catch(error => console.log(error))
  }

  const generateRandomDate = () => {
    const year = `20${getRandomValue(20)}`;
    const month = `${getRandomValue(12)}`
    const day = `${getRandomValue(28)}`

    return `${year}-${month}-${day}`;
  }

  // date function
  const getRandomValue = (multiple) => {
    let value = Math.floor((Math.random() *  multiple) + 1)
    value = value.toString();

    if (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  const handleDiscoverClick = () => {
    generateRandomImage();
  }

  const saveToStorage = () => {
    let stringifiedImage = JSON.stringify(image);
    let ImageId = Date.now();
    localStorage.setItem(savedImagesId, stringifiedImage)
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
        <button onClick={() => {handleDiscoverClick()}}>Discover Again</button>
        {/* <button onClick={() => {saveToStorage()}}>Save Image</button> */}
      </main>
    </section>
  ) 
}

export default Discover;