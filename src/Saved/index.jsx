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

  const createCards = () => {
  
    return savedImages.map(image => {
      return (
        <Card 
        key={image.date}
        src={`${image.url}`}
      />  
      )
    })
  }

  return(
    <main id='card-box'>
      {createCards()}
    </main>
  )
}

export default Saved;