import React, { useEffect, useState, useParams } from 'react';
import { fetchPicturePicturesFromRange, fetchPictureFromDate } from '../apiCalls';
import './Discover.scss';

const Discover = (props) => {
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

  const saveToStorage = (image) => {
    let imagesToSave = [];
    const retrievedImages = localStorage.getItem('savedImages')
    const images = JSON.parse(retrievedImages)
    if (images) {
      imagesToSave.push(images) 
    }
    imagesToSave.push(image)

    localStorage.clear();
    let stringifiedImages = JSON.stringify(imagesToSave.flat());
    localStorage.setItem('savedImages', stringifiedImages);
  }

  const share = () => {

  }

  return(
    <section>
      <header>
        <h1>Discover Space</h1>
      </header>
      <main>
        <section className='image-box'>
          <img src={`${image.url}`} />
        </section>
        <h2>{`${image.title}`}</h2>
        <p>{`${image.explanation}`}</p>
        <section className='button-box'>
          <button onClick={() => {share()}}>Share</button>
          <button onClick={() => {saveToStorage(image)}}>Save Image</button>
          <button onClick={() => {handleDiscoverClick()}}>Discover Again</button>
        </section>
      </main>
    </section>
  ) 
}

export default Discover;