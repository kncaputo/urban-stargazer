import React, { useEffect, useState, useParams } from 'react';
import { fetchPicturePicturesFromRange, fetchPictureFromDate } from '../apiCalls';
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from "react-share";
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
    <main id='discover-main'>
      <section id='image-box'>
        <img src={`${image.url}`} id='image' />
      </section>

      <h2 id='image-title'>{`${image.title}`}</h2>
      <button onClick={() => {handleDiscoverClick()}}>Discover Again</button>

      <section id='button-box'>
        {/* <EmailShareButton 
          url={image.url} 
          id='email-share-button'
          size={32} 
          round={true}
          iconFillColor='white' /> */}
        <button className='media-buttons' onClick={() => {share()}}>Share</button>
        <button className='media-buttons' onClick={() => {saveToStorage(image)}}>Save Image</button>
      </section>


      <section>
        <p id='explanation'>{`${image.explanation}`}</p>
      </section>    
    </main>
  ) 
}

export default Discover;