import React, { useState, useEffect } from 'react';
import { fetchPictureFromDate } from '../apiCalls';
import Card from '../Card';
import './Saved.scss';

const Saved = (props) => {
  // const [savedImages, setSavedImages] = useState([]);

  // useEffect(() => {
  //   props.savedImageDates.map(date => {
  //     fetchPictureFromDate(date)
  //     .then(image => setSavedImages([...savedImages, image]))
  //     .catch(error => console.log(error))
  //   })  
  // }, [])

  // const createCards = () => {
  //   savedImages.map(image => {
  //     console.log(image)
  //     return (
  //       <Card 
  //       src={image.url}
  //     />  
  //     )
  //   })
  // }

  return(
    <main>
      <section>
        {/* {createCards()} */}
      </section>
    </main>
  )
}

export default Saved;