import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home';
import Header from '../Header';
import Discover from '../Discover';
import Saved from '../Saved';
import './App.scss';

const App = () => {
  const [savedImages, setSavedImages] = useState([])

  const saveImage = (imageDate) => {
    setSavedImages([...savedImages, imageDate]);
  }

  useEffect(() => {
    retrieveFromStorage();
    if (savedImages.length <= 1) {
      saveToStorage(savedImages);
    }
  }, [])

  const retrieveFromStorage = () => {
    const retrievedDates = localStorage.getItem('savedImageDates')
    const imageDates = JSON.parse(retrievedDates)
    setSavedImages([...savedImages, imageDates]);
  }

  const saveToStorage = (imageDates) => {
    localStorage.clear();
    let stringifiedImageDates = JSON.stringify(imageDates);
    localStorage.setItem('savedImageDates', stringifiedImageDates);
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
          savedImageDates={savedImages}
        />
      </Route>
    </main>
  )
}

export default App;