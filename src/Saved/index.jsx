import React, { useState, useEffect } from 'react';
import { fetchPictureFromDate } from '../apiCalls';
import Card from '../Card';
import './Saved.scss';

const Saved = (props) => {
  const [savedImages, setSavedImages] = useState([]);

  useEffect(() => {
    const retrievedImages = localStorage.getItem('savedImages')
    let images = JSON.parse(retrievedImages)
    setSavedImages([...savedImages, images])
  }, [])

  const createCards = () => {
    let images = savedImages;
    console.log("images", images)

    return images.map(image => {
      console.log("image", image)
      return (
        <Card 
        key={image.date}
        src={`${image}`}
      />  
      )
    })
  }

  return(
    <main>
      <section>
        {createCards()}
      </section>
    </main>
  )
}

export default Saved;