import React, { useState, useEffect } from 'react';
import { Route, useParams } from 'react-router-dom';
import { fetchPicturePicturesFromRange } from '../apiCalls';
import Home from '../Home';
import Header from '../Header';
import Discover from '../Discover';
import Saved from '../Saved';
import './App.scss';

const App = () => {
  const [savedImages, setSavedImages] = useState([])

  const saveImage = (imageId) => {
    setSavedImages([...savedImages, imageId]);
  }

  useEffect(() => {
    retrieveFromStorage();
    if (savedImages.length <= 1) {
      saveToStorage(savedImages);
    }
  }, [])

  const retrieveFromStorage = () => {
    const retrievedIds = localStorage.getItem('savedImageDates')
    const imageIds = JSON.parse(retrievedIds)
    setSavedImages([...savedImages, imageIds]);
  }

  const saveToStorage = (imageId) => {
    localStorage.clear();
    let stringifiedImageId = JSON.stringify(imageId);
    localStorage.setItem('savedImageDates', stringifiedImageId);
  }


  return(
    <main>
      <Header />
      <Route exact path='/home' component={Home} />
      <Route exact path='/discover'> 
        <Discover 
          saveToStorage={saveImage}
        />
      </Route>  
      <Route exact path='/saved'>
        <Saved 
          savedImageIds={savedImages}
        />
      </Route>
    </main>
  )
}

export default App;