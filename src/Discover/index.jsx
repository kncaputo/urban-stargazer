import React, { useEffect, useState } from 'react';
import { fetchPictureFromDate } from '../apiCalls';
import { BsStar, BsFillStarFill } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { saveToLocalStorage, filterData } from '../utilities/utilities';
import { useHistory } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Error from '../Error';
import './Discover.scss';

const Discover = ({ dateUrl }) => {
  const [image, setImage] = useState({});
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  const { title, url, date } = image;

  useEffect(() => {
    generateRandomImage();
  }, []);

  const generateRandomImage = () => {
    !dateUrl ? fetchImage(generateRandomDate()) : fetchImage(dateUrl)

    setIsSaved(false);
  }

  const fetchImage = (date) => {
    fetchPictureFromDate(date)
    .then(data => {
      const image = filterData(data);
      setImage(image);
      history.push(`/discover/${date}`);
    })
    .catch(error => setError(true))
  }

  const generateRandomDate = () => {
    const year = `20${getRandomValue(20)}`;
    const month = `${getRandomValue(12)}`;
    const day = `${getRandomValue(28)}`;

    return `${year}-${month}-${day}`;
  }

  const getRandomValue = (multiple) => {
    let value = Math.floor((Math.random() *  multiple) + 1);
    value = value.toString();

    if (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  const handleDiscoverClick = () => {
    fetchImage(generateRandomDate())
  }

  const retrieveFromLocalStorage = () => {
    const retrievedImages = localStorage.getItem('savedImages')
    return JSON.parse(retrievedImages)
  }

  const handleToggleSave = () => {
    isSaved === false ? saveImage() : removeFromSaved();
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
    setIsSaved(true);
  }

  const removeFromSaved = () => {
    const { date } = image;
    const images = retrieveFromLocalStorage();

    const newSavedImages = images.filter(savedImage => {
      return savedImage.date !== date;
    })
    saveToLocalStorage(newSavedImages);
    setIsSaved(false);
  }

  const checkErrors = () => {
    
  }

  // {
  //   !error ? 
  //     <Switch>
  //       <Route />
  //     </Switch>
  //     :
  //   <Error />
  // }
  return(
    <>
      {
        !error ? 
          <IconContext.Provider value={{ color: 'white' }}>
            <main id='discover-main'>
              <section id='image-box'>
                <div id='image-wrapper'>
                  <img src={`${url}`} id='image' alt={`${title} from ${date}`}/>
                </div>
              </section>

              <section id='details-box'>
                <h2 id='image-title'>{`${image.title}`}</h2>

                <section id='button-box'>
                  {isSaved === false ? 
                    <BsStar className='media-icons icon' size={27} onClick={() => {handleToggleSave()}} alt='Save image' data-testid='save-icon'/> :
                    <BsFillStarFill className='media-icons icon' size={27} onClick={() => {handleToggleSave()}} alt='Remove from Saved' />
                  }
                  <button className='media-icons' id='discover-button' onClick={() => {handleDiscoverClick()}} data-testid='discover-again'>Discover Again</button>
                </section>

                <section className='explanation-box'>
                  <p id='explanation'>{`${image.explanation}`}</p>
                </section>
              </section>
            </main>
          </IconContext.Provider> 
          :
        <Error />        
      }
    </>
  ) 
}

export default Discover;