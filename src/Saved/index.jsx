import React, { useState, useEffect } from 'react';
import './Saved.scss';

const Saved = () => {
  const [savedImages, deleteSavedImages] = useState([])
  
  useEffect(() => {
    retrieveFromStorage();
  }, [])

  const retrieveFromStorage = () => {
    const ids = Object.keys(localStorage);
    
    ids.map(id => {
      const retrievedItem = localStorage.getItem(id)
      const savedImage = JSON.parse(retrievedItem);
      console.log(savedImage)
    })
  }

  return(
    <main>
      <section>
        <p>Hi</p>
      </section>
    </main>
  )
}

export default Saved;