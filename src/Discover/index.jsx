import React, { useEffect, useState } from 'react';
import { fetchPictureFromDate } from '../apiCalls';
import { BsStar, BsFillStarFill } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { saveToLocalStorage, filterData } from '../utilities/utilities';
import { useHistory } from 'react-router-dom';
import { generateRandomDate } from '../utilities/utilities';
import Error from '../Error';
import './Discover.scss';

const Discover = ({ dateUrl }) => {
  const [image, setImage] = useState({});
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState(false);
  const [urlDate, setUrlDate] = useState(null);
  const history = useHistory();
  console.log('urlDate', urlDate)

  const { title, url, date } = image;

  useEffect(() => {
    // if (!urlDate) {
    //   const randomDate = generateRandomDate();
    //   fetchImage(randomDate);
    // }
    generateRandomImage();
  }, []);

  useEffect(() => {
    if (urlDate) {
      fetchImage(urlDate)
    }
  }, [urlDate])

  // useEffect(() => {
  //   compareUrlToTodayDate();

  //   fetchImage(dateUrl)
  // }, [dateUrl]);

  const generateRandomImage = () => {
    setError(false);
    compareUrlToTodayDate();
    
    if (!urlDate) {
      const randomDate = generateRandomDate();
      setUrlDate(randomDate)
      fetchImage(randomDate);
    } else {
      setUrlDate(dateUrl);
      fetchImage(dateUrl);
    }
    // !dateUrl ? fetchImage(randomDate) : fetchImage(dateUrl);
    // dateUrl = randomDate;
    setIsSaved(false);
  }

  const compareUrlToTodayDate = () => {
    const today = new Date();
    const urlDate = new Date(dateUrl);

    if (urlDate > today) {
      setError(true);
    }
  }

  const fetchImage = (date) => {
    setUrlDate(date);
    fetchPictureFromDate(date)
    .then(data => {
      const image = filterData(data);
      setImage(image);
      history.push(`/discover/${date}`);
    })
    .catch(error => setError(true))
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