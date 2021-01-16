import React, { useState, useEffect } from 'react';
import { fetchPictureFromDate } from '../apiCalls';
import Card from '../Card';
import './Saved.scss';

const Saved = (props) => {
  const [savedImages, setSavedImages] = useState([]);

  useEffect(() => {
    const retrievedImages = localStorage.getItem('savedImages')
    let images = JSON.parse(retrievedImages)
    setSavedImages(images)
  }, [])

  const deleteSavedImage = (date) => {
  //   const newSavedImages = savedImages.map(savedImage => {
  //     return savedImage.date !== date
  //   })
    
  //   localStorage.clear();
  //   let stringifiedImages = JSON.stringify(newSavedImages);
  //   localStorage.setItem('savedImages', stringifiedImages);
  }

  const createCards = () => {
    if (savedImages !== null) {
      return savedImages.map(image => {
        const { url, title, date } = image;
        return (
          <Card 
          key={date}
          src={`${url}`}
          title={title}
          date={date}
          deleteSavedImage={deleteSavedImage}
        />  
        )
      })
    }
  }

  return(
    <main id='card-box'>
      {createCards()}
    </main>
  )
}

export default Saved;