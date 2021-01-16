import React, { useEffect, useState, useParams } from 'react';
import { fetchPicturePicturesFromRange, fetchPictureFromDate } from '../apiCalls';
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from "react-share";
import { saveToLocalStorage, filterData } from '../utilities';
import './Discover.scss';

const Discover = (props) => {
  const [image, setImage] = useState({});

  useEffect(() => {
    generateRandomImage();
  }, []);

  const generateRandomImage = () => {
    const date = generateRandomDate();

    fetchPictureFromDate(date)
    .then(data => {
      const image = filterData(data);
      setImage(image);
    })
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

  const retrieveFromLocalStorage = () => {
    const retrievedImages = localStorage.getItem('savedImages')
    return JSON.parse(retrievedImages)
  }

  const handleToggleSave = () => {
    image.isSaved === false ? saveImage() : removeFromSaved();
  }

  const saveImage = () => {
    let imagesToSave = [];
    
    const images = retrieveFromLocalStorage();
    if (images) {
      imagesToSave.push(images) 
    }
    imagesToSave.push(image)
    imagesToSave = imagesToSave.flat();

    saveToLocalStorage(imagesToSave);
    setImage({ ...image, isSaved: true });
  }

  const removeFromSaved = () => {
    const { date } = image;
    const images = retrieveFromLocalStorage();

    const newSavedImages = images.filter(savedImage => {
      return savedImage.date !== date;
    })
    saveToLocalStorage(newSavedImages);
    setImage({ ...image, isSaved: false });
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
        {image.isSaved === false ?
          <button className='media-buttons' onClick={() => {handleToggleSave()}}>Save Image</button> :
          <button className='media-buttons' onClick={() => {handleToggleSave()}}>Remove From Saved</button>
        }
      </section>


      <section>
        <p id='explanation'>{`${image.explanation}`}</p>
      </section>    
    </main>
  ) 
}

export default Discover;